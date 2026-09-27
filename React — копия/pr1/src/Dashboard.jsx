import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

export default function Dashboard() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const titleStyle = {
    color: theme === "dark" ? "#f1f2f6" : "#2f3542",
    marginBottom: "15px",
    fontSize: "30px",
    fontWeight: "bold",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={titleStyle}>Личный кабинет </h2>
      <p style={{ color: theme === "dark" ? "#aaa" : "#555", fontSize: "18px" }}>
        Зашел
      </p>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "8px 18px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "15px",
        }}
      >
        Перейти в каталог
      </button>
    </div>
  );
}