import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ImageCarousel from '../component/ImageCarousel';

/* const pb = new PocketBase('http://127.0.0.1:8090');

async function getRecords() {
    const records = await pb.collection("images").getFullList({
        fields: "id,name, url"
    }); 
    const rest = await fetch("http://127.0.0.1:8090/api/collections/images/records")
    console.log(records);
    return records;
}; */

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
        {/* {galleryImages.map((item) => {
                console.log(item);
                return <Image src={`http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item.path}`} alt={item.id} key={item.id} width="150" height="150" ></Image>;
        })} */}
            <ImageCarousel images={galleryImages}/>
        </div>
    );
};

export default Home;