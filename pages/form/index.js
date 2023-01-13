import { Flex } from "@chakra-ui/react";
import GeneralLinkWrapper from "../../components/General/GeneralLinkWrapper";
import OutlineTextButton from "../../components/Quiz/OutlineTextButton";
import QuizWrapper from "../../components/Quiz/QuizWrapper";
import { quizOrder } from "../../utils/constants";

export default function Quiz() {
    return (
        <QuizWrapper>
            <div>Try out our assessment below to get accurate metrics, including Costs & Savings, your Green Impact, and how suitable your house is for solar installation, through our SoQuo Index.</div>
            <Flex justifyContent={'center'} alignItems={'center'}>
                <GeneralLinkWrapper href={'/form/' + quizOrder[0].route}>
                    <OutlineTextButton text={'Start the Assessment'} />
                </GeneralLinkWrapper>
            </Flex>
        </QuizWrapper>
    )
}