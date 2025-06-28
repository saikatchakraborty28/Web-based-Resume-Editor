import SectionEditor from "./SectionEditor";
import axios from "axios";

function ResumeEditor({ resume, setResume }) {
  const handleSave = async () => {
    await axios.post("http://localhost:8000/save-resume", {
      resume: resume
    });
    alert("Resume saved!");
  };

  const handleDownload = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resume));
    const link = document.createElement("a");
    link.setAttribute("href", dataStr);
    link.setAttribute("download", "resume.json");
    link.click();
  };

  return (
    <div>
      <SectionEditor title="Name" sectionKey="name" content={resume.name} setResume={setResume} />
      <SectionEditor title="Summary" sectionKey="summary" content={resume.summary} setResume={setResume} />

      {["experience", "education", "skills"].map((key) =>
        <SectionEditor
          key={key}
          title={key.charAt(0).toUpperCase() + key.slice(1)}
          sectionKey={key}
          content={resume[key]}
          setResume={setResume}
        />
      )}

      <button onClick={handleSave}>💾 Save Resume</button>
      <button onClick={handleDownload}>⬇️ Download JSON</button>
    </div>
  );
}

export default ResumeEditor;
