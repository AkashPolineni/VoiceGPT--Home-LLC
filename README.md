# VoiceGPT – Home.LLC Interview Bot 🎙️🤖

This is a voice-based interactive chatbot built using OpenAI’s ChatGPT API. Designed for Stage 1 of the Home.LLC interview, the app allows users to have a real-time conversation with a bot that answers as **Akash Polineni** would during an interview.

---

## 🔗 Live Demo

🟢 Try it out here:  
👉 1. Backend [https://voicegpt-home-llc.onrender.com]
    2. Frontend [https://voice-gpt-home-llc-git-main-akashpolinenis-projects.vercel.app]  
> ⚠️ Note: The app is deployed and ready to use. No setup needed.

⚠️ NOTE:The app is fully deployed and functional. However, the backend uses the developer's OpenAI API key, which may hit its free-tier limit. If the voicebot becomes unresponsive, you can test it locally with your own API key using the instructions below.

If you encounter any errors while trying the deployed app, feel free to clone this repository and:
1. Replace the placeholder in `backend/.env` with your own OpenAI API key.
2. Run the frontend and backend locally using the instructions below.

This is only needed if the live demo becomes unresponsive due to key limitations.
Hope you understand and apply your key in the .env folder mentioned below.

---

## 🎯 Objective

This project meets all Stage 1 requirements:

✅ Uses ChatGPT API  
✅ Works via voice input  
✅ Responds to personality-based interview questions  
✅ Hosted live — no installations or coding needed  
✅ Clean UI for non-technical users  

The bot responds to sample interview questions such as:

- What should we know about your life story in a few sentences?
- What’s your #1 superpower?
- What are the top 3 areas you’d like to grow in?
- What misconception do your coworkers have about you?
- How do you push your boundaries and limits?

---

## 🧠 Features

- 🎙️ Microphone input with waveform display  
- 🤖 ChatGPT API integration with personalized response prompt  
- 🌐 Fully deployed and publicly accessible  
- 💬 Clear and simple design for ease of use  
- 🛠️ Optional local setup for developers (see below)

---

## 🛠️ Local Setup (Optional for Developers)

To run the app locally:

### 1. Clone the Repo

```bash
git clone https://github.com/AkashPolineni/VoiceGPT--Home-LLC.git
cd voicegpt-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add OpenAI API Key

Open the `.env` file in the backend folder and add:

```env
VITE_OPENAI_API_KEY= your_openai_api_key_here -> my key is being used here but it is exhausted. 
```

You can generate your key at:  
🔑 [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

> ⚠️ Note: The API key is only needed for local development.  
> The **deployed app already works out of the box** without this step.

### 4. Start the App

```bash
npm run dev
```

---

## 📦 Vercel Deployment Details

- **Framework Preset:** Other  
- **Build Command:** `npm run build`  
- **Output Directory:** `dist`  
- **Install Command:** `npm install`

---

## 👤 Author

**Akash Polineni**  
🌐 [LinkedIn](https://www.linkedin.com/in/akash-polineni-553773126)  
💻 AI/ML | Full-Stack Dev | Creative Problem Solver  
phone: +91-6361482706
Email id: akashpolineni@gmail.com

---

## 📃 License

MIT License — free to use, learn from, and share!

---

## 🙏 Thank You

Thank you for this opportunity to showcase my skills!  
Looking forward to the next stage of the interview process. 😊
