import styled from 'styled-components'

export const FirstQuoteSection = styled.section`
    background-color: #9C7194;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const FirstQuoteImages = styled.img`
    width: 100%;
`

export const FirstQuoteContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    
`

export const FirstQuoteContent = styled.div`
    width: 100%;
`

export const Header = styled.h2`
    color: #fff;
    font-size: 1.8rem;
    font-weight: normal;
    text-align: center;
    margin: 70px 30px;

    @media screen and (max-width: 1200px){
        font-size: 1.6rem;
    }

    @media screen and (max-width: 768px){
        font-size: 1.4rem;
    }
`