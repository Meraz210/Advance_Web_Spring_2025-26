import { useState, useEffect } from "react";

function AddStudentForm({ addStudent, onUpdateStudent, editingStudent }) {
  const [form, setForm] = useState({
    name: "",
    id: "",
    major: "",
    gpa: "",
    courses: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setForm({
        ...editingStudent,
        courses: editingStudent.courses.join(", "),
      });
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.id || !form.major || !form.gpa) {
      alert("All fields required!");
      return;
    }

    const gpa = parseFloat(form.gpa);
    if (gpa < 0 || gpa > 4) {
      alert("GPA must be between 0-4");
      return;
    }

    const student = {
      ...form,
      gpa,
      courses: form.courses
        ? form.courses.split(",").map((c) => c.trim())
        : [],
    };

    if (editingStudent) {
      onUpdateStudent(student);
    } else {
      addStudent(student);
    }

    setForm({ name: "", id: "", major: "", gpa: "", courses: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginBottom: "20px" }}>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="ID" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} disabled={!!editingStudent} />
      <input placeholder="Major" value={form.major} onChange={(e) => setForm({ ...form, major: e.target.value })} />
      <input placeholder="GPA" value={form.gpa} onChange={(e) => setForm({ ...form, gpa: e.target.value })} />
      <input placeholder="Courses (comma separated)" value={form.courses} onChange={(e) => setForm({ ...form, courses: e.target.value })} />
      <br />
      <button type="submit" style={{ marginTop: "10px" }}>
        {editingStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default AddStudentForm;