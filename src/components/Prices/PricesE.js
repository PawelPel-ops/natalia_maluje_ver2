import styled from 'styled-components'

export const PricesSection = styled.section`
    background-color: #f3e8f0;
    display: fex;
    justify-content: center;
    overflow: hidden;
    position: relative;
`

export const PricesContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: 100px 50px 150px;
`

export const PricesContent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`

export const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    background-color: #9c7194;
    padding: 40px;
    position: relative;
    z-index: 2;
    border-radius: 10px;

    @media screen and (max-width: 768px){
        width: 90%;
        padding: 20px;
    }
`

export const FirstBorder = styled.div`
    border: 2px solid #000;
    position: absolute;
    top: -100px;
    left: -100px;
    width: 90%;
    height: 50%;
`

export const SecondBorder = styled.div`
    border: 2px solid #000;
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 50%;
    height: 100%;
`

export const Header = styled.h2`
    color: #fff;
    margin-bottom: 20px;
`

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 10px;
    transition: all .15s ease;

    &:hover {
        background-color: #653e5e;
    }

    &:hover .name {
        color: #c8fcea;
        transition: all .15s ease;
    }

    &:hover .price {
        color: #c8fcea;
        transition: all .15s ease;
    }
`

export const Name = styled.span`
    color: #fff;
    padding: 10px;

    @media screen and (max-width: 1024px){
        font-size: .9rem;
        padding: 6px;
    }

    @media screen and (max-width: 768px){
        font-size: .8rem;
        padding: 6px 4px;
    }
`

export const Price = styled.span`
    color: #fff;
    padding: 10px;
    
    @media screen and (max-width: 1024px){
        font-size: .9rem;
        padding: 6px;
    }

    @media screen and (max-width: 768px){
        font-size: .8rem;
        padding: 6px 4px;
    }
`

export const Images = styled.img`
    position: absolute;
    width: 130px;
    bottom: 0;
    left: 10%;

    @media screen and (max-width: 768px){
        width: 100px;
        bottom: 2%;
    }
`