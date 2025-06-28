import React, { useState } from "react";
import UploadResume from "./components/UploadResume";
import ResumeEditor from "./components/ResumeEditor";

function App() {
  const [resume, setResume] = useState({
    name: "John Doe",
    summary: "Experienced developer...",
    experience: [],
    education: [],
    skills: [],
  });

  return (
    <div className="App">
      <h1>Resume Editor</h1>
      <UploadResume setResume={setResume} />
      <ResumeEditor resume={resume} setResume={setResume} />
    </div>
  );
}

export default App;
