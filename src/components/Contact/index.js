import React from 'react'
import sty from '../../images/test_stylizacja2.jpg'
import {
    ContactSection,
    ContactContainer,
    ContactContent,
    Images,
    ContactWrapper,
    Text
} from './ContactE'

const Contact = () => {
    return (
        <>
            <ContactSection id='linkToKontakt'>
                <ContactContainer>
                    <ContactContent>
                        <Images src={sty} alt="Stylizacja Paznokci NAtalia Contact"/>
                        <ContactWrapper>
                            <Text>W razie pytań i umówienia terminu zapraszam do kontaktu:</Text>
                            <Text>570 878 028</Text>
                        </ContactWrapper>
                    </ContactContent>
                </ContactContainer>
            </ContactSection>
        </>
    )
}

export default Contact
