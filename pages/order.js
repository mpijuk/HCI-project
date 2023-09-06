import { useState, useEffect } from "react";
import styles from "../styles/Order.module.css";
import DishCard from "../component/DishCard";

const Order = () => {

    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8090/api/collections/dishes/records');
                const data = await response.json();

                setDishes(data.items);
            } catch (error) {
                console.error("There was an error fetching the data:", error);
            }
        }
    
        fetchData();
    }, []);

    return (
        <div className={styles.dishCardContainer}>
            {dishes.map((dish) => <DishCard dish={dish} key={dish.id}/>)}
        </div>
    );
};

export default Order;