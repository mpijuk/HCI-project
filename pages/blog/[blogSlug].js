import Image from 'next/image';
import api from '../../api';
import styles from "../../styles/BlogSlug.module.css";

const BlogPost = ({ post }) => {

    return (
        <div className={styles.blogSlugContainer}>
            <div className={styles.imageTitleContainer}>
                <Image 
                  src={`http://127.0.0.1:8090/api/files/${post.collectionId}/${post.id}/${post.path}`} 
                  alt={post.title}  
                  width={400} 
                  height={400}
                  style={{objectFit: "cover", borderStyle: "groove", borderColor: "white"}} 
                  priority={true}
                  className={styles.image}
                />
                <h1>{post.title}</h1>
            </div>
            <div className={styles.descriptionContainer}>
                <p>{post.description}</p>
            </div>
        </div>
    );
};

export default BlogPost;

export async function getStaticPaths() {
    const blogs = await api.getBlogs();

    const paths = blogs.items.map((blog) => ({
        params: {
            blogSlug: blog.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { blogSlug } }) {
    const post = await api.getBlogBySlug(blogSlug);

    return {
        props: {
            post,
        },
    };
}