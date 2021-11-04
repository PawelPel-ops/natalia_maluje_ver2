import styled from "styled-components";
import bgC from '../../images/bg_comments.jpg'

export const CommentsSection = styled.section`
    background: url(${bgC}) center;
    display: flex;
    justify-content: center;
    background-color: #000;
    overflow: hidden;
`

export const CommentsContainer = styled.div`
    max-width: 1300px;
    width: 100%;
`

export const CommentsContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 100px 50px 50px; 
    position: relative;

    @media screen and (max-width: 1024px){
        margin: 100px 20px 50px;
    }
`

export const CommentsHeader = styled.h3`
    font-size: 2rem;
    font-weight: normal;
    color: #fff;

    @media screen and (max-width: 1200px){
        font-size: 1.6rem;
    }

    @media screen and (max-width: 768px){
        font-size: 1.2rem;
    }
`

export const CommentsWrapper = styled.div`
    background-color: #9c7194;
    margin: 70px auto;
    border-radius: 10px;
    box-shadow: 3px 5px 9px rgba(0,0,0,.7);

    @media screen and (max-width: 480px){
        margin: 30px auto;
    }
`

export const Box = styled.div`
    margin: 30px 70px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    min-height: 350px;

    @media screen and (max-width: 480px){
        margin: 30px 40px;
        min-height: 440px;
        justify-content: flex-start;
    }
`

export const Content = styled.p`
    font-size: 1.2rem;
    color: #fff;

    @media screen and (max-width: 1024px){
        font-size: 1rem;
    }
`

export const Name = styled.span`
    font-size: 1.2rem;
    color: #fff;
    margin: 40px auto 10px;
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 100px;
`

export const QuoteSymbol = styled.span`
    color: #fff;
    font-size: 9rem;
    position: absolute;
    top: 50%;
    left: 0;

    @media screen and (max-width: 480px){
        top: 60%;
        left: 0;
    }
`

export const PrevArrowBox = styled.div`
    font-size: 4rem;
    color: #fff;
    position: absolute;
    top: 45%;
    left: 0;
    transition: all .25s ease;
    cursor: pointer;

    &:hover{
        transform: scale(1.4);
    }

    @media screen and (max-width: 480px){
        left: -15px;
    }
`

export const NextArrowBox = styled.div`
    font-size: 4rem;
    color: #fff;
    position: absolute;
    top: 45%;
    right: 0;
    transition: all .25s ease;
    cursor: pointer;

    &:hover{
        transform: scale(1.4);
    }

    @media screen and (max-width: 480px){
        right: -15px;
    }
`