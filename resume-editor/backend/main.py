from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory resume store
resume_store = {}

class EnhanceRequest(BaseModel):
    section: str
    content: str

class SaveResumeRequest(BaseModel):
    resume: Dict

@app.post("/ai-enhance")
def enhance_section(req: EnhanceRequest):
    improved = f"✨ Improved: {req.content} ✨"
    return {"section": req.section, "content": improved}

@app.post("/save-resume")
def save_resume(req: SaveResumeRequest):
    resume_store["resume"] = req.resume
    return {"message": "Resume saved successfully"}

@app.get("/get-resume")
def get_resume():
    return resume_store.get("resume", {})
@app.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    try:
        if not file.filename.endswith((".txt", ".md")):  # simple check
            return {"error": "Unsupported file type"}
        content = await file.read()
        return {"filename": file.filename, "content": content.decode('utf-8', errors='ignore')}
    except Exception as e:
        return {"error": str(e)}

                                                                                                                                           
