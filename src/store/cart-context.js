import React from "react";

const CartContext = React.createContext({
  item: [],
  totalAmount: 0,
  addedItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
