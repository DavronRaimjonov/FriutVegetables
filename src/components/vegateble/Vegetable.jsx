import React, { useContext, useState } from "react";
import { Context } from "../../context";
import { categories } from "../../data";
import Button from "../../UI/Button";
import "./Vegetable.scss";
const Vegetable = () => {
  const [categoriy, setCategoriy] = useState(categories);
  const [filter, setFilter] = useState("Fruit");
  const onValue = (e) => {
    const target = e.target.value;
    console.log(target);
    setFilter(target);
  };
  const { state } = useContext(Context);
  return (
    <section className="vegetable">
      <div
        className={`vegetable_category ${
          state.rotate ? "" : "vegetable_height"
        }`}
      >
        {categoriy.map((item) => (
          <button
            className={`button ${item.name === filter ? "btn_color" : ""}`}
            key={item.id}
            onClick={onValue}
            value={item.name}
            id={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="vegetable_card">
        <div className="vegetable_right">
          <p>{filter}</p>
          <h2>{filter} 100% Organic</h2>
          <span>Free Pickup and Delivery Available</span>
          <br />
          <Button>SHOP NOW</Button>
        </div>
        <div className="vegetable_left">
          {categories.map((item) =>
            item.name === filter ? <img key={item.id} src={item.img} /> : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Vegetable;
