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