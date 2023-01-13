import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import OutlineIconButton from "../../../components/Quiz/OutlineIconButton";
import OutlineInput from "../../../components/Quiz/OutlineInput";
import QuizWrapper from "../../../components/Quiz/QuizWrapper";
import { IoMdArrowRoundForward } from 'react-icons/io'
import { useRouter } from "next/router";
import { getCoordinates, updateFormAnswers } from "../../../utils/Utils";
import QuestionMarkToolTip from "../../../components/Quiz/QuestionMarkToolTip";
import GeneralLinkWrapper from "../../../components/General/GeneralLinkWrapper";

const PostalCode = () => {
    const [postal, setPostal] = useState('');
    const router = useRouter();
    const toast = useToast()

    const checkPostalCode = async (postal) => {
        const postalCodeRegex = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/);

        if (!postalCodeRegex.test(postal)) {
            toast({
                title: 'Postal Code is not a valid Canadian postal code',
                status: 'error'
            })
            return
        }

        const response = await getCoordinates(postal)
        if (response.success) {
            updateFormAnswers(router, postal);
            window.location = '/form/area'
            return
        }
        else {
            toast({
                title: 'Postal Code cannot be located throught the geocoder api',
                status: 'error'
            })
            return
        }
    }

    return (
        <QuizWrapper
            headerText={<><Text as={'span'} fontWeight={'bold'}>Where</Text> would you like to install solar panels?</>}
            descriptionText={<>Provide us with your Postal Code for increased accuracy.</>}
        >
            <Flex my={'30px !important'} gap={'15px'} alignItems={'center'}>
                <QuestionMarkToolTip placement="left" hintLabel={'For more accurate hours of sunlight.'} />
                <OutlineInput placeHolderText={'ABC 123'} value={postal} handleChange={(e) => { setPostal(e.target.value) }} />
                <OutlineIconButton icon={IoMdArrowRoundForward} onClick={() => {
                    checkPostalCode(postal)
                }} />
            </Flex>
        </QuizWrapper>
    )
}

export default PostalCode;