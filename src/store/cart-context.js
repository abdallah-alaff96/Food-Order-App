import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addedItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
