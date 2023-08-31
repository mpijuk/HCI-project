import {FaStar} from "react-icons/Fa";
import styles from "../styles/CommentSection.module.css";
import quote from "../public/img/quote.jpg";
import Image from "next/image";

const CommentSection = () => {
    return (
        <div className={styles.commentSection}>
            <div className={styles.commentContainer}>
                <Image src={quote} alt="quote" width="70" height="70"></Image>
                <p>Food was really great! Great service as well. I'll gladly come back!</p>
                <span><FaStar color="yellow"/> 5.0</span>
            </div>
            <div className={styles.commentContainer}>
                <Image src={quote} alt="quote" width="70" height="70"></Image>
                <p>Best local food in beautiful city! Good quality and great price! I would definitely recommend if you love fish meals!</p>
                <span><FaStar color="yellow"/> 4.5</span>
            </div>
            <div className={styles.commentContainer}>
                <Image src={quote} alt="quote" width="70" height="70"></Image>
                <p>AMAZING FOOD! Great atmosphere as well big recommendations</p>
                <span><FaStar color="yellow"/> 4.7</span>
            </div>
        </div>
    );
};

export default CommentSection;