import styles from "../styles/Header.module.css";
import {PiShoppingCartLight, PiCookingPot} from "react-icons/Pi";
import {GoPerson} from "react-icons/Go";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
    return(
        <div className={styles.header}>
            <Link href="/" passHref>
                <PiCookingPot className={styles.logo}/>
            </Link>
            <div className={styles.navTabIcons}>
                <Navbar />
                <div className={styles.icons}>
                    <GoPerson />
                    <PiShoppingCartLight /> 
                </div>
            </div> 
        </div>
    );
};

export default Header;