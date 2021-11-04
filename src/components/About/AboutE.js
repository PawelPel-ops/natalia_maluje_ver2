import styled from 'styled-components'

export const AboutSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #f3e8f0;
`

export const AboutContainer = styled.div`
    max-width: 1300px;
`

export const AboutContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 150px 50px 150px 20px;
    width: 100%;

    @media screen and (max-width: 1024px){
        margin: 150px 10px 150px 10px;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
    }

    @media screen and (max-width: 480px){
        margin: 100px 10px;
    }
`

export const ImagesWrapper = styled.div`
    position: relative;
    width: 250px;
    height: 400px;

    @media screen and (max-width: 1024px){
        width: 225px;
        height: 360px;   
    }

    @media screen and (max-width: 768px){
        width: 80vw;
        max-width: 450px;
        height: 80vh;
        max-height: 350px;
    }
`

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: -50px;
    left: -50px;
    background-color: #9c7194;

    @media screen and (max-width: 1024px){
        width: 90%;
        height: 90%;
        top: -30px;
        left: -30px;   
    }
`

export const Images = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 1;

    @media screen and (max-width: 1024px){
        width: 90%;
        height: 90%;
    }
`

export const Border = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: -25px;
    left: -25px;
    border: 2px solid #000;
    z-index: 2;

    @media screen and (max-width: 1024px){
        width: 90%;
        height: 90%;
        top: -15px;
        left: -15px;   
    }
`

export const ContentWrapper = styled.div`
    max-width: 600px;
    border-bottom: 2px solid #000;
    border-right: 2px solid #000;

    @media screen and (max-width: 1200px){
        max-width: 550px;
    }

    @media screen and (max-width: 1024px){
        max-width: 450px;   
    }

    @media screen and (max-width: 768px){
        max-width: 80vw;
    }
`

export const Header = styled.h1`
    font-size: 1rem;
    font-weight: normal;
    margin: 20px auto;

    @media screen and (max-width: 1024px){
        font-size: .9rem;
    }
`

export const BHeader = styled.h2`
    margin: 10px auto;
    letter-spacing: .05rem;

    @media screen and (max-width: 1024px){
        font-size: 1.2rem;
    }
`

export const Text = styled.p`
    margin: 20px 20px 20px 0;

    @media screen and (max-width: 1024px){
        font-size: .9rem;
    }
`