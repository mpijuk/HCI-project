import CartContext from "../component/CartContext";
import { useContext } from "react";

const Cart = () => {

    const { setCartCount, addedItems, addDish, removeDish } = useContext(CartContext);

    console.log(addedItems);
    return(
        <div style={{color:"white"}}>
            This is cart!
        </div>
    );
};

export default Cart;