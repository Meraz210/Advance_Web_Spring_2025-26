function CourseTag({ courseName, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        color: "white",
        padding: "5px 10px",
        margin: "5px",
        borderRadius: "20px",
        fontSize: "12px",
      }}
    >
      {courseName}
    </span>
  );
}

export default CourseTag;