import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';


const ImageCarousel = ({images}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true, // Makes it responsive
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <div  style={{width: "100%"}}>
            <Slider {...settings} style={{padding: "20px"}}>
                {images.map((item) => 
                    <div key={item.id}>
                        <Image src={`http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item.path}`} alt={item.id}  width="440" height="300" style={{objectFit: "cover"}} priority={true}></Image>
                    </div>       
            )}
            </Slider>
        </div>
        
    );
}

export default ImageCarousel;