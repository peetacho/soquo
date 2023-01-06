import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import GeneralStackWrapper from "../General/GeneralStackWrapper";
import Header from "./Header";
import QuizBar from "./QuizBar";

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
                    <Text>Did you know? That Koala&apos;s run on trees. Click here to learn more.</Text>
                </Flex>
            </GeneralStackWrapper>
        </>
    )
}

export default QuizWrapper;