import { Flex } from "@chakra-ui/react";
import GeneralLinkWrapper from "../../components/General/GeneralLinkWrapper";
import OutlineTextButton from "../../components/Quiz/OutlineTextButton";
import QuizWrapper from "../../components/Quiz/QuizWrapper";
import { quizOrder } from "../../utils/constants";

export default function Quiz() {
    return (
        <QuizWrapper>
            <div>Welcome to the quiz, press next to start!</div>
            <Flex justifyContent={'center'} alignItems={'center'}>
                <GeneralLinkWrapper href={'/form/' + quizOrder[0].route}>
                    <OutlineTextButton text={'Start the quiz'} />
                </GeneralLinkWrapper>
            </Flex>
        </QuizWrapper>
    )
}