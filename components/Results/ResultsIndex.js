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
  GiFluffyCloud,
  GiSunflower,
  GiExtraTime
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

export default function ResultsIndex({score}) {
  return (
      <Container maxW={'5xl'} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                  <Text
                      textTransform={'uppercase'}
                      color={'purple.400'}
                      fontWeight={600}
                      fontSize={'sm'}
                      bg={useColorModeValue('purple.50', 'purple.900')}
                      p={2}
                      alignSelf={'flex-start'}
                      rounded={'md'}>
                      SoQuo Index
                  </Text>
                  <Heading>SoQuo Score: {score}</Heading>
                  <Text color={'gray.500'} fontSize={'lg'}>
                      What we consider:
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
                              <Icon as={GiFluffyCloud} color={'purple.800'} w={5} h={5} />
                          }
                          iconBg={useColorModeValue('purple.100', 'yellow.900')}
                          text={'Weather Conditions'}
                      />
                      <Feature
                          icon={<Icon as={GiSunflower} color={'purple.800'} w={5} h={5} />}
                          iconBg={useColorModeValue('purple.200', 'green.900')}
                          text={'Hours of Sunlight by Region'}
                      />
                      <Feature
                          icon={
                              <Icon as={GiExtraTime} color={'black'} w={5} h={5} />
                          }
                          iconBg={useColorModeValue('purple.300', 'purple.900')}
                          text={'... and more'}
                      />
                  </Stack>
              </Stack>
              <Flex>
                  <Image
                      rounded={'md'}
                      alt={'feature image'}
                      src={
                          'https://cdn.discordapp.com/attachments/944408468243238952/1063351800096374816/4.png'
                      }
                      objectFit={'cover'}
                  />
              </Flex>
          </SimpleGrid>
      </Container>
  )
}