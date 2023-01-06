import "./Drink.scss";
import Button from "../../UI/Button";
import { drinkData } from "../../data";
const Drink = () => {
  return (
    <section className="drink">
      <div className="container">
        <div className="drink_cards">
          {drinkData.map((item) => (
            <div key={item.id} className="drink_card">
              <img src={item.img} alt={item.name} />
              <div className="drink_text">
                <h1>{item.name}</h1>
                <p>100% all natural fruit juice </p>
                <Button className={"drink_btn"}>SHOP NOW</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Drink;
