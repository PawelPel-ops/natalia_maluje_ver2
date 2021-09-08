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
    margin: 150px 50px;
    position: relative;
`

export const Images = styled.img`
    width: 400px;
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
`

export const Text = styled.span`
    font-size: 1.8rem;
    margin: 10px auto;
    color: #fff;
`