import { useState, useEffect } from "react";
import StudentCard from "./components/StudentCard";
import DashboardHeader from "./components/DashboardHeader";
import SearchBar from "./components/SearchBar";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  
  useEffect(() => {
    setTimeout(() => {
      setStudents([
        {
          id: "101",
          name: "Meraz",
          major: "CSE",
          gpa: 3.9,
          courses: ["React", "DBMS"],
        },
        {
          id: "102",
          name: "Rahim",
          major: "EEE",
          gpa: 3.7,
          courses: ["C++", "Networking"],
        },
        {
          id: "103",
          name: "Karim",
          major: "BBA",
          gpa: 3.5,
          courses: ["Marketing", "Finance"],
        },
        {
          id: "104",
          name: "Nusrat",
          major: "CSE",
          gpa: 3.8,
          courses: ["Java", "AI"],
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

 
  const filteredStudents = students.filter((s) => {
    const q = query.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.major.toLowerCase().includes(q)
    );
  });

 
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    document.title = `Favorites: ${favorites.length}`;
  }, [favorites]);

  
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortOrder === "asc") return a.gpa - b.gpa;
    if (sortOrder === "desc") return b.gpa - a.gpa;
    return 0;
  });

  return (
    <div style={{ padding: "20px" }}>
      {/* Header */}
      <DashboardHeader favoriteCount={favorites.length} />

      {/* Search */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* Sort Buttons */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <button onClick={() => setSortOrder("asc")}>GPA ↑</button>
        <button
          onClick={() => setSortOrder("desc")}
          style={{ marginLeft: "10px" }}
        >
          GPA ↓
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {sortedStudents.map((student) => (
            <StudentCard
              key={student.id}
              {...student}
              isFavorite={favorites.includes(student.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;