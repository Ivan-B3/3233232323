import { useContext } from "react";
import { CartContext } from "./CartContext";
import { ThemeContext } from "./ThemeContext";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const titleStyle = {
    color: theme === "dark" ? "#f1f2f6" : "#2f3542",
    marginBottom: "20px",
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const btnStyle = {
    padding: "4px 10px",
    cursor: "pointer",
    margin: "0 6px",
    borderRadius: "4px",
    border: "1px solid #aaa",
    backgroundColor: theme === "dark" ? "#444" : "#f0f0f0",
    color: theme === "dark" ? "#fff" : "#000",
  };

  const deleteBtnStyle = {
    marginLeft: "15px",
    padding: "6px 12px",
    cursor: "pointer",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={titleStyle}>Корзина</h2>
      {cart.length === 0 ? (
        <p style={{ color: theme === "dark" ? "#bbb" : "#666" }}>Корзина пуста</p>
      ) : (
        <div style={{ width: "100%", maxWidth: "650px" }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom:
                    theme === "dark" ? "1px solid #444" : "1px solid #ddd",
                  color: theme === "dark" ? "#fff" : "#000",
                }}
              >
                {/* Фото товара и название с ценой */}
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      border: theme === "dark" ? "1px solid #555" : "1px solid #eee",
                    }}
                  />
                  <div>
                    <strong style={{ fontSize: "16px" }}>{item.name}</strong>
                    <div style={{ color: theme === "dark" ? "#aaa" : "#777", fontSize: "14px", marginTop: "4px" }}>
                      {item.price} ₽ × {item.quantity} = <strong>{item.price * item.quantity} ₽</strong>
                    </div>
                  </div>
                </div>

                {/* Блок управления количеством и удаление */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button onClick={() => decreaseQuantity(item.id)} style={btnStyle}>
                    -
                  </button>
                  <span style={{ minWidth: "25px", textAlign: "center", fontWeight: "bold" }}>
                    {item.quantity}
                  </span>
                  <button onClick={() => increaseQuantity(item.id)} style={btnStyle}>
                    +
                  </button>

                  <button onClick={() => removeFromCart(item.id)} style={deleteBtnStyle}>
                    Удалить
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3 style={{ marginTop: "25px", textAlign: "right", color: theme === "dark" ? "#fff" : "#000" }}>
            Итоговая сумма: {totalPrice} рублей
          </h3>
        </div>
      )}
    </div>
  );
}