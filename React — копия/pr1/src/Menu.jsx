import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { CartContext } from "./CartContext";

function Menu({ onLogout }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { totalCount } = useContext(CartContext);

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "red" : theme === "dark" ? "#fff" : "#000",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
    fontSize: "18px",
  });

  const buttonStyle = {
    padding: "6px 12px",
    cursor: "pointer",
    backgroundColor: theme === "dark" ? "#3a3a3a" : "#eee",
    color: theme === "dark" ? "#fff" : "#000",
    border: "1px solid #777",
    borderRadius: "4px",
  };

  const logoutButtonStyle = {
    padding: "6px 12px",
    cursor: "pointer",
    backgroundColor: "#ff4757",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px",
        gap: "20px",
      }}
    >
      <NavLink to="/" end style={linkStyle}>
        Главная
      </NavLink>

      <NavLink to="/cart" style={linkStyle}>
        Корзина ({totalCount})
      </NavLink>

      <button onClick={toggleTheme} style={buttonStyle}>
        Переключить тему ({theme})
      </button>

      <button onClick={onLogout} style={logoutButtonStyle}>
        Выйти
      </button>
    </nav>
  );
}

export default Menu;