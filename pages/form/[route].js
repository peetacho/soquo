import { Flex, Text } from "@chakra-ui/react";
import OutlineButton from "../../components/Quiz/OutlineButton";
import QuizWrapper from "../../components/Quiz/QuizWrapper";
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { HiBuildingStorefront, HiBuildingLibrary } from 'react-icons/hi2'
import { useEffect, useState } from "react"
import OutlineTextButton from "../../components/Quiz/OutlineTextButton";
import GeneralLinkWrapper from "../../components/General/GeneralLinkWrapper";
import { updateFormAnswers, getCurrentQuestion } from "../../utils/Utils";
import { useRouter } from "next/router";
import { quizOrder } from "../../utils/constants";
import QuestionMarkToolTip from "../../components/Quiz/QuestionMarkToolTip";
import OutlineInput from "../../components/Quiz/OutlineInput";
import OutlineIconButton from "../../components/Quiz/OutlineIconButton";
import { IoMdArrowRoundForward } from "react-icons/io";

const pageOptions = [
    {
        id: 2,
        headerText: (<>How much <Text as={'span'} fontWeight={'bold'}>space</Text> do you have?</>),
        descriptionText: (<>An approximate square meter value for your roof.</>),
        placeHolderText: 'Add a custom area here! (m²)',
        buttonOptions: [
            {
                value: '100',
                bigText: 'Small',
                smolText: '~100m²',
                icon: BsFillHouseDoorFill,
            },
            {
                value: '250',
                bigText: 'Medium',
                smolText: '~250m²',
                icon: HiBuildingStorefront,
            },
            {
                value: '500',
                bigText: 'Large',
                smolText: '~500m²',
                icon: HiBuildingLibrary,
            },
        ]
    },
    {
        id: 3,
        headerText: (<>What is the <Text as={'span'} fontWeight={'bold'}>tilt</Text> of your roof?</>),
        descriptionText: (<>An approximate degree value for your roof tilt.</>),
        placeHolderText: 'Add a custom tilt here! (in degrees °)',
        buttonOptions: [
            {
                value: '0',
                bigText: 'Flat',
                smolText: '0°',
                icon: BsFillHouseDoorFill,
            },
            {
                value: '15',
                bigText: 'Slight',
                smolText: '15°',
                icon: HiBuildingStorefront,
            },
            {
                value: '30',
                bigText: 'Medium',
                smolText: '30°',
                icon: HiBuildingLibrary,
            },
        ]
    },
    {
        id: 4,
        headerText: (<>What is your monthly <Text as={'span'} fontWeight={'bold'}>electric</Text> bill?</>),
        descriptionText: null,
        placeHolderText: 'Add a custom electricity bill here! (in $CAD)',
        buttonOptions: [
            {
                value: '$50-150',
                bigText: 'Low',
                smolText: '$50-150',
                icon: BsFillHouseDoorFill,
            },
            {
                value: '$150-300',
                bigText: 'Medium',
                smolText: '$150-300',
                icon: HiBuildingStorefront,
            },
            {
                value: '$350-500',
                bigText: 'High',
                smolText: '$350-500',
                icon: HiBuildingLibrary,
            },
        ]
    }
]

const QuizRoute = () => {
    const [selectedOption, setOption] = useState('');
    const [input, setInput] = useState('');
    const router = useRouter();
    const { route } = router.query

    useEffect(() => {
        if (selectedOption !== '') setInput('')
    }, [selectedOption]);

    var cqIndex = 0;
    if (getCurrentQuestion(router)) {
        if (route === quizOrder.at(-1).route) {
            var nextHref = '/app'
        }
        else {
            var nextHref = '/form/' + quizOrder[getCurrentQuestion(router).id + 1].route;
        }
        cqIndex = getCurrentQuestion(router).id - 2
    }
    var headerText = pageOptions[cqIndex].headerText;
    var descriptionText = pageOptions[cqIndex].descriptionText;
    var placeHolderText = pageOptions[cqIndex].placeHolderText;
    var buttonOptions = pageOptions[cqIndex].buttonOptions;


    return (
        <QuizWrapper
            headerText={headerText}
            descriptionText={descriptionText}
        >
            <Flex justifyContent={'space-between'} gap={'70px'}>
                {buttonOptions.map((opt, i) => {
                    return (
                        <OutlineButton
                            key={i}
                            selectedOption={selectedOption}
                            setOption={setOption}
                            value={opt.value}
                            bigText={opt.bigText}
                            smolText={opt.smolText}
                            con={opt.icon}
                            hintLabel={opt.hintLabel} />
                    )
                })}
            </Flex>

            <Flex mt={'40px !important'} gap={'15px'} alignItems={'center'}>
                <OutlineInput placeHolderText={placeHolderText} value={input} handleChange={(e) => {
                    setOption('')
                    setInput(e.target.value)
                }} />
                <QuestionMarkToolTip hintLabel={'hallo!'} />
                <GeneralLinkWrapper href={nextHref}>
                    <OutlineIconButton icon={IoMdArrowRoundForward} onClick={() => {
                        updateFormAnswers(router, input ? input : selectedOption);
                        setInput('')
                    }} />
                </GeneralLinkWrapper>
            </Flex>
        </QuizWrapper>
    )
}

export default QuizRoute;