import { Box, Flex, Icon, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import QuestionMarkToolTip from "./QuestionMarkToolTip";

const OutlineButton = ({
    icon,
    bigText,
    value,
    smolText,
    selectedOption,
    setOption,
    hintLabel,
    onClick
}) => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (selectedOption !== value) {
            setToggle(false);
        }
    }, [selectedOption, value]);

    return (
        <Flex flexDirection={'column'} gap={'12px'}>
            <Box borderRadius='30px'
                bg={toggle ? 'brand.400' : 'white'}
                color={toggle ? 'white' : 'black'}
                borderColor={toggle ? 'brand.200' : 'brand.400'}
                borderWidth='4px'
                w={40}
                h={40}
                overflow='hidden'
                pt={'32px'}
                px={'12px'}
                _hover={{ cursor: 'pointer', bg: 'brand.400', color: 'white', borderColor: 'brand.200' }}
                onClick={() => {
                    setToggle(!toggle);
                    setOption(!toggle ? value : '')
                    if (onClick) onClick();
                }}>
                <Icon as={icon} boxSize={6} />
                <Text mt={'10px'} fontSize={'18px'} fontWeight={'bold'}>{bigText}</Text>
                {smolText ? <Text fontSize={'12px'}>{smolText}</Text> : null}
            </Box>
            {hintLabel ? <QuestionMarkToolTip hintLabel={hintLabel} /> : null}
        </Flex>
    )
}

export default OutlineButton;