import { Flex, Text, Image } from "@chakra-ui/react";
import GeneralLinkWrapper from '../General/GeneralLinkWrapper';

const Logo = () => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'}>
            <GeneralLinkWrapper href='/'>
                <Image
                maxHeight="10" 
                src='https://cdn.discordapp.com/attachments/803390264974376980/1063327533107531889/SoQuo_Logo.png'
                alt='Dan Abramov'>
                </Image>
            </GeneralLinkWrapper>
        </Flex>
    )
}

export default Logo