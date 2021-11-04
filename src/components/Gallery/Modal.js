import React, { useState, useRef, useEffect } from 'react'
import { MdClose, MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import {
    ModalSection,
    LargeImgWrapper,
    CLoseIconBox,
    PrevIconBox,
    NextIconBox,
    LargeImg
} from './GalleryE'

const Modal = ( { selectedImg, setSelectedImg, selectedIndex, Images } ) => {
    const [newIndex, setNewIndex] = useState(selectedIndex)
    const prev = useRef(null)
    const next = useRef(null)

    useEffect(() => {
        if(newIndex === 0) {
            prev.current.style.display = "none"
        } else {
            prev.current.style.display = "block"
        }

        if(newIndex === Images.length - 1) {
            next.current.style.display = "none"
        } else {
            next.current.style.display = "block"
        }
      });

    const handleNext = () => {
        setNewIndex(prevState => prevState + 1)
        setSelectedImg(Images[newIndex+1].src)
    }
    
    const handlePrev = () => {
        setNewIndex(prevState => prevState - 1)
        setSelectedImg(Images[newIndex-1].src)
    }

    return (
        <>
            <ModalSection>
                <LargeImgWrapper>
                    <CLoseIconBox onClick={() => setSelectedImg(null)}>
                        <MdClose />
                    </CLoseIconBox>
                    <PrevIconBox ref={prev} onClick={handlePrev}>
                        <MdKeyboardArrowLeft />
                    </PrevIconBox>
                    <NextIconBox ref={next} onClick={handleNext}>
                        <MdKeyboardArrowRight />
                    </NextIconBox>
                    <LargeImg src={selectedImg} alt='Stylizacja Paznokci Ostrzeszów Natalia Piotrowicz' width="auto" height="auto"/>
                </LargeImgWrapper>
            </ModalSection>
        </>
    )
}

export default Modal
