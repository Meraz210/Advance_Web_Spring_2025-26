import StudentCard from "./components/StudentCard";
import DashboardHeader from "./components/DashboardHeader";

function App() {
  const students = [
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
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Header */}
      <DashboardHeader />

      {/* Student Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {students.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </div>
  );
}

export default App;