import { Flex, Text } from "@chakra-ui/react";
import OutlineButton from "../../components/Quiz/OutlineButton";
import QuizWrapper from "../../components/Quiz/QuizWrapper";
import { BsBoxSeam } from 'react-icons/bs'
import { FaRulerHorizontal } from 'react-icons/fa'
import { GiElectric } from 'react-icons/gi'
import { useEffect, useState } from "react"
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
                icon: BsBoxSeam,
                iconSize: '14px'
            },
            {
                value: '250',
                bigText: 'Medium',
                smolText: '~250m²',
                icon: BsBoxSeam,
                iconSize: '20px'
            },
            {
                value: '500',
                bigText: 'Large',
                smolText: '~500m²',
                icon: BsBoxSeam,
                iconSize: '24px',
            },
        ]
    },
    {
        id: 3,
        headerText: (<>What is the <Text as={'span'} fontWeight={'bold'}>tilt</Text> of your roof?</>),
        descriptionText: (<>An approximate degree value for your roof tilt.</>),
        placeHolderText: 'Add a custom tilt here! (in degrees°)',
        buttonOptions: [
            {
                value: '0',
                bigText: 'Flat',
                smolText: '0°',
                icon: FaRulerHorizontal,
            },
            {
                value: '15',
                bigText: 'Slight',
                smolText: '15°',
                icon: FaRulerHorizontal,
                transform: 'rotate(-15deg)'
            },
            {
                value: '30',
                bigText: 'Medium',
                smolText: '30°',
                icon: FaRulerHorizontal,
                transform: 'rotate(-30deg)'
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
                icon: GiElectric,
                iconSize: '18px'
            },
            {
                value: '$150-300',
                bigText: 'Medium',
                smolText: '$150-300',
                icon: GiElectric,
                iconSize: '22px'
            },
            {
                value: '$350-500',
                bigText: 'High',
                smolText: '$350-500',
                icon: GiElectric,
                iconSize: '26px'
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
                            icon={opt.icon}
                            iconSize={opt.iconSize}
                            transform={opt.transform}
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