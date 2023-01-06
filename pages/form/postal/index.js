import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import OutlineIconButton from "../../../components/Quiz/OutlineIconButton";
import OutlineInput from "../../../components/Quiz/OutlineInput";
import QuizWrapper from "../../../components/Quiz/QuizWrapper";
import { IoMdArrowRoundForward } from 'react-icons/io'
import { useRouter } from "next/router";
import { getCurrentQuestion, updateFormAnswers } from "../../../utils/Utils";
import QuestionMarkToolTip from "../../../components/Quiz/QuestionMarkToolTip";
import GeneralLinkWrapper from "../../../components/General/GeneralLinkWrapper";

const PostalCode = () => {
    const [postal, setPostal] = useState('');
    const router = useRouter();
    return (
        <QuizWrapper
            headerText={<><Text as={'span'} fontWeight={'bold'}>Where</Text> would you like to install solar panels?</>}
            descriptionText={<>Provide us with your Postal Code for increased accuracy.</>}
        >
            <Flex my={'30px !important'} gap={'15px'} alignItems={'center'}>
                <QuestionMarkToolTip placement="left" hintLabel={'For more accurate hours of sunlight.'} />
                <OutlineInput placeHolderText={'ABC 123'} value={postal} handleChange={(e) => { setPostal(e.target.value) }} />
                <GeneralLinkWrapper href={'/form/area'}>
                    <OutlineIconButton icon={IoMdArrowRoundForward} onClick={() => {
                        updateFormAnswers(router, postal);
                    }} />
                </GeneralLinkWrapper>
            </Flex>
        </QuizWrapper>
    )
}

export default PostalCode;