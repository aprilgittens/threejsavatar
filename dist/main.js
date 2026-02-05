import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// Setup scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Add some basic lighting so you can see your model
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
// Variables for your avatar
let mixer;
let animations = {};
let model;
// Load the GLTF model
const loader = new GLTFLoader();
loader.load('/models/Michelle-Avatar.glb', // Put your model in a 'public/models' folder
(gltf) => {
    model = gltf.scene;
    scene.add(model);
    mixer = new THREE.AnimationMixer(model);
    gltf.animations.forEach((clip) => {
        animations[clip.name] = mixer.clipAction(clip);
    });
    console.log('Available animations:', Object.keys(animations));
    playAnimation('Run');
    if (gltf.animations.length > 0) {
        animations[gltf.animations[0].name].play();
    }
}, (progress) => {
    console.log('Loading:', (progress.loaded / progress.total * 100) + '%');
}, (error) => {
    console.error('Error loading model:', error);
});
// Animation loop
const clock = new THREE.Clock();
function animate() {
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
function playAnimation(name) {
    // Stop all animations
    Object.values(animations).forEach((action) => action.stop());
    // Play the requested animation
    if (animations[name]) {
        animations[name].reset().play();
    }
}
// Example usage:
// playAnimation('Run');
// playAnimation('Idle');
// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
