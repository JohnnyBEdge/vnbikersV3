import React from 'react'
import {GalleryContainer, GridContainer, ImgContainer, Image, SectionTitle} from './GalleryElements';
import img1 from '../../assets/images/bike1.jpg';
import img2 from '../../assets/images/bike2.jpg';
import img3 from '../../assets/images/bike3.jpg';
import img4 from '../../assets/images/bike4.jpg';
import img5 from '../../assets/images/bike5.jpg';
import img6 from '../../assets/images/bike6.jpg';
import img7 from '../../assets/images/bike7.jpg';
import img8 from '../../assets/images/bike8.jpg';
import img9 from '../../assets/images/bike9.jpg';


const Gallery = () => {
    return (
        <>
            <GalleryContainer id="gallery">
                <SectionTitle>Gallery</SectionTitle>
                <GridContainer >
                    <ImgContainer>
                        <Image src={img1}/>
                    </ImgContainer>
                    <ImgContainer>
                        <Image src={img2} />
                    </ImgContainer>
                    <ImgContainer>
                        <Image src={img3}/>
                    </ImgContainer>
                    <ImgContainer>
                        <Image src={img4} />
                    </ImgContainer>
                    <ImgContainer>
                        <Image src={img5} />
                    </ImgContainer>
                    <ImgContainer>
                        <Image src={img6} />
                    </ImgContainer>
                    <ImgContainer>
                        <Image src={img7} />
                    </ImgContainer>
                    <ImgContainer>
                        <Image src={img8} />
                    </ImgContainer>
                    <ImgContainer>
                        <Image src={img9} />
                    </ImgContainer>
                </GridContainer>
            </GalleryContainer>
        </>
    )
}

export default Gallery;
