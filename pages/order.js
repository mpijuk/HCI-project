import { useState, useEffect } from "react";
import styles from "../styles/Order.module.css";
import DishCard from "../component/DishCard";

const Order = () => {

    const [dishes, setDishes] = useState([]);
    const [filter, setFilter] = useState(null);

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
        <div className={styles.orderContainer}>
            <div className={styles.filterButtonsContainer}>
                <button onClick={() => setFilter('coldstarter')} className={`${styles.filterButton} ${filter == "coldstarter" ? styles.active : ""}`} style={{backgroundColor: "#5296C7" }}>Cold Starter</button>
                <button onClick={() => setFilter('hotstarter')} className={`${styles.filterButton} ${filter == "hotstarter" ? styles.active : ""}`} style={{backgroundColor: "#DB4747"}}>Hot Starter</button>
                <button onClick={() => setFilter('main')} className={`${styles.filterButton} ${filter == "main" ? styles.active : ""}`} style={{backgroundColor: "#68A552"}}>Main</button>
                <button onClick={() => setFilter('dessert')} className={`${styles.filterButton} ${filter == "dessert" ? styles.active : ""}`} style={{backgroundColor: "#674530"}}>Dessert</button>
            </div>
            <div className={styles.removeFilterButtonContainer}>
                {filter && <button onClick={() => setFilter(null)} className={styles.removeFilterButton}>x</button>}
            </div>
            <div className={styles.dishCardContainer}>
                {dishes.filter(dish => !filter || dish.type === filter).map(dish => (
                    <DishCard dish={dish} key={dish.id}/>
                ))}
            </div>
        </div>
    );
};

export default Order;