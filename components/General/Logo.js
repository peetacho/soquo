import { Flex, Text } from "@chakra-ui/react";
import GeneralLinkWrapper from '../General/GeneralLinkWrapper';

const Logo = () => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'}>
            <GeneralLinkWrapper href='/'>
                <Text fontWeight={'bold'} fontSize={'23px'} letterSpacing={'4px'}>SOQUO</Text>
            </GeneralLinkWrapper>
        </Flex>
    )
}

export default Logo