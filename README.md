# Animate a Mixamo 3D character with AI

Make your AI avatars respond naturally without over-engineering your animation system. If you've wondered how to make virtual characters interpret emotion and context in real time, this sample will get you started!

## Prerequisties
- [Visual Studio Code](https://code.visualstudio.com/)
    - [Node.js](https://nodejs.org/en/download) installed
- [Blender](https://www.blender.org/)
- [Mixamo](https://www.mixamo.com) account
- [Anthropic](http://platform.claude.com/) API key
- [ElevenLabs](https://elevenlabs.io/app/developers/) API key

## Getting Started

The sample is already equipped with a 3D model of a character that has it's own animations. You can view each animation via the [Babylon.js Sandbox](https://sandbox.babylonjs.com) by uploading the model and selecting each animation to view. The animations are happy, idle, sad, and talking.

1. Clone the repository
1. Install dependencies:
   ```bash
   npm install
   ```
1. Create a `.env` file in the root directory with your API keys:
   ```
   ANTHROPIC_API_KEY=your_anthropic_api_key
   ELEVENLABS_API_KEY=your_elevenlabs_api_key
   ```
1. Run the development server:
   ```bash
   npm run dev
   ```

**Note**: The text-to-speech feature that leverages ElevenLabs is currently disabled. To enable the feature, search for the comment `// AUDIO DISABLED: Convert assistant response to speech and play` and remove the `/*` and `*/`. To hear the audio playback, ensure that your speakers are on and your volume is up.

## Use Your Own Model

Free models and animations are availalbe on [Mixamo](https://www.mixamo.com). What's most important is that you download the right type of model, it's respective animations, and then consolidate all the animations onto a single model in Blender. Once the animations are consolidated, you'll need to modify the `main.ts` file to update the functions that define the emotion analyzer behavior and the emotion/animation mapping.

### Download model and animations

1. On Mixamo, find a model and select it's default animation (ex: Idle).
1. Download the model as a **FBX Binary(.fbx)** file type and **With skin**.
1. Find another animation for the model.
1. Download the model as a **FBX Binary(.fbx)** file type and **Without skin**.

### Consolidate model and animations

1. In Blender, create a new project, delete all scene objects, and save the project.
1. Import the **With skin** model: **File > Import > FBX (.fbx)**
1. Rename the **Armature** to the animation name. This will avoid confusion since the Armature name is consistent across all imported models.
1. Import the **Without skin** animations. However, rename each **Armature** to it's respective animation name prior to importing the next one. 
1. At the bottom left half of the window, hover your mouse over the line and drag up to expand the view.
1. Click the clock icon and change the view to **Nonlinear Animation**. 
1. In the bottom section, for each animation listed, select the animation name and rename the animation on the right (still within the bottom section, in the **Animation Data** section).
1. After all animations have been renamed, for each animation listed, click the **Push Down Action** button. The button is located at the bottom section of the window next to the name of the animation in the orange bar.
1. Delete all **Without skin** scene objects. **DO NOT DELETE** the **With skin** object. This remaining object contains your model and all animations consolidated onto the model.
1. Export your model: **File > Export > .gltf 2.0 (.glt/.gltf)**.

### Add model to the sample code

1. In the sample code, add your model to the **public\models** folder.
1. In **main.ts**, search for the comment `// Load the GLTF model`.
1. In `loader.load`, replace the  model name with your model's file name.

### Update the emotion/animation mapping and emotion analyzer

1. In **main.ts**, search for the comment `// Map emotion to animation`.
1. Update the emotion mapping according to your model's animations.
1. In **main.ts**, search for `You are an emotion analyzer`. This is the system message for the `analyzeEmotionAndAnimate` function which guides the LLM to analyze the user's input. Modify the system message according to the animations for your model.

## Use Your Own AI Voice

This sample uses [ElevenLabs](https://elevenlabs.io/) text-to-speech service. The sample is already equipped with the **Nia Davis - Black Female** voice which is **Voice ID: CBHdTdZwkV4jYoCyMV1B**. You can choose a different AI voice and replace the voice ID in the sample code.

1. On ElevenLabs, find an AI voice.
1. Click the **...** for **More Actions** and select **Copy voice ID**. 
1. In **main.ts** search for `voice_id`.
1. Replace the value for `voice_id` with the copied voice ID.

## Modify the System Prompts

The system prompts are what guides the behavior for the LLMs. You can modify them to best suit your use case. There's 2 system prompts that powers this sample.

- The `analyzeEmotionAndAnimate` function's system prompt is the `system` value. This system prompt provides instruction for how the LLM determines the emotional intent of the user's submitted prompt. The output is currently a single term to indicate the assessed emotion (i.e. happy, sad, neutral, etc.)
- The `anthropic.messages.create` function's system prompt is in the `system` value. This system prompt provides instruction for how the LLM responds to the user's submitted prompt.

## Questions

Feel free to reach out to me directly via messagee on [LinkedIn](https://linkedin.com/in/AprilGittens).