import { Children, createContext, useReducer } from "react";

const intialValue = {
  rotate: true,
  data: [],
  term: "",
};

export const Context = createContext();

const reducer = (state = intialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ROTATE":
      return { ...state, rotate: !state.rotate };
    case "ON_LIKE":
      const newArr1 = state.data.map((item) => {
        if (item.id == payload) {
          return { ...item, like: !item.like };
        }
        return item;
      });
      return { ...state, data: newArr1 };
    case "GET_DATA":
      return { ...state, data: payload };
    case "ON_TERM":
      return { ...state, term: payload };
    default:
      return { state };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialValue);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
