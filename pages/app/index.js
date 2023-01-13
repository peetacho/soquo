import ResultsHero from "../../components/Results/ResultsHero";
import LandingNav from "../../components/Landing/LandingNav";
import { useEffect, useState } from "react";
import { getFormAnswers } from "../../utils/Utils";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import GeneralLinkWrapper from "../../components/General/GeneralLinkWrapper";

const App = () => {

    const [answers, setAnswers] = useState();
    const [response, setResponse] = useState();

    const getAllResponses = async (answers) => {
        const solarIndexResponse = await fetch("/api/solarindex", {
            method: "GET"
        });
        const solarIndex = await solarIndexResponse.json()
        const costsResponse = await fetch("/api/costs?" + new URLSearchParams({
            postalCode: answers[1].answer,
            spaceAllowed: answers[2].answer,
        }), { method: "GET" });
        const costs = await costsResponse.json()
        const greenImpactResponse = await fetch("/api/greenimpact?" + new URLSearchParams({
            postalCode: answers[1].answer,
            solarPanelOutput: costs.solarPanelOutput,
        }), { method: "GET" });
        const greenImpact = await greenImpactResponse.json()
        const recommendationsResponse = await fetch("/api/recommendations?" + new URLSearchParams({
            postalCode: answers[1].answer
        }), { method: "GET" });
        const recommendations = await recommendationsResponse.json()
        return {
            solarIndex: solarIndex,
            costs: costs,
            greenImpact: greenImpact,
            recommendations: recommendations
        }
    }

    useEffect(() => {
        setAnswers(getFormAnswers())
    }, []);

    useEffect(() => {

        if (answers) {
            async function foo(answers) {
                const allResponses = await getAllResponses(answers);
                setResponse(allResponses)
            }
            foo(answers);
        }
    }, [answers]);

    return (
        <>
            <Flex height={'100vh'} flexDirection={'column'}>
                <LandingNav />

                {(answers !== null && response && response !== null) ? (
                    <>
                        <ResultsHero />
                    </>
                ) : answers === null ? (
                    <Text>
                        Please fill in the form <GeneralLinkWrapper href="/form"><Text as={'span'} color={'brand.400'}>here</Text></GeneralLinkWrapper>!
                    </Text>
                ) : (
                    <Flex margin={12} justifyContent={'center'} alignItems={'center'} gap={'10px'}>
                        <Spinner />
                        <Text>Loading results...</Text>
                    </Flex>
                )}
            </Flex>
        </>
    )
}

export default App;