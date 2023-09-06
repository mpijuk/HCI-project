import { createContext } from "react";


const CartContext = createContext({
    cartCount: 0,
    setCartCount: () => {},
    addedItems: {},
    addDish: () => {},
    removeDish: () => {},
});

export default CartContext;