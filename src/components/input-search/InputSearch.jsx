import { useContext, useState } from "react";
import { Context } from "../../context";
import "./InputSearch.scss";
const InputSearch = () => {
  const [term, setTerm] = useState("");
  const { dispatch } = useContext(Context);
  const onTerm = (e) => {
    const target = e.target.value.toLowerCase();
    setTerm(target);
    dispatch({ type: "ON_TERM", payload: target });
  };
  return (
    <input
      onChange={onTerm}
      className="input"
      type="text"
      placeholder="Search..."
      value={term}
    />
  );
};

export default InputSearch;
