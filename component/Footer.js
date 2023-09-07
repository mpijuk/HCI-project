import {FaInstagram, FaFacebook, FaLinkedin} from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div>
                <p className={styles.titles}>CONTACT US</p>
                <p className={styles.description}>m&p-restaurant@gmail.com</p>
            </div>
            <div>
                <p className={styles.titles}>©2023</p>
                <p className={styles.description}>Made with love for food</p>
            </div>
            <div>
                <p className={styles.titles}>LET'S CONNECT</p>
                <div className={styles.icons}>
                    <FaFacebook />
                    <FaInstagram />
                    <FaLinkedin />
                </div> 
            </div>    
        </div>
    );
}

export default Footer;