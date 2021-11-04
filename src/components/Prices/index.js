import React from 'react'
import { PricesDetails } from './PricesData'
import {
    PricesSection,
    PricesContainer,
    PricesContent,
    Wrapper,
    FirstBorder,
    SecondBorder,
    Header,
    Box,
    Name,
    Price,
    Images
} from './PricesE'
import l2 from '../../images/l2.png'

const Prices = () => {
    return (
        <>
            <PricesSection id='linkToCennik'>
                <PricesContainer>
                    <PricesContent>
                        <Wrapper>
                            <Header>Cennik usług - Stylizacja paznokci</Header>
                            {PricesDetails.map((element, index) => {
                                return (
                                    <Box key={index}>
                                        <Name className='name'>{element.n}</Name>
                                        <Price className='price'>{element.p}</Price>
                                    </Box>
                                )
                            })}
                        </Wrapper>
                        <FirstBorder />
                        <SecondBorder />
                    </PricesContent>
                </PricesContainer>
                <Images src={l2} alt="Stylizacja Paznokci Natalia Lakier Cennik"/>
            </PricesSection>
        </>
    )
}

export default Prices
