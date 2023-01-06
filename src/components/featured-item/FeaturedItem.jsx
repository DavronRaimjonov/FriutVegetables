import React, { useContext } from "react";
import { Context } from "../../context";

const FeaturedItem = ({ data }) => {
  const { dispatch } = useContext(Context);
  const onLike = () => {
    dispatch({ type: "ON_LIKE", payload: data.id });
  };
  return (
    <div className="featured_card">
      <img src={data.img} alt={data.name} />
      <div className="title">
        <p>{data.name}</p>
        <h2>{data.price}</h2>
        <button onClick={onLike} className="like">
          <i className={`fa-${data.like ? "solid" : "regular"} fa-heart`}></i>
        </button>
      </div>
    </div>
  );
};

export default FeaturedItem;
