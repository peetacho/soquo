import { Box, Flex, Text } from "@chakra-ui/react";
import OutlineButton from "../../../components/Quiz/OutlineButton";
import QuizWrapper from "../../../components/Quiz/QuizWrapper";
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { HiBuildingStorefront, HiBuildingLibrary } from 'react-icons/hi2'
import { useState } from "react"
import OutlineTextButton from "../../../components/Quiz/OutlineTextButton";
import GeneralLinkWrapper from "../../../components/General/GeneralLinkWrapper";
import { getCurrentQuestion, updateFormAnswers } from "../../../utils/Utils";
import { useRouter } from "next/router";

const Location = () => {
    const [selectedOption, setOption] = useState('');
    const router = useRouter();
    return (
        <QuizWrapper
            headerText={<><Text as={'span'} fontWeight={'bold'}>Where</Text> would you like to install solar panels?</>}
        >
            <Flex justifyContent={'space-between'} gap={'70px'}>
                <OutlineButton bigText={'Home'} value={'h'} selectedOption={selectedOption} setOption={setOption} icon={BsFillHouseDoorFill} />
                <OutlineButton bigText={'Small Business'} value={'s'} selectedOption={selectedOption} setOption={setOption} icon={HiBuildingStorefront} />
                <OutlineButton bigText={'Medium-sized Business'} value={'m'} selectedOption={selectedOption} setOption={setOption} icon={HiBuildingLibrary} />
            </Flex>
            {selectedOption ? (
                <Flex justifyContent={'center'} mt={'35px !important'}>
                    <GeneralLinkWrapper href={'/form/postal'}>
                        <OutlineTextButton text={'Submit'} onClick={() => {
                            updateFormAnswers(router, selectedOption);
                        }} />
                    </GeneralLinkWrapper>
                </Flex>
            ) : null}
        </QuizWrapper>
    )
}

export default Location;