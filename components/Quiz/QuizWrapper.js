import { Box, Flex, Stack, Text, Icon, Link } from "@chakra-ui/react";
import GeneralStackWrapper from "../General/GeneralStackWrapper";
import Header from "./Header";
import QuizBar from "./QuizBar";
import {FaLightbulb} from 'react-icons/fa'

const QuizWrapper = ({
    headerText,
    descriptionText = '',
    ...otherProps
}) => {
    return (
        <>
            <GeneralStackWrapper>
                <Header />
                <Stack gap={'15px'} textAlign={'center'} maxWidth={'620px'} width={'100%'} flexGrow={1}>
                    <QuizBar />
                    <Box marginY={'22px !important'}>
                        <Text fontSize={'25px'} fontWeight={500} mb={'5px'} >{headerText}</Text>
                        <Text fontSize={'16px'}>{descriptionText}</Text>
                    </Box>
                    {otherProps.children}
                </Stack>
                <Flex textAlign={'center'} mt={'10px !important'} mb={'50px !important'}>
                    <Icon as={FaLightbulb} marginTop={1}></Icon>
                    <Text marginLeft={2}>Did you know? You may be eligible for a $5000 federal grant. {" "}
                        <Link href="https://www.solacity.com/solar-rebates-and-incentives-in-canada/" isExternal>Click here to learn more.</Link>
                    </Text>
                </Flex>
            </GeneralStackWrapper>
        </>
    )
}

export default QuizWrapper;