import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ThemeContext } from "./ThemeContext";

export const products = [
  { id: 1, name: "Хлеб", price: 100, image: "https://avatars.mds.yandex.net/i?id=a5686b205cc2ee708ca61d8fc8a1fd62_l-4012442-images-thumbs&n=13" },
  { id: 2, name: "Молоко", price: 130, image: "https://tsx.x5static.net/i/800x800-fit/xdelivery/files/43/47/f2f29dd136092575645571d0a3ef.jpg" },
  { id: 3, name: "Конфеты", price: 400, image: "https://avatars.mds.yandex.net/get-mpic/1750349/img_id395143456362518547.jpeg/orig" },
  { id: 4, name: "Сыр", price: 250, image: "https://avatars.mds.yandex.net/get-mpic/20419207/2a0000019d6eea38664e68f2dade7ff04e2f/orig" },
  { id: 5, name: "Соль", price: 70, image: "https://avatars.mds.yandex.net/i?id=5c7024bb1158c7c14c334ec12976c36b_l-5877333-images-thumbs&n=13" },
];

function Home() {
  const { theme } = useContext(ThemeContext);

  const titleStyle = {
    color: theme === "dark" ? "#f1f2f6" : "#2f3542",
    marginBottom: "30px",
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div>
      <h1 style={titleStyle}>Каталог товаров</h1>
      <div
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;