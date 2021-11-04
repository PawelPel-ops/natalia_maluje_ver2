import styled from 'styled-components'

export const ContactSection = styled.section`
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: #f3e8f0;
`

export const ContactContainer = styled.div`
    max-width: 1300px;
    width: 100%;
`

export const ContactContent = styled.div`
    width: 100%;
    margin: 150px auto;
    position: relative;

    @media screen and (max-width: 480px){
        margin: 100px auto 50px;
    }
`

export const Images = styled.img`
    width: 400px;
    margin-left: 50px;

    @media screen and (max-width: 1024px){
        width: 40vw;
    }

    @media screen and (max-width: 768px){
        width: 50vw;
        margin-left: 20px;
    }
`

export const ContactWrapper = styled.div`
    background-color: #9c7194;
    position: absolute;
    top: 15%;
    left: 15%;
    display: flex;
    flex-direction: column;
    padding: 100px 50px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 3px 5px 11px rgba(0,0,0,.3);
    margin-right: 30px;

    @media screen and (max-width: 1024px){
        padding: 60px 40px;
    }

    @media screen and (max-width: 768px){
        padding: 30px 45px;
        top: 10%;
        margin-right: 20px;
    }

    @media screen and (max-width: 768px){
        padding: 10px 20px;
    }
`

export const Text = styled.span`
    font-size: 1.8rem;
    margin: 10px auto;
    color: #fff;

    @media screen and (max-width: 1200px){
        font-size: 1.6rem;
    }

    @media screen and (max-width: 768px){
        font-size: 1.2rem;
    }

    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`