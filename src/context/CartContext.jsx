/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const initialState = {
    count: 0,
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, count: state.count + 1 };
      case "REMOVE_FROM_CART":
        return { ...state, count: state.count - 1 };
      case "EMPTY_CART":
        return { ...state, count: 0 };
    }
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
