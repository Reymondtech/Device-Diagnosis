AI Device Diagnosis App
This project is a React + TypeScript application that allows users to describe a problem with their device (phone, laptop, etc.) and receive an AI‑generated diagnosis including:
• Explanation of the issue
• Most likely cause
• Recommended solution
• Severity level
• Safety indicator
The AI analysis is powered by Groq (Llama 3 model).

How It Works
1. User selects a device
2. User describes the problem
3. The app sends the text to an AI model
4. The AI returns structured JSON
5. The result is displayed in a clean UI


Tech Stack
Frontend:
• React
• TypeScript
• React Router
• React Hook Form
• Context API
AI Integration:
• Groq API (OpenAI‑compatible endpoint)
• Custom diagnoseAI() function

Create a .env file in the project root:
VITE_GROQ_KEY=your_api_key_here

Restart the dev server after adding it:
