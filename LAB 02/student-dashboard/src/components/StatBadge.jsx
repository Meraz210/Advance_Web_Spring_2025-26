function StatBadge({ label, value }) {
  return (
    <div
      style={{
        backgroundColor: "#1f2937",
        color: "white",
        padding: "5px 10px",
        borderRadius: "6px",
        margin: "5px 0",
        fontSize: "14px",
      }}
    >
      <strong>{label}:</strong> {value}
    </div>
  );
}

export default StatBadge;