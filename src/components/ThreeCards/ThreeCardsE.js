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

    &:first-child{ 
        top: 0;
        left: 170px;
    }

    &:nth-child(2){
        top: 250px;
        right: 170px;
    }

    &:last-child{
        top: 700px;
        left: 170px;
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    width: 250px;
    height: 300px;
`

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 25px;
    left: 25px;
    background-color: #9c7194;
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
`

export const Border = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #000;
    z-index: 2;
`

export const ContentWrapper = styled.div`
    margin: 70px 0;
    text-align: center;
`

export const Header = styled.h3`
    font-size: 1.4rem;
    font-weight: normal;
    letter-spacing: .2rem;
    margin-bottom: 20px;
`

export const Text = styled.span`

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
`