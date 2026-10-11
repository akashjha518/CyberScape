# Architecture

CyberEscape has three main parts:

1. **React + Vite frontend:** collects preferences, displays missions, gathers reflections, and shows feedback and progress.
2. **FastAPI backend:** validates request models, builds structured prompts, calls Ollama, and validates structured responses.
3. **Ollama local model:** generates missions and reflection feedback.

Endpoints:
- `GET /api/health` — backend health and configured model.
- `POST /api/missions` — generate a mission.
- `POST /api/reflections` — validate a reflection and generate feedback.

The browser stores XP, completed count, completed mission identifiers, and history in `localStorage`. This is local persistence, not cloud synchronization or an authenticated account system.

Design principles: safe outdoor activity, explicit mission boundaries, structured output validation, clear errors, and no requirement to use the phone during the walk.
