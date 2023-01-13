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
    GiTreehouse,
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

export default function ResultsHero({ dollars, trees, score }) {
    return (
        <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'orange.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('orange.50', 'orange.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Summary
                    </Text>
                    <Heading>Here are your insights:</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Find out how you did across three pillars: cost & savings, green impact and our own SoQuo Index!
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
                                <Icon as={GiReceiveMoney} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={"$" + dollars + " saved per year!"}
                        />
                        <Feature
                            icon={<Icon as={GiTreehouse} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={trees + " trees saved!"}
                        />
                        <Feature
                            icon={
                                <Icon as={GiUbisoftSun} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={score + " SoQuo Score"}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={'https://cdn.discordapp.com/attachments/944408468243238952/1063492515984064594/Green_Impact_2.png'}
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    )
}