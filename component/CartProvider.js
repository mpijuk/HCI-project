import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(0);
    //const [addedItems, setAddedItems] = useState({});
    const [cartItems, setCartItems] = useState({});

    /* const addDish = (dishId) => {
        setAddedItems(prevItems => {
            return { ...prevItems, [dishId]: true };
        });
        setCartCount(count => count + 1);
    } */

    /* const removeDish = (dishId) => {
        setAddedItems(prevItems => {
            const updatedItems = { ...prevItems };
            delete updatedItems[dishId];
            return updatedItems;
        });
        setCartCount(count => count - 1);
    } */

    const addToCart = (dish) => {
        setCartItems(prevItems => ({
            ...prevItems,
            [dish.id]: {
                ...dish,
                quantity: prevItems[dish.id] ? prevItems[dish.id].quantity + 1 : 1
            }
        }));
        setCartCount(count => count + 1);
    }

    const removeFromCart = (dishId) => {
        setCartItems(prevItems => {
            const updatedItems = { ...prevItems };
            delete updatedItems[dishId];
            return updatedItems;
        });
        setCartCount(count => count - 1);
    }

    const updateDishQuantity = (dishId, change) => {
        setCartItems(prevItems => {
            const dish = prevItems[dishId];
            if (!dish) return prevItems; 
    
            if (change === -1 && dish.quantity === 1) {
                const updatedItems = { ...prevItems };
                delete updatedItems[dishId];
                setCartCount(count => count - 1);
                return updatedItems;
            }
    
            return {
                ...prevItems,
                [dishId]: {
                    ...dish,
                    quantity: dish.quantity + change
                }
            };
        });
    }
    
    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart, removeFromCart, updateDishQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;