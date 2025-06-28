Resume Editor (React + FastAPI)

A web-based Resume Editor that allows users to upload, edit, enhance, and download their resumes using a modern frontend and backend stack.

Features:

Upload .pdf or .docx resume (mocked parsing)

Edit key sections: name, summary, experience, education, skills, notes

Enhance any section with AI (mocked via FastAPI endpoint)

Save resume to backend

Download the final resume as .json

Project Structure:

resume-editor/
├── backend/ → FastAPI app
│ ├── main.py → API routes for enhance and save
│ └── requirements.txt → Backend dependencies
│
├── frontend/ → React app
│ ├── public/ → Contains index.html
│ ├── src/ → Source code
│ │ ├── components/ → ResumeEditor, UploadResume, SectionEditor
│ │ ├── App.jsx → Main app component
│ │ └── index.js → React entry point
│ ├── package.json → Frontend dependencies and scripts

Setup Instructions:

Backend (FastAPI)

Prerequisites:

Python 3.8 or higher

pip

Steps:

Open terminal

Navigate to the backend folder:
cd backend

Install dependencies:
pip install -r requirements.txt

Start the backend server:
uvicorn main:app --reload

Server runs on: http://localhost:8000

Available endpoints:

POST /ai-enhance

POST /save-resume

GET /get-resume

Frontend (React)

Prerequisites:

Node.js installed (v16+)

npm

Steps:

Open terminal

Navigate to the frontend folder:
cd frontend

Install dependencies:
npm install

Start the React app:
npm start

App runs on: http://localhost:3000

Optional Configuration:

If needed, update backend API URL inside any frontend file (e.g., SectionEditor.jsx) when calling axios.

Planned Enhancements:

Real AI enhancement using OpenAI or HuggingFace

Real .pdf / .docx file parsing

PDF generation of the final resume

Docker and container deployment



Acknowledgments:
Built using React for frontend and FastAPI for backend.
Inspired by modern resume tools and AI-assisted writing.
