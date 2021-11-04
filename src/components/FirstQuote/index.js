import React from 'react'
import {
    FirstQuoteSection,
    FirstQuoteImages,
    FirstQuoteContainer,
    FirstQuoteContent,
    Header
} from './FirstQuoteE'
import fqi from '../../images/about_1.jpg'

const FirstQuote = () => {
    return (
        <>
            <FirstQuoteSection>
                <FirstQuoteImages src={fqi} alt='Stylizacja paznokci Natalia FirstQuote'/>
                <FirstQuoteContainer>
                    <FirstQuoteContent>
                        <Header>Zadbane i wystylizowane paznokcie są dla kobiety niczym elegancka biżuteria</Header>
                        <Header>Podkreślają styl, dodają pewności siebie i wprawiają w dobry nastrój</Header>
                    </FirstQuoteContent>
                </FirstQuoteContainer>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f3e8f0" fillOpacity="1" d="M0,160L34.3,170.7C68.6,181,137,203,206,224C274.3,245,343,267,411,272C480,277,549,267,617,245.3C685.7,224,754,192,823,160C891.4,128,960,96,1029,80C1097.1,64,1166,64,1234,80C1302.9,96,1371,128,1406,144L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
            </FirstQuoteSection>
        </>
    )
}

export default FirstQuote
