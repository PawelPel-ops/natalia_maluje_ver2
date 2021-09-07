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
    margin: 150px 50px;
    width: 100%;
`

export const ImagesWrapper = styled.div`
    position: relative;
    width: 250px;
    height: 400px;
`

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: -50px;
    left: -50px;
    background-color: #9c7194;
`

export const Images = styled.img`
    position: absolute;
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
    top: -25px;
    left: -25px;
    border: 2px solid #000;
    z-index: 2;
`

export const ContentWrapper = styled.div`
    max-width: 600px;
    border-bottom: 2px solid #000;
    border-right: 2px solid #000;
`

export const Header = styled.h1`
    font-size: 1rem;
    font-weight: normal;
    margin: 20px auto;
`

export const BHeader = styled.h2`
    margin: 10px auto;
`

export const Text = styled.p`
    margin: 20px 20px 20px 0;
`