import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Owl() {

    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        animation: 'slideoutup',
        nav: false,
        dots: true,
        margin: 0,
        response: {
            1100: {
                items: 2,
            },
            724: {
                items: 1,
            },
            500: {
                items: 1,
            },
            370: {
                items: 1,
                innerWidth: "100%",
                outerWidth: "100%"
            },
        },

    };

    return (
        <>
            <OwlCarousel className='owl-theme' {...options}>
                <div class='item'>
                    <img style={{ height:"600px"  }}  src="./images/IMG_0846.JPG" alt="" />
                    
                </div>
                <div class='item'>
                    <img style={{ height:"600px"  }}  src="./images/IMG_0932.JPG" alt="" />
                    
                </div>
                <div class='item'>
                    <img style={{ height:"600px"  }}  src="./images/IMG_0843.JPG" alt="" />
                  
                </div>
                <div class='item'>
                    <img style={{ height:"600px"  }}   src="./images/IMG_1094.JPG" alt="" />
                    
                </div>
                <div class='item'>
                    <img style={{ height:"600px"  }}  src="./images/IMG_1139.JPG" alt="" />
                   
                </div>
                <div class='item'>
                    <img style={{ height:"600px"  }}  src="./images/IMG_2942.JPG" alt="" />
                </div>
            </OwlCarousel>;
        </>
    )
}

export default Owl