import ResultsHero from "../../components/Results/ResultsHero";
import LandingNav from "../../components/Landing/LandingNav";
import { useEffect, useState } from "react";
import { getFormAnswers } from "../../utils/Utils";
import { Box, Flex, Grid, GridItem, Spinner, Text, VStack } from "@chakra-ui/react";
import GeneralLinkWrapper from "../../components/General/GeneralLinkWrapper";
import ResultsSavings from "../../components/Results/ResultsSavings";
import ResultsGreen from "../../components/Results/ResultsGreen";
import ResultsIndex from "../../components/Results/ResultsIndex";
import ResultsRecom from "../../components/Results/ResultsRecom";
import ContractorCard from "../../components/Results/ContractorCard";

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
        // const recommendationsResponse = await fetch("/api/recommendations?" + new URLSearchParams({
        //     postalCode: answers[1].answer
        // }), { method: "GET" });
        // const recommendations = await recommendationsResponse.json()
        return {
            solarIndex: solarIndex,
            costs: costs,
            greenImpact: greenImpact,
            // recommendations: recommendations
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

                {(answers !== null && response && response !== {} && response !== null) ? (
                    <Box>
                        <ResultsHero dollars={response.costs.savings} trees={response.greenImpact.treesSaved} score={response.solarIndex.efficiency} />
                        <ResultsSavings savings={response.costs.savings} breakevenCost={response.costs.breakevenCost} solarPanelOutput={response.costs.solarPanelOutput} recommendedPanels={response.costs.recommendedNumberOfSolarPanels} />
                        <ResultsGreen energykJ={response.greenImpact.energyProduced} trees={response.greenImpact.treesSaved} barrelsOil={response.greenImpact.oilReplaced} kgCoal={response.greenImpact.coalReplaced} />
                        <ResultsIndex score={response.solarIndex.efficiency} />
                        <ResultsRecom />
                        {/* <Grid templateColumns={'1fr 1fr'}>
                            {response.recommendations.contractors.map((c, i) => {
                                return (
                                    <GridItem key={i}>
                                        <ContractorCard name={c.name} address={c.address} phone={c.contact} website={c.website} />
                                    </GridItem>
                                )
                            })}
                        </Grid> */}
                        <VStack marginBottom={150}>
                            <Grid templateColumns='repeat(3, 1fr)'>
                                <GridItem>
                                <ContractorCard name={"Solar Up"} address={"364 Supertest Rd #208, North York, ON M3J 2M2"} phone={"(416) 613-9996"} website={"https://solarup.ca/"}/>
                                </GridItem>
                                <GridItem>
                                <ContractorCard name={"Microgreen"} address={"860 Denison Street, Unit 10 Markham, Ontario, Canada"} phone={"647-699-0420"} website={"https://microgreen.ca/"}/>
                                </GridItem>
                                <GridItem>
                                <ContractorCard name={"New Dawn Energy"} address={"8-7321 Victoria Park Ave Markham, ON L3R 2Z8"} phone={"416-855-9377"} website={"https://newdawn-es.com/"}/>
                                </GridItem>                            
                            </Grid>
                        </VStack>
                    </Box>
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