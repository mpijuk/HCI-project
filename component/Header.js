import styles from "../styles/Header.module.css";
import {PiShoppingCartLight, PiCookingPot} from "react-icons/Pi";
import {GoPerson} from "react-icons/Go";
import Navbar from "./Navbar";
import Link from "next/link";
import { useContext } from "react";
import CartContext from './CartContext';

const Header = () => {
    const { cartCount } = useContext(CartContext);

    return(
        <div className={styles.header}>
            <Link href="/" passHref>
                <PiCookingPot className={styles.logo}/>
            </Link>
            <div className={styles.navTabIcons}>
                <Navbar />
                <div className={styles.icons}>
                    <GoPerson className={styles.icon} />
                    <div className={styles.cartIconWrapper}>
                        <Link href="/cart" passHref>
                            <PiShoppingCartLight className={styles.icon}/> 
                        </Link>
                        <div className={styles.cartCount}>
                            {cartCount}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Header;