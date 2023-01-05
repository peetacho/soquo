import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import OutlineButton from "../../../components/Quiz/OutlineButton";
import QuizBar from "../../../components/Quiz/QuizBar";
import QuizWrapper from "../../../components/Quiz/QuizWrapper";
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { HiBuildingStorefront, HiBuildingLibrary } from 'react-icons/hi2'

export default function Location() {
    return (
        <QuizWrapper>
            <Box marginY={'25px !important'}>
                <Text fontSize={'25px'}><Text as={'span'} fontWeight={'bold'}>Where</Text> would you like to install solar panels?</Text>
            </Box>
            <Flex justifyContent={'space-between'} gap={'70px'}>
                <OutlineButton bigText={'Home'} icon={BsFillHouseDoorFill} />
                <OutlineButton bigText={'Small Business'} icon={HiBuildingStorefront} />
                <OutlineButton bigText={'Medium-sized Business'} icon={HiBuildingLibrary} />
            </Flex>
        </QuizWrapper>
    )
}