import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(0);
    const [addedItems, setAddedItems] = useState({});

    const addDish = (dishId) => {
        setAddedItems(prevItems => {
            return { ...prevItems, [dishId]: true };
        });
        setCartCount(count => count + 1);
    }
    
    const removeDish = (dishId) => {
        setAddedItems(prevItems => {
            const updatedItems = { ...prevItems };
            delete updatedItems[dishId];
            return updatedItems;
        });
        setCartCount(count => count - 1);
    }


    return (
        <CartContext.Provider value={{ cartCount, setCartCount,  addedItems, addDish, removeDish  }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;