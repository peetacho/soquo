import { Box, Text } from "@chakra-ui/react"

const OutlineTextButton = ({
    text,
    onClick
}) => {
    return (
        <Box borderRadius='30px'
            bg={'brand.400'}
            color={'white'}
            borderColor={'brand.200'}
            borderWidth='4px'
            w={44}
            h={12}
            overflow='hidden'
            pt={'8px'}
            px={'5px'}
            _hover={{ cursor: 'pointer' }}
            onClick={() => {
                if (onClick) onClick();
            }}>
            <Text fontSize={'14px'} fontWeight={900}>{text}</Text>
        </Box>
    )
}

export default OutlineTextButton;