import React from "react";

export const TotalContext = React.createContext({
  total: [],
  setTotal: () => [],
});

export const CartContext = React.createContext({
  cart: [],
  setCart: () => [],
});