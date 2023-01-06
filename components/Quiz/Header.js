import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import BoldedTextButton from "../General/BoldedTextButton";
import GeneralLinkWrapper from '../General/GeneralLinkWrapper';
import { useRouter } from 'next/router'
import Logo from "../General/Logo";
import { getCurrentQuestion } from "../../utils/Utils";
import { quizOrder } from "../../utils/constants";

const Header = () => {
    const router = useRouter()
    var backHref = '/'
    if (router.asPath !== '/form') {
        // this assumes the user is behaving (i.e. they go on the correct routes)
        var currentQuestion = getCurrentQuestion(router)
        if (currentQuestion.id !== 0) {
            backHref = '/form/' + quizOrder[currentQuestion.id - 1].route
        }
        else if (currentQuestion.id == 0) {
            backHref = '/form'
        }
    }
    return (
        <>
            <Flex flexDirection={'row'} width={'100%'} justifyContent={'space-between'} alignItems={'center'} marginBottom={'50px'}>
                <Box flexGrow={1} flexBasis={0}>
                    <GeneralLinkWrapper href={backHref}>
                        <ChevronLeftIcon />
                        {router.asPath === '/form' ? 'Home' : 'Back'}
                    </GeneralLinkWrapper>
                </Box>
                <Logo />
                <Flex flexGrow={1} flexBasis={0} justifyContent={'flex-end'}>
                    <BoldedTextButton text={'Learn More'} />
                </Flex>
            </Flex>
        </>
    )
}

export default Header