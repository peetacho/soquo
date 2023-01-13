import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';

import {
    GiReceiveMoney,
    GiBoomerangSun,
    GiUbisoftSun
} from 'react-icons/gi'


const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function ResultsSavings({ savings, breakevenCost, solarPanelOutput, recommendedPanels }) {
    return (
        <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'yellow.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('yellow.50', 'yellow.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Costs & Savings
                    </Text>
                    <Heading>Save ${savings} per year!</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>

                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={
                                <Icon as={GiReceiveMoney} color={'yellow.800'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={breakevenCost + " years to break even!"}
                        />
                        <Feature
                            icon={<Icon as={GiBoomerangSun} color={'yellow.800'} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.200', 'green.900')}
                            text={"Solar panel output: " + solarPanelOutput + "W"}
                        />
                        <Feature
                            icon={
                                <Icon as={GiUbisoftSun} color={'yellow.800'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.300', 'purple.900')}
                            text={"Number of recommended panels: " + recommendedPanels}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://cdn.discordapp.com/attachments/944408468243238952/1063351801103007744/2.png'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    )
}