import axios from "axios";

function SectionEditor({ title, sectionKey, content, setResume }) {
  const handleChange = (e, index) => {
    if (Array.isArray(content)) {
      const newContent = [...content];
      newContent[index] = e.target.value;
      setResume((prev) => ({ ...prev, [sectionKey]: newContent }));
    } else {
      setResume((prev) => ({ ...prev, [sectionKey]: e.target.value }));
    }
  };

  const handleEnhance = async () => {
    const sectionContent = Array.isArray(content) ? content.join(", ") : content;
    const res = await axios.post("http://localhost:8000/ai-enhance", {
      section: sectionKey,
      content: sectionContent
    });
    const improved = res.data.content;
    setResume((prev) => ({ ...prev, [sectionKey]: improved }));
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{title}</h3>
      {Array.isArray(content) ? (
        content.map((entry, index) => (
          <input
            key={index}
            type="text"
            value={entry}
            onChange={(e) => handleChange(e, index)}
          />
        ))
      ) : (
        <textarea
          value={content}
          onChange={(e) => handleChange(e)}
          rows={3}
          cols={50}
        />
      )}
      <button onClick={handleEnhance}>✨ Enhance with AI</button>
    </div>
  );
}

export default SectionEditor;
