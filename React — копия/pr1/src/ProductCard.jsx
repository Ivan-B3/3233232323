import { useContext } from "react";
import { CartContext } from "./CartContext";
import { ThemeContext } from "./ThemeContext";

function ProductCard({ id, name, price, image }) {
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  function handleAddToCart() {
    // Товар просто добавляется в глобальную корзину, оставаясь на странице
    addToCart({ id, name, price, image });
  }

  const cardStyle = {
    border: theme === "dark" ? "1px solid #555" : "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center",
    backgroundColor: theme === "dark" ? "#2a2a2a" : "#fafafa",
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} width="100%" height="150" style={{ objectFit: "cover" }} />
      <h3>{name}</h3>
      <p>Цена: {price} рублей</p>
      <button onClick={handleAddToCart} style={{ padding: "8px 12px", cursor: "pointer" }}>
        В корзину
      </button>
    </div>
  );
}

export default ProductCard;