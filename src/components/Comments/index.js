import React, { useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import {
    CommentsSection,
    CommentsContainer,
    CommentsContent,
    CommentsHeader,
    CommentsWrapper,
    Box,
    Content,
    Name,
    Avatar,
    QuoteSymbol,
    PrevArrowBox,
    NextArrowBox
} from './CommentsE.js'
import { AllComments } from './CommentsData.js'

const Comments = () => {
    const [currentComment, setCurrentComment] = useState(0)

    const nextComment = () => {
        if(currentComment === AllComments.length - 1){
            setCurrentComment(0)
        } else {
            setCurrentComment(currentComment + 1)
        }
    }

    const prevComment = () => {
        if(currentComment === 0){
            setCurrentComment(AllComments.length - 1)
        } else {
            setCurrentComment(currentComment - 1)
        }
    }

    return (
        <>
            <CommentsSection>
                <CommentsContainer>
                    <CommentsContent>
                        <CommentsHeader>Tak oceniają mnie dziewczyny, które mi zaufały:</CommentsHeader>
                        <CommentsWrapper>
                            <Box>
                                <Content>{AllComments[currentComment].des}</Content>
                                <Name>{AllComments[currentComment].name}</Name>
                                <Avatar src={AllComments[currentComment].src} alt='Stylizacja Paznokci Natalia Opinie'/>
                                <QuoteSymbol>"</QuoteSymbol>
                            </Box>
                        </CommentsWrapper>
                        <PrevArrowBox onClick={prevComment}>
                            <MdKeyboardArrowLeft />
                        </PrevArrowBox>
                        <NextArrowBox onClick={nextComment}>
                            <MdKeyboardArrowRight />
                        </NextArrowBox>
                    </CommentsContent>
                </CommentsContainer>
            </CommentsSection>
        </>
    )
}

export default Comments
