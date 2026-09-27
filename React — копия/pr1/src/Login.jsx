import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (onLogin) {
      onLogin();
    }
    // Редирект на /dashboard после успешного входа
    navigate("/dashboard");
  }

  const titleStyle = {
    color: theme === "dark" ? "#f1f2f6" : "#2f3542",
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: theme === "dark" ? "1px solid #555" : "1px solid #ccc",
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    boxSizing: "border-box",
    fontSize: "15px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2ed573",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "60px" }}>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={toggleTheme}
          style={{
            padding: "6px 12px",
            cursor: "pointer",
            backgroundColor: theme === "dark" ? "#3a3a3a" : "#eee",
            color: theme === "dark" ? "#fff" : "#000",
            border: "1px solid #777",
            borderRadius: "4px",
          }}
        >
          Тема: {theme}
        </button>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: theme === "dark" ? "#2a2a2a" : "#fafafa",
          border: theme === "dark" ? "1px solid #444" : "1px solid #e0e0e0",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={titleStyle}>Вход в магазин</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}