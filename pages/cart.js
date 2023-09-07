import CartContext from "../component/CartContext";
import { useContext } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import styles from "../styles/Cart.module.css";
import Link from "next/link";

const Cart = () => {

    const { cartItems, removeFromCart, updateDishQuantity } = useContext(CartContext);

    return (
        <div className={styles.cartContainer}>
            <h1 style={{color: "rgba(112, 144, 139, 1)"}}>Your Cart</h1>
            {Object.values(cartItems).map(dish => (
                <div key={dish.id} className={styles.cartItem}>
                    <div className={styles.cartImage}>
                        <Image
                          src={`http://127.0.0.1:8090/api/files/${dish.collectionId}/${dish.id}/${dish.path}`}  
                          alt={dish.title}
                          width={300}
                          height={200}
                          style={{objectFit: "cover"}}
                          priority={true}
                        />
                    </div>
                    <div className={styles.cartDetails}>
                        <div className={styles.cartHeader}>
                            <h1>{dish.title}</h1>
                            <FaTrash className={styles.icon} onClick={() => removeFromCart(dish.id)}/>
                        </div> 
                        <div className={styles.cartFooter}>
                            <span>${dish.price}</span>
                            <div className={styles.cartButton}>
                                <button onClick={() => updateDishQuantity(dish.id, -1)}>-</button>
                                <span>{dish.quantity}</span>
                                <button onClick={() => updateDishQuantity(dish.id, 1)}>+</button>
                            </div>                    
                        </div>
                    </div>    
                </div>
            ))}
            <span className={styles.subTotal}>Sub Total: ${Object.values(cartItems).reduce((acc, item) => acc + (item.price * item.quantity), 0)}</span>
            <div className={styles.buttonContainer}>
                <Link href="/order" passHref>
                    <button className={styles.continueButton}>Continue Shopping</button>
                </Link>
                <button className={styles.checkOutButton}>Check Out</button>
            </div>
        </div>
    );
};

export default Cart;