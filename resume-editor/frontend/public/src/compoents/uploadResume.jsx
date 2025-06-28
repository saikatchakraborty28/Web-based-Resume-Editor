function UploadResume({ setResume }) {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Mock parse
      setResume({
        name: "Jane Doe",
        summary: "Motivated software engineer...",
        experience: [{ role: "Intern", company: "ABC Corp" }],
        education: [{ degree: "B.Tech", institution: "XYZ University" }],
        skills: ["JavaScript", "React", "Python"]
      });
    }
  };

  return <input type="file" accept=".pdf,.docx" onChange={handleUpload} />;
}

export default UploadResume;
