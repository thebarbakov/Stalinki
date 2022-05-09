import { Carousel } from 'react-carousel-minimal';
import React from "react"

function Photos(props) {

    return (
        <div className='building__photos'>
            <Carousel
            data={props.data.pictures}
            width="100%"
            height="320px"
            captionStyle={{
                fontSize: '2em',
                fontWeight: 'bold',
                }}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={{
                fontSize: '20px',
                fontWeight: 'bold',
            }}
            captionPosition="bottom"
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
                textAlign: "center",
                maxWidth: "600px",
                maxHeight: "500px",
                margin: "20px auto 5px auto",
            }}
            />
        </div>
    );
}

export default Photos

