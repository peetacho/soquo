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

export default function ResultsRecom() {
  return (
      <Container maxW={'5xl'} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                  <Text
                      textTransform={'uppercase'}
                      color={'red.400'}
                      fontWeight={600}
                      fontSize={'sm'}
                      bg={useColorModeValue('red.50', 'red.900')}
                      p={2}
                      alignSelf={'flex-start'}
                      rounded={'md'}>
                      Recommendations
                  </Text>
                  <Heading>Nearby Contractors:</Heading>
                  <Text color={'gray.500'} fontSize={'lg'}>
                      Find the best contractors for you: 
                  </Text>
              </Stack>
          </SimpleGrid>
      </Container>
  )
}