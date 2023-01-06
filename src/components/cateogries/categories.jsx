import { useContext } from "react";
import { Context } from "../../context";
import Button from "../../UI/Button";
import "./categories.scss";

const Categories = () => {
  const { state, dispatch } = useContext(Context);
  const onRotate = () => {
    dispatch({ type: "ROTATE" });
  };
  return (
    <div className="category">
      <div className={`category_department  ${state.rotate && "rotate"}`}>
        <Button onClick={onRotate}>
          <i className="fa-solid fa-bars"></i>
          <p>All Department</p>
          <i className="fa-solid fa-angle-up icon_rotate"></i>
        </Button>
      </div>
      <form action="" className="category_search">
        <div className="category_border">
          <h2>
            All Categories <i className="fa-solid fa-angle-down"></i>
          </h2>
          <input type="text" placeholder="What do you need?" />
        </div>
        <Button type="submit">SEARCH</Button>
      </form>
      <div className={`category_telephone`}>
        <a href="tel:+65 11.188.888">
          <i className="fa-solid fa-phone"></i> +65 11.188.888
        </a>
      </div>
    </div>
  );
};

export default Categories;
