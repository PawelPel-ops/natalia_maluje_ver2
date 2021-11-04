import styled from 'styled-components'

export const SecondQuoteSection = styled.section`
    background-color: #9C7194;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SecondQuoteContainer = styled.div`
    max-width: 1300px;
`

export const SecondQuoteContent = styled.div`
    margin: 50px;
`

export const Header = styled.h2`
    color: #fff;
    font-size: 1.8rem;
    font-weight: normal;

    @media screen and (max-width: 1200px){
        font-size: 1.6rem;
    }

    @media screen and (max-width: 768px){
        font-size: 1.4rem;
    }
`