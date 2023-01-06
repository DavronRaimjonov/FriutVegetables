import { products } from "../../data";
import "./Products.scss";
const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products_cards">
          {products.map((item) => (
            <div key={item.id} className="products_card">
              <img src={item.img} alt={item.name} />
              <br />
              <button className="prodducts_btn">{item.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
