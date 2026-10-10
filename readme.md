# 🌿 CyberEscape

### Touch Grass. Think Like a Defender. Escape the Screen.

CyberEscape is an AI-powered cybersecurity learning experience that encourages people to step away from their screens, explore their surroundings, and develop a security-first mindset through real-world observation missions.

Instead of spending all their time reading about cybersecurity, users receive AI-generated missions, observe their environment, identify potential security risks, and think about how a defender could mitigate them.

**Learn cybersecurity by observing the world around you.**

---

## ✨ Why CyberEscape?

Cybersecurity education often happens entirely on a screen. CyberEscape takes a different approach by combining outdoor exploration, critical thinking, and AI-powered learning.

The project is built around three principles:

- 🌱 **Touch Grass:** Encourage users to take a break from continuous screen time.
- 🔍 **Think Like a Defender:** Develop the habit of observing environments and identifying potential security concerns.
- 🤖 **Learn with AI:** Generate personalized missions using a locally running language model.

CyberEscape turns an ordinary walk into an opportunity to practice security awareness.

## 🚀 Features

- **AI-generated missions:** Create cybersecurity observation challenges based on the selected topic, difficulty, and duration.
- **Customizable challenges:** Choose mission settings to match your interests and available time.
- **Local AI integration:** Use Ollama with the Gemma 3 4B model to generate missions locally.
- **Interactive interface:** A dark, nature-inspired interface designed to make the experience engaging.
- **Loading feedback:** Animated loading indicators keep users informed while the AI generates a mission.
- **Defensive learning:** Focus on identifying risks, understanding their potential impact, and considering appropriate mitigations.
- **Privacy-conscious architecture:** Local model inference avoids sending mission prompts to a hosted AI API by default.

> **Current status:** The MVP supports AI-powered mission generation. Reflection analysis, persistent progress, and gamification are planned improvements.

## 🛠️ Tech Stack

| Component | Technology |
|---|---|
| Frontend | React.js |
| Frontend tooling | Vite |
| Styling | CSS |
| Backend | Python, FastAPI |
| AI inference | Ollama |
| Language model | Gemma 3 4B |
| API communication | HTTP / REST |

## 🏗️ Architecture

```text
User
 |
 v
React + Vite Frontend
 |
 | POST /api/missions
 v
FastAPI Backend
 |
 v
Ollama
 |
 v
Gemma 3 4B
 |
 | Generated mission
 v
FastAPI Response
 |
 v
React Mission Interface
```

The frontend collects the user's mission preferences and sends them to the FastAPI backend. The backend communicates with the local Ollama model and returns the generated mission to the interface.

## 📁 Project Structure

```text
CyberScape/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── package.json
│   └── ...
├── backend/
│   ├── main.py
│   └── ...
├── .gitignore
└── README.md
```

*The structure above represents the main files currently known; update it if your actual project contains additional files or folders.*

## ⚙️ Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [Ollama](https://ollama.com/)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/akashjha518/CyberScape.git
cd CyberScape
```

### 2. Set up the AI model

Install and start Ollama, then download the model:

```bash
ollama pull gemma3:4b
```

Make sure Ollama is running and the model is available locally.

### 3. Start the backend

Open a terminal at the project root:

```bash
cd backend
python -m venv .venv
```

Activate the virtual environment.

**Windows PowerShell:**

```powershell
.\.venv\Scripts\Activate.ps1
```

Install the backend dependencies:

```bash
pip install fastapi uvicorn requests
```

Start the API server:

```bash
uvicorn main:app --reload
```

The backend should be available at:

- API: `http://127.0.0.1:8000`
- Interactive API documentation: `http://127.0.0.1:8000/docs`

If the project already has a `requirements.txt`, install its dependencies with `pip install -r requirements.txt` instead of relying on the example installation command.

### 4. Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

`http://localhost:5173`

### 5. Generate your first mission

1. Open CyberEscape in your browser.
2. Select your preferred mission duration, difficulty, and topic.
3. Click **Generate AI mission**.
4. Wait for the local AI model to prepare your challenge.
5. Read the instructions and complete the mission safely.

**Note:** The backend's Ollama URL, model name, and frontend API configuration must match your actual project settings.

## 🌍 Example Mission

**Mission: Observe Your Environment**

- **Objective:** Identify a potential security concern in an environment you can observe safely.
- **Action:** Take a short walk and look for general security practices, such as unattended devices, exposed screens, or access-control procedures.
- **Think like a defender:** What could go wrong, who might be affected, and what practical mitigation would help?
- **Safety rule:** Observe only what is visible to you legitimately. Do not access devices, enter restricted areas, photograph people or sensitive information, or test security controls without authorization.

This example illustrates the concept; actual missions are generated by the AI.

## 🔐 Safety and Privacy

CyberEscape is designed for **ethical, defensive cybersecurity education**.

- Observe only public or otherwise authorized environments.
- Never attempt unauthorized access, bypass access controls, or interfere with devices.
- Do not collect credentials, personal data, or confidential information.
- Avoid photographing people, screens, badges, or sensitive locations.
- Follow local rules and respect privacy.
- Stay aware of traffic and your surroundings while walking.
- AI-generated content should be reviewed for safety and accuracy.

Local AI inference helps keep prompts on the user's machine by default, but privacy also depends on the application's implementation and any external services it uses.

## 🗺️ Roadmap

- [x] Build the React frontend.
- [x] Integrate the FastAPI backend.
- [x] Connect mission generation to Ollama.
- [x] Add configurable mission settings.
- [x] Add loading states and progress animation.
- [ ] Add a mission completion workflow.
- [ ] Add reflection questions and AI-powered feedback.
- [ ] Track completed missions and experience points.
- [ ] Persist user progress between sessions.
- [ ] Improve error handling and automated tests.
- [ ] Add a project demo and screenshots.

## 🤝 Contributing

Contributions, ideas, bug reports, and feedback are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the frontend and backend.
5. Submit a pull request describing your changes.

Please keep contributions ethical, privacy-conscious, and focused on defensive learning.

## 🎯 Hacktoberfest

CyberEscape explores a simple question:

**What if learning cybersecurity encouraged you to spend less time staring at a screen and more time thinking critically about the world around you?**

By combining AI, outdoor exploration, and defensive security awareness, CyberEscape aims to make cybersecurity learning more interactive, practical, and mindful.

## 👨‍💻 Author

**Akash Jha**

- GitHub: [@akashjha518](https://github.com/akashjha518)

---

*Step outside. Observe carefully. Think like a defender.* 🌿🔐
