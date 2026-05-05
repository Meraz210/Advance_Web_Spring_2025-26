import { useState, useEffect } from "react";
import StudentCard from "./components/StudentCard";
import DashboardHeader from "./components/DashboardHeader";
import SearchBar from "./components/SearchBar";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([]);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const [editingStudent, setEditingStudent] = useState(null);

  // 🔥 Default data
  const initialData = [
    { id: "101", name: "Meraz", major: "CSE", gpa: 3.9, courses: ["React", "DBMS"] },
    { id: "102", name: "Rahim", major: "EEE", gpa: 3.7, courses: ["C++", "Networking"] },
    { id: "103", name: "Karim", major: "BBA", gpa: 3.5, courses: ["Marketing", "Finance"] },
    { id: "104", name: "Nusrat", major: "CSE", gpa: 3.8, courses: ["Java", "AI"] },
  ];

  // Load
  useEffect(() => {
    const saved = localStorage.getItem("students");
    if (saved && JSON.parse(saved).length > 0) {
      setStudents(JSON.parse(saved));
    } else {
      setStudents(initialData);
    }
  }, []);

  // Save
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // ➕ Add
  const handleAddStudent = (newStudent) => {
    if (students.some((s) => s.id === newStudent.id)) {
      alert("Duplicate ID!");
      return;
    }
    setStudents([...students, newStudent]);
  };

  // ✏️ Update
  const handleUpdateStudent = (updated) => {
    setStudents(students.map((s) => (s.id === updated.id ? updated : s)));
    setEditingStudent(null);
  };

  // ❌ Delete
  const handleDelete = (id) => {
    if (window.confirm("Delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  // ⭐ Favorite
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // 🔍 Search
  const filtered = students.filter((s) => {
    const q = query.toLowerCase();
    return s.name.toLowerCase().includes(q) || s.major.toLowerCase().includes(q);
  });

  // 🔃 Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === "asc") return a.gpa - b.gpa;
    if (sortOrder === "desc") return b.gpa - a.gpa;
    return 0;
  });

  return (
    <div style={{ padding: "20px" }}>
      <DashboardHeader favoriteCount={favorites.length} />

      <AddStudentForm
        addStudent={handleAddStudent}
        onUpdateStudent={handleUpdateStudent}
        editingStudent={editingStudent}
      />

      <SearchBar query={query} setQuery={setQuery} />

      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <button onClick={() => setSortOrder("asc")}>GPA ↑</button>
        <button onClick={() => setSortOrder("desc")} style={{ marginLeft: "10px" }}>
          GPA ↓
        </button>
      </div>

      {sorted.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>No students found</h3>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center" }}>
          {sorted.map((s) => (
            <StudentCard
              key={s.id}
              {...s}
              isFavorite={favorites.includes(s.id)}
              onToggleFavorite={toggleFavorite}
              onDelete={handleDelete}
              onEdit={setEditingStudent}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;