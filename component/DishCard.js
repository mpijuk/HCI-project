import Image from "next/image";
import styles from "../styles/DishCard.module.css";
import { useContext, useState } from "react";
import CartContext from "./CartContext";

const DishCard = ({ dish }) => {

    const { setCartCount, addedItems, addDish, removeDish } = useContext(CartContext);
    const isAdded = addedItems[dish.id];

    const handleClickAdd = () => {
        setCartCount(prevCount => prevCount + 1);
        setIsClicked(prevClick => !prevClick);
    }

    const handleClickRemove = () => {
        setCartCount(prevCount => prevCount - 1);
        setIsClicked(prevClick => !prevClick);
    }

    return(
        <div className={styles.dishCard}>
            <div className={styles.dishImage}>
                <Image
                  src={`http://127.0.0.1:8090/api/files/${dish.collectionId}/${dish.id}/${dish.path}`}  
                  alt={dish.title}
                  width={350}
                  height={350}
                  style={{objectFit: "cover"}}
                  priority={true}
                />
            </div>
            <div className={styles.dishDetails}>
                <div  className={styles.dishHeader}>
                    <h2 className={styles.dishTitle}>{dish.title}</h2>
                    <div className={styles.dishType}
                      style={dish.type == "main" ? {backgroundColor: "#68A552"} :
                            dish.type == "dessert" ? {backgroundColor: "#674530"} :
                            dish.type == "hotstarter" ? {backgroundColor: "#DB4747"} :
                            {backgroundColor: "#5296C7"}  
                      }
                    >
                    </div>
                </div>
                <div className={styles.dishDescription}>
                    <p>Description:</p>
                    <p style={{fontWeight: "bold", margin: "0px"}}>{dish.description}</p>
                </div>
                <div className={styles.dishFooter}>
                    <span className={styles.dishPrice}>{dish.price}$</span>
                    { isAdded ? 
                      <button className={styles.addToCart} onClick={() => removeDish(dish.id)}>Remove</button> :
                      <button className={styles.addToCart} onClick={() => addDish(dish.id)}>Add to Cart</button>
                    }    
                </div>
            </div>
        </div>
    );
};

export default DishCard;