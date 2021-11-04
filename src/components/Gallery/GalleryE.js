import styled, { keyframes } from 'styled-components'

export const GallerySection = styled.section`
    background-color: #f3e8f0;
    display: flex;
    justify-content: center;
`

export const GalleryContainer = styled.div`
    max-width: 1300px;
    width: 100%;
`

export const GalleryContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 100px 50px;

    @media screen and (max-width: 768px){
        margin: 100px 20px;
    }
`

export const Header = styled.h2`
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 20px;

    @media screen and (max-width: 1200px){
        font-size: 1.6rem;
    }

    @media screen and (max-width: 768px){
        font-size: 1.2rem;
    }
`

export const ImagesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 200px;
    gap: 2px;

    @media screen and (max-width: 1024px){
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 480px){
        grid-template-columns: repeat(2, 1fr);
    }
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 2px solid #9c7194;

    &:first-child{
        grid-column: span 2;
        grid-row: span 2;

        @media screen and (max-width: 480px){
            grid-column: span 1;
            grid-row: span 1;
        }
    }


    &:nth-child(8) {
        grid-column: span 1;
        grid-row: span 1;

        @media screen and (max-width: 768px){
            grid-column: span 2;
            grid-row: span 2;
        }

        @media screen and (max-width: 480px){
            grid-column: span 1;
            grid-row: span 1;
        }
    }

    &:nth-child(11) {
        grid-column: span 2;
        grid-row: span 2;

        @media screen and (max-width: 1024px){
            grid-column: span 1;
            grid-row: span 1;
        }
    }

    &:nth-child(12) {
        grid-column: span 1;
        grid-row: span 1;

        @media screen and (max-width: 1024px){
            grid-column: span 2;
            grid-row: span 2;
        }

        @media screen and (max-width: 768px){
            grid-column: span 1;
            grid-row: span 1;
        }
    }

    &:nth-child(13) {
        grid-column: span 1;
        grid-row: span 1;

        @media screen and (max-width: 768px){
            grid-column: span 2;
            grid-row: span 1;
        }

        @media screen and (max-width: 480px){
            grid-column: span 1;
            grid-row: span 1;
        }
    }
`

export const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    transition: all .25s ease;
    cursor: pointer;
    opacity: .8;

    &:hover {
        transform: scale(1.1);
        opacity: 1;
    }
`

// MODAL

const showModal = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

export const ModalSection = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: rgba(0,0,0,0.8);
    transition: all .25s ease;
    animation: ${showModal} .8 linear;
`

export const LargeImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 3rem;
`

export const CLoseIconBox = styled.div`
    position: absolute;
    top: 2%;
    right: 2%;
    cursor: pointer;
    transition: all .25s ease;

    &:hover {
        transform: scale(1.4);
    }
`

export const PrevIconBox = styled.div`
    position: absolute;
    top: 50%;
    left: 2%;
    cursor: pointer;
    transition: all .25s ease;

    &:hover {
        transform: scale(1.4);
    }

    @media screen and (max-width: 480px){
        left: 0;
    }
`

export const NextIconBox = styled.div`
    position: absolute;
    top: 50%;
    right: 2%;
    cursor: pointer;
    transition: all .25s ease;

    &:hover {
        transform: scale(1.4);
    }

    @media screen and (max-width: 480px){
        right: 0;
    }
`

export const LargeImg = styled.img`
    max-width: 80vw;
    max-height: 90vh;
    -o-object-fit: cover;
    object-fit: cover;
    border: 2px solid #fff;
`