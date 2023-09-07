import { createContext } from "react";

const CartContext = createContext({
    cartCount: 0,
    cartItems: {},
    addToCart: () => {},
    removeFromCart: () => {},
    updateDishQuantity: () => {},
});

export default CartContext;