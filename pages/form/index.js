import { Flex } from "@chakra-ui/react";
import GeneralLinkWrapper from "../../components/General/GeneralLinkWrapper";
import OutlineTextButton from "../../components/Quiz/OutlineTextButton";
import QuizWrapper from "../../components/Quiz/QuizWrapper";
import { quizOrder } from "../../utils/constants";

export default function Quiz() {
    return (
        <QuizWrapper>
            <div>Enter your information, and try the assessment below to get accurate metrics, and learn about Cost & Savings, your Green Impact and find out how suitable your house is for solar installation, through our suitability index, the SoQuo index.</div>
            <Flex justifyContent={'center'} alignItems={'center'}>
                <GeneralLinkWrapper href={'/form/' + quizOrder[0].route}>
                    <OutlineTextButton text={'Start the Assessment'} />
                </GeneralLinkWrapper>
            </Flex>
        </QuizWrapper>
    )
}