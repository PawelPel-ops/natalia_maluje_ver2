import styled from 'styled-components'

export const IconsSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3e8f0;
    position: relative;
    
    @media screen and (max-width: 480px){
        overflow: hidden;
    }
`

export const OpacityText = styled.h3`
    position: absolute;
    font-size: 20vw;
    font-weight: normal;
    opacity: .1;
    letter-spacing: 15vw;
    pointer-events: none;
    
    &:first-child {
        top: -250px;
        left: -150px;
    }

    &:last-child {
        bottom: -200px;
        right: 0;
    }

    @media screen and (max-width: 480px){
        font-size: 40vw;
        

        &:first-child {
            top: 0;
            left: -150px;
        }

        &:last-child {
            bottom: 0;
        }
    }
`

export const IconsContainer = styled.div`
    margin: 100px 50px;
    max-width: 1300px;
`

export const IconsContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`

export const Box = styled.div`
    width: 240px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover .wrapper {
        background-color: rgba(156, 113, 148, .8);
        transform: scale(.6);
        color: #9C7194;
        transition: all .25s ease-in-out;
    }

    &:hover .image {
        transform: scale(2.2);
        transition: all .25s ease-in-out;
    }

    &:hover .tekst {
        transform: scale(1.2);
        transition: all .25s ease-in-out;
    }

    @media screen and (max-width: 480px){
        margin: 20px;
    }
`

export const SvgWrapper = styled.div`
    background-color: #9C7194;
    border-radius: 50%;
    width: 170px;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media screen and (max-width: 480px){
        width: 100px;
        height: 100px;
    }
`

export const Image = styled.img`
    width: 50%;
    height: 50%;
`

export const Text = styled.span`
    margin: 30px auto;
    text-align: center;
    text-transform: uppercase;

    @media screen and (max-width: 480px){
        margin: 20px auto;
    }
`