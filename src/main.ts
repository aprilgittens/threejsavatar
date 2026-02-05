import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Anthropic from '@anthropic-ai/sdk';
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';

// Get canvas container and calculate dimensions
const canvasContainer = document.getElementById('canvas-container') as HTMLElement;
const canvasWidth = canvasContainer.clientWidth;
const canvasHeight = canvasContainer.clientHeight;

// Setup scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvasWidth / canvasHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(canvasWidth, canvasHeight);
canvasContainer.appendChild(renderer.domElement);

// Add some basic lighting so you can see your model
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// Variables for your avatar
let mixer: THREE.AnimationMixer;
let animations: { [key: string]: THREE.AnimationAction } = {};
let model: THREE.Group;

// Load the GLTF model
const loader = new GLTFLoader();
loader.load(
  '/models/Michelle-demo.glb', // Put your model in a 'public/models' folder
  (gltf) => {
    model = gltf.scene;
    scene.add(model);
    
    mixer = new THREE.AnimationMixer(model);
    
    gltf.animations.forEach((clip: THREE.AnimationClip) => {
      animations[clip.name] = mixer.clipAction(clip);
    });
    
    console.log('Available animations:', Object.keys(animations));

    playAnimation('Idle');
  },
  (progress) => {
    console.log('Loading:', (progress.loaded / progress.total * 100) + '%');
  },
  (error) => {
    console.error('Error loading model:', error);
  }
);

// Animation loop
const clock = new THREE.Clock();
function animate(): void {
  requestAnimationFrame(animate);
  
  if (mixer) {
    mixer.update(clock.getDelta());
  }
  
  renderer.render(scene, camera);
}

camera.position.z = 2;
camera.position.y = 0.5;
animate();

// Function to switch between animations
function playAnimation(name: string): void {
  // Stop all animations
  Object.values(animations).forEach((action: THREE.AnimationAction) => action.stop());
  
  // Play the requested animation
  if (animations[name]) {
    const action = animations[name];
    action.reset();
    
    if (name === 'Idle') {
      // Idle should loop continuously
      action.setLoop(THREE.LoopRepeat, Infinity);
      action.play();
    } else {
      // Other animations play once, then return to Idle
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      
      // Add listener to return to Idle when animation finishes
      const onAnimationFinished = (e: any) => {
        if (e.action === action) {
          mixer.removeEventListener('finished', onAnimationFinished);
          playAnimation('Idle');
        }
      };
      mixer.addEventListener('finished', onAnimationFinished);
      
      action.play();
    }
  }
}

// Example usage:
// playAnimation('Run');
// playAnimation('Idle');

// Handle window resize
window.addEventListener('resize', () => {
  const canvasContainer = document.getElementById('canvas-container') as HTMLElement;
  const newWidth = canvasContainer.clientWidth;
  const newHeight = canvasContainer.clientHeight;
  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(newWidth, newHeight);
});

// Chat functionality
const chatMessages = document.getElementById('chat-messages') as HTMLElement;
const chatInput = document.getElementById('chat-input') as HTMLTextAreaElement;
const sendButton = document.getElementById('send-button') as HTMLButtonElement;

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true // Only for development - use a backend proxy in production
});

// Initialize ElevenLabs client
const elevenlabs = new ElevenLabsClient({
  apiKey: import.meta.env.VITE_ELEVEN_LABS_API_KEY
});

// Store conversation history
const conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = [];

// Add message to chat UI
function addMessage(content: string, role: 'user' | 'assistant' | 'loading'): HTMLElement {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${role}`;
  messageDiv.textContent = content;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return messageDiv;
}

// Analyze emotional tone and trigger appropriate animation
async function analyzeEmotionAndAnimate(userMessage: string): Promise<void> {
  try {
    const emotionResponse = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 50,
      system: 'You are an emotion analyzer. Analyze the emotional tone of the user input and respond with ONLY ONE WORD: "neutral", "happy", or "sad". Rules: neutral = calm/ordinary topics, happy = positive/pleasant/joyful topics, sad = negative/unpleasant/sorrowful topics.',
      messages: [{ role: 'user', content: `Analyze the emotional tone of this message: "${userMessage}"` }]
    });
    
    const emotionContent = emotionResponse.content[0];
    if (emotionContent.type === 'text') {
      const emotion = emotionContent.text.toLowerCase().trim();
      
      // Map emotion to animation
      if (emotion.includes('happy')) {
        playAnimation('Happy');
      } else if (emotion.includes('sad')) {
        playAnimation('Sad');
      } else {
        playAnimation('Idle');
      }
      
      console.log(`Detected emotion: ${emotion}`);
    }
  } catch (error) {
    console.error('Error analyzing emotion:', error);
    playAnimation('Idle'); // Default to Idle on error
  }
}

// Send message to Anthropic API
async function sendMessage(userMessage: string): Promise<void> {
  if (!userMessage.trim()) return;
  
  // Disable input while processing
  chatInput.disabled = true;
  sendButton.disabled = true;
  
  // Add user message to UI and history
  addMessage(userMessage, 'user');
  conversationHistory.push({ role: 'user', content: userMessage });
  
  // Analyze emotion and trigger animation
  analyzeEmotionAndAnimate(userMessage);
  
  // Add loading indicator
  const loadingMessage = addMessage('Thinking...', 'loading');
  
  try {
    // Call Anthropic API for conversation response
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 150,
      system: 'You are a friendly conversational AI. Keep responses brief (2-3 sentences max), casual, and natural like texting a friend. No markdown formatting, bullet points, or lists. Just plain conversational text.',
      messages: conversationHistory
    });
    
    // Remove loading message
    loadingMessage.remove();
    
    // Extract response text
    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const assistantMessage = textContent.text;
      
      // Add assistant message to UI and history
      addMessage(assistantMessage, 'assistant');
      conversationHistory.push({ role: 'assistant', content: assistantMessage });
      
      // AUDIO DISABLED: Convert assistant response to speech and play
      /*
      try {
        const audio = await elevenlabs.textToSpeech.convert(
          'CBHdTdZwkV4jYoCyMV1B', // voice_id
          {
            text: assistantMessage,
            modelId: 'eleven_multilingual_v2',
            outputFormat: 'mp3_44100_128'
          }
        );
        
        // Convert the audio stream to a blob and play it in the browser
        const chunks: Uint8Array[] = [];
        for await (const chunk of audio) {
          chunks.push(chunk);
        }
        const blob = new Blob(chunks, { type: 'audio/mpeg' });
        const audioUrl = URL.createObjectURL(blob);
        const audioElement = new Audio(audioUrl);
        audioElement.play();
      } catch (error) {
        console.error('ElevenLabs TTS error:', error);
      }
      */
    }
  } catch (error) {
    loadingMessage.remove();
    addMessage('Error: Failed to get response from Claude. Please try again.', 'assistant');
    console.error('Anthropic API error:', error);
  } finally {
    // Re-enable input
    chatInput.disabled = false;
    sendButton.disabled = false;
    chatInput.focus();
  }
}

// Handle send button click
sendButton.addEventListener('click', () => {
  const message = chatInput.value;
  chatInput.value = '';
  chatInput.style.height = 'auto';
  sendMessage(message);
});

// Handle Enter key (Shift+Enter for new line)
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    const message = chatInput.value;
    chatInput.value = '';
    chatInput.style.height = 'auto';
    sendMessage(message);
  }
});

// Auto-resize textarea
chatInput.addEventListener('input', () => {
  chatInput.style.height = 'auto';
  chatInput.style.height = chatInput.scrollHeight + 'px';
});
