import GeneralStackWrapper from "../General/GeneralStackWrapper";
import Header from "./Header";

export default function QuizWrapper({
    ...otherProps
}) {
    return (
        <>
            <GeneralStackWrapper>
                <Header />
                {otherProps.children}
            </GeneralStackWrapper>
        </>
    )
}