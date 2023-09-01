import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/About.module.css';


const About = () => {

    const [aboutContent, setAboutContent] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8090/api/collections/about/records');
                const data = await response.json();
                setAboutContent(data.items);
    
            } catch (error) {
                console.error("There was an error fetching the data:", error);
            }
        }
    
        fetchData();
    }, []);

    return (
        <div className={styles.aboutContainer}>
            {aboutContent.map((item, index) => 
                <div key={item.id} className={`${styles.aboutSection} ${index % 2 === 1 ? styles.inverse : ''}`}>
                    <div className={styles.imageContainer}>
                        <Image 
                          src={`http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item.path}`} 
                          alt={item.title}  
                          width={500} 
                          height={500}
                          style={{objectFit: "cover", borderRadius: "30px"}} 
                          priority={true}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                </div>       
            )}
        </div>
    );
};

export default About;