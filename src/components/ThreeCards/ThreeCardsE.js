import styled from 'styled-components'

export const ThreeCardsSection = styled.section`
    background-color: #f3e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const ThreeCardsContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    height: 1500px;

    @media screen and (max-width: 480px){
        height: 1600px;
    }
`

export const ThreeCardsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
`

export const Box = styled.div`
    width: 350px;
    margin: 100px 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 768px){
        width: auto;
        max-width: 90vw;
        margin: 100px 30px;
    }

    &:first-child{ 
        top: 0;
        left: 170px;

        @media screen and (max-width: 1200px){
            left: 70px;
        }

        @media screen and (max-width: 768px){
            left: 0;
            right: 0;
        }
    }

    &:nth-child(2){
        top: 250px;
        right: 170px;

        @media screen and (max-width: 1200px){
            right: 70px;
        }

        @media screen and (max-width: 768px){
            top: 460px;
            right: 0;
            left: 0;
        }
    }

    &:last-child{
        top: 700px;
        left: 170px;

        @media screen and (max-width: 1200px){
            left: 70px;
        }

        @media screen and (max-width: 768px){
            top: 960px;
            left: 0;
            right: 0;
        }
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    width: 250px;
    height: 300px;
    cursor: pointer;

    &:hover .background {
        transform: translate(-25px, -25px);
        transition: transform .25s ease-in-out;

        @media screen and (max-width: 1200px){
            transform: translate(-15px, -15px);
        }
    }

    &:hover .image {
        transform: translate(25px, 25px);
        transition: all .25s ease-in-out;

        @media screen and (max-width: 1200px){
            transform: translate(15px, 15px);
        }
    }

    @media screen and (max-width: 1200px){
        width: 220px;
        height: 270px;
    }

    @media screen and (max-width: 768px){
        width: 80vw;
        max-width: 360px;
        height: 60vh;
        max-height: 270px;
    }

    @media screen and (max-width: 480px){
        max-width: 70vw;
    }
`

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 25px;
    left: 25px;
    background-color: #9c7194;

    @media screen and (max-width: 1200px){
        top: 15px;
        left: 15px;
    }
`

export const Image = styled.img`
    position: absolute;
    top: -25px;
    left: -25px;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 1;

    @media screen and (max-width: 1200px){
        top: -15px;
        left: -15px;
    }
`

export const Border = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #000;
    z-index: 2;
`

export const ContentWrapper = styled.div`
    margin: 70px 10px;
    text-align: center;

    @media screen and (max-width: 1024px){
        margin: 40px 10px;
    }

    @media screen and (max-width: 768px){
        max-width: 300px;
    }
`

export const Header = styled.h3`
    font-size: 1.4rem;
    font-weight: normal;
    letter-spacing: .2rem;
    margin-bottom: 20px;

    @media screen and (max-width: 1024px){
        font-size: 1.1rem;
        letter-spacing: .14rem;
        margin-bottom: 10px;
    }
`

export const Text = styled.span`
    @media screen and (max-width: 1024px){
        font-size: .9rem;
    }
`

export const OpacityText = styled.span`
    position: absolute;
    font-size: 20vw;
    font-weight: normal;
    opacity: .1;
    letter-spacing: 15vw;
    bottom: 30%;
    right: 0;
`

export const IconS = styled.img`
    width: 150px;
    position: absolute;
    bottom: 10%;
    right: 10%;

    @media screen and (max-width: 768px){
        width: 80px;
        bottom: 2%;
        right: 2%;
    }
`