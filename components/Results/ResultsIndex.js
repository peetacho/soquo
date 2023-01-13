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
                              <Icon as={GiReceiveMoney} color={'yellow.500'} w={5} h={5} />
                          }
                          iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                          text={'Weather Conditions'}
                      />
                      <Feature
                          icon={<Icon as={GiTreehouse} color={'green.500'} w={5} h={5} />}
                          iconBg={useColorModeValue('green.100', 'green.900')}
                          text={'Hours of Sunlight by Region'}
                      />
                      <Feature
                          icon={
                              <Icon as={GiUbisoftSun} color={'purple.500'} w={5} h={5} />
                          }
                          iconBg={useColorModeValue('purple.100', 'purple.900')}
                          text={'... and more'}
                      />
                  </Stack>
              </Stack>
              <Flex>
                  <Image
                      rounded={'md'}
                      alt={'feature image'}
                      src={
                          'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                      }
                      objectFit={'cover'}
                  />
              </Flex>
          </SimpleGrid>
      </Container>
  )
}