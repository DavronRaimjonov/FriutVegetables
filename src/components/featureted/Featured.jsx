import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import { fetureProduct, feuterdData } from "../../data";
import FeaturedItem from "../featured-item/FeaturedItem";
import InputSearch from "../input-search/InputSearch";
import "./Featured.scss";
const Featured = () => {
  const [btn, setBtn] = useState("all");
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    dispatch({ type: "GET_DATA", payload: fetureProduct });
  }, []);
  const onFilter = (e) => {
    const target = e.target.value;
    setBtn(target);
    if (target === "all") {
      dispatch({ type: "GET_DATA", payload: fetureProduct });
    } else {
      const newArr = fetureProduct.filter((item) => item.category === target);
      dispatch({ type: "GET_DATA", payload: newArr });
    }
  };
  const onFilter2 = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };
  const data = onFilter2(state.data, state.term);
  return (
    <section className="featured">
      <div className="container">
        <div className="featured_title">
          <h1>Featured Product</h1>
        </div>
        <div className="featured_category">
          {feuterdData.map((item) => (
            <button
              onClick={onFilter}
              key={item.id}
              value={item.category}
              className={`featured_btn ${
                btn === item.category ? "active_btn" : null
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="inputSearch">
          <InputSearch />
        </div>
        <div className="featured_cards">
          {data.map((item) => (
            <FeaturedItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
