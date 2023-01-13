import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Link,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdLocationPin, MdPhone, MdWeb} from 'react-icons/md'


export default function ContractorCard({name, address, phone, website}) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Contractor
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {name}
          </Heading>
          <Text color={'gray.500'}>
            <Icon as={MdPhone} /> {" "} {phone}
          </Text>
          <Text color={'gray.500'}>
            <Icon as={MdLocationPin} /> {" "} {address}
          </Text>
          <Text color={'gray.500'}>
            <Icon as={MdWeb} /> {" "} 
            <Link href={website} isExternal> {website}
            </Link>
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}