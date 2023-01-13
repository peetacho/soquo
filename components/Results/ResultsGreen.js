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
    GiBarrel,
    GiTreehouse,
    GiCoalWagon
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

export default function ResultsGreen({ energykJ, trees, barrelsOil, kgCoal }) {
    return (
        <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'green.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('green.50', 'green.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Green Impact
                    </Text>
                    <Heading>Generate {energykJ / 3600} kWh worth of green energy!</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        This replaces:
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
                                <Icon as={GiTreehouse} color={'green.800'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('green.100', 'yellow.900')}
                            text={trees + " trees"}
                        />
                        <Feature
                            icon={<Icon as={GiBarrel} color={'green.800'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.200', 'green.900')}
                            text={barrelsOil + " barrels of Gasoline"}
                        />
                        <Feature
                            icon={
                                <Icon as={GiCoalWagon} color={'green.900'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('green.300', 'purple.900')}
                            text={kgCoal + " kg of Coal"}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://cdn.discordapp.com/attachments/944408468243238952/1063492350770421870/Green_Impact_1.png'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    )
}