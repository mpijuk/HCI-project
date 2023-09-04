import api from '../../api';
import Image from 'next/image';
import styles from "../../styles/Blog.module.css";

const Blogs = ({ posts }) => {

    return (
        <div className={styles.blogContainer}>
            {posts.items.map((item) => 
                <div key={item.id} className={styles.blogSection}>
                    <div className={styles.imageContainer}>
                        <Image 
                          src={`http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item.path}`} 
                          alt={item.title}  
                          width={300} 
                          height={300}
                          style={{objectFit: "cover"}} 
                          priority={true}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <a href={`/blog/${item.slug}`}>{item.title}</a>
                        <p>{item.summary}</p>
                    </div>
                </div>       
            )}
        </div>
    );
};

export default Blogs;

export async function getStaticProps() {
    const posts = await api.getBlogs();

    return {
        props: { posts },
    };
}