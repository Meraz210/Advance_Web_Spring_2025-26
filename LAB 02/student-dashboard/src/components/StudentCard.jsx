import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";

function StudentCard({
  name,
  id,
  major,
  gpa,
  courses,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        width: "220px",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* ⭐ Favorite Button */}
      <button
        onClick={() => onToggleFavorite(id)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "none",
          background: "transparent",
          fontSize: "20px",
          cursor: "pointer",
          color: isFavorite ? "gold" : "#ccc",
        }}
        title="Toggle favorite"
      >
        ★
      </button>

      <h3>{name}</h3>

      {/* Stats */}
      <StatBadge label="ID" value={id} />
      <StatBadge label="Major" value={major} />
      <StatBadge label="GPA" value={gpa} />

      {/* Courses */}
      <div style={{ marginTop: "10px" }}>
        {courses?.map((course, index) => (
          <CourseTag key={index} courseName={course} color="blue" />
        ))}
      </div>
    </div>
  );
}

export default StudentCard;