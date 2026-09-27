import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Menu from "./Menu";

import { ThemeContext } from "./ThemeContext";
import { CartProvider } from "./CartContext";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app_theme") || "light";
  });

  // Храним статус авторизации в localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("is_auth") === "true";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("app_theme", nextTheme);
      return nextTheme;
    });
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("is_auth", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("is_auth");
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#242424" : "#ffffff";
    document.body.style.color = theme === "dark" ? "#ffffff" : "#000000";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, [theme]);

  const outerStyles = {
    backgroundColor: theme === "dark" ? "#242424" : "#ffffff",
    color: theme === "dark" ? "#ffffff" : "#000000",
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    padding: "30px 20px",
  };

  const containerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CartProvider>
        <div style={outerStyles}>
          <div style={containerStyles}>
            <BrowserRouter>
              {!isAuthenticated ? (
                // Если ещё не вошли — доступен только экран входа
                <Routes>
                  <Route path="*" element={<Login onLogin={handleLogin} />} />
                </Routes>
              ) : (
                // После успешного входа открывается полный сайт
                <>
                  <Menu onLogout={handleLogout} />
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </>
              )}
            </BrowserRouter>
          </div>
        </div>
      </CartProvider>
    </ThemeContext.Provider>
  );
}

export default App;