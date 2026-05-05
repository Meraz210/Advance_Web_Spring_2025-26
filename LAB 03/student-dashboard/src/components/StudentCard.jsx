function StudentCard({
  id,
  name,
  major,
  gpa,
  courses,
  isFavorite,
  onToggleFavorite,
  onDelete,
  onEdit,
}) {
  return (
    <div
      style={{
        border: "1px solid #555",
        borderRadius: "10px",
        padding: "15px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <h3>
        {name}{" "}
        <span style={{ cursor: "pointer" }} onClick={() => onToggleFavorite(id)}>
          {isFavorite ? "⭐" : "☆"}
        </span>
      </h3>

      <p>ID: {id}</p>
      <p>Major: {major}</p>
      <p>GPA: {gpa}</p>

      <div>
        {courses.map((c, i) => (
          <span key={i} style={{ margin: "3px", padding: "3px 6px", background: "blue", color: "white", borderRadius: "5px" }}>
            {c}
          </span>
        ))}
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => onEdit({ id, name, major, gpa, courses })}>
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          style={{ marginLeft: "5px", background: "red", color: "white" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;