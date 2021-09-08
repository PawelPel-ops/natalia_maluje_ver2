import React from 'react'
// import { Images } from './GalleryData'
import {
    GallerySection,
    GalleryContainer,
    GalleryContent,
    Header,
    ImagesWrapper,
    Box,
    ImgWrapper,
    Img
} from './GalleryE'

const Gallery = ( { setSelectedImg, setSelectedIndex, Images } ) => {
    
    return (
        <>
            <GallerySection>
                <GalleryContainer>
                    <GalleryContent>
                        <Header>Stylizacja paznokci - wzory</Header>
                        <ImagesWrapper>
                            {Images.map((element, index) => {
                                return (
                                    <Box key={index} onClick={() => setSelectedIndex(index)}>
                                        <ImgWrapper onClick={() => setSelectedImg(element.src)}>
                                            <Img src={element.src} alt="Stylizacja Paznokcie Natalia Piotrowicz" width="300px" height="300px"/>
                                        </ImgWrapper>
                                    </Box>
                                )
                            })}
                        </ImagesWrapper>
                    </GalleryContent>
                </GalleryContainer>
            </GallerySection>
        </>
    )
}

export default Gallery
