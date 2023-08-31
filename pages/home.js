import { useEffect, useState } from 'react';
import Image from 'next/image';
import ImageCarousel from '../component/ImageCarousel';
import homePageImg from '../public/img/homepage.jpg';
import styles from '../styles/Home.module.css';
import CommentSection from '../component/CommentSection';


const Home = () => {

    const [galleryImages, setGalleryImages] = useState([]);
    const [topofferImages, setTopofferImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8090/api/collections/images/records');
                const data = await response.json();

                const galleryItems = data.items.filter(item => item.type === 'gallery');
                const topofferItems = data.items.filter(item => item.type === 'topoffer');

                setGalleryImages(galleryItems);
                setTopofferImages(topofferItems);
    
            } catch (error) {
                console.error("There was an error fetching the data:", error);
            }
        }
    
        fetchData();
    }, []); 

    return (
        <div>
            <div className={styles.homepageImageContainer} >
                <Image src={homePageImg} alt="" style={{objectFit:"cover"}} fill={true} priority={true}/>
                <div className={styles.overlayText}>
                    <p className={styles.text}>Made by Croatians.</p>
                    <p className={styles.text}>Enjoyed by Everyone.</p>
                </div>
            </div>
            <p className={styles.title}>Top offers:</p>
            <ImageCarousel images={topofferImages} />
            <p className={styles.title}>Blog: </p>
            <CommentSection />
            <p className={styles.title}>Restaurant gallery: </p>
            <ImageCarousel images={galleryImages}/>
        </div>
    );
};

export default Home;