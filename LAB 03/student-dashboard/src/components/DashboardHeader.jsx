function DashboardHeader({ favoriteCount }) {
  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1> Student Dashboard</h1>
      <p style={{ color: "#9ca3af" }}>
        Favorites: {favoriteCount}
      </p>
    </header>
  );
}

export default DashboardHeader;