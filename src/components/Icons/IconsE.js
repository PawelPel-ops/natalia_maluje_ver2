import styled from 'styled-components'

export const IconsSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3e8f0;
    position: relative;
`

export const OpacityText = styled.h3`
    position: absolute;
    font-size: 20vw;
    font-weight: normal;
    opacity: .1;
    letter-spacing: 15vw;
    
    &:first-child {
        top: -250px;
        left: -150px;
    }

    &:last-child {
        bottom: -200px;
        right: 0;
    }
`

export const IconsContainer = styled.div`
    margin: 100px 50px;
    max-width: 1300px;
`

export const IconsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const Box = styled.div`
    width: 250px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SvgWrapper = styled.div`
    background-color: #9C7194;
    border-radius: 50%;
    width: 170px;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 50%;
    height: 50%;
`

export const Text = styled.span`
    margin: 30px auto;
    text-align: center;
    text-transform: uppercase;
`