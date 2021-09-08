import styled from "styled-components";
import bgC from '../../images/bg_comments.jpg'

export const CommentsSection = styled.section`
    background: url(${bgC}) center;
    display: flex;
    justify-content: center;
    background-color: #000;
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
    margin: 100px 50px; 
    position: relative;
`

export const CommentsHeader = styled.h3`
    font-size: 2rem;
    font-weight: normal;
    color: #fff;
`

export const CommentsWrapper = styled.div`
    background-color: #9c7194;
    margin: 100px auto;
    border-radius: 10px;
    box-shadow: 3px 5px 9px rgba(0,0,0,.7);
`

export const Box = styled.div`
    margin: 50px 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    // height: 350px;
`

export const Content = styled.p`
    font-size: 1.2rem;
    color: #fff;
`

export const Name = styled.span`
    font-size: 1.2rem;
    color: #fff;
    margin: 50px auto 30px;
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 100px;
`

export const QuoteSymbol = styled.span`
    color: #fff;
    font-size: 9rem;
    position: absolute;
    top: 40%;
    left: 0;
`

export const PrevArrowBox = styled.div`
    font-size: 3rem;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    transition: all .25s ease;
    cursor: pointer;

    &:hover{
        font-size: 3.5rem;
        top: 49%;
    }
`

export const NextArrowBox = styled.div`
    font-size: 3rem;
    color: #fff;
    position: absolute;
    top: 50%;
    right: 0;
    transition: all .25s ease;
    cursor: pointer;

    &:hover{
        font-size: 3.5rem;
        top: 49%;
    }
`