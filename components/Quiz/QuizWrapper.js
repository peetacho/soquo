import { Stack } from "@chakra-ui/react";
import GeneralStackWrapper from "../General/GeneralStackWrapper";
import Header from "./Header";
import QuizBar from "./QuizBar";

export default function QuizWrapper({
    ...otherProps
}) {
    return (
        <>
            <GeneralStackWrapper>
                <Header />
                <Stack gap={'15px'} textAlign={'center'}>
                    <QuizBar />
                    {otherProps.children}
                </Stack>
            </GeneralStackWrapper>
        </>
    )
}