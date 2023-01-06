import { Box, Icon } from "@chakra-ui/react"

const OutlineIconButton = ({
    icon,
    onClick
}) => {
    return (
        <Box borderRadius='full'
            bg={'brand.400'}
            color={'white'}
            borderColor={'brand.200'}
            borderWidth='4px'
            w={'56px'}
            h={'50px'}
            overflow='hidden'
            pt={'4px'}
            margin={'auto'}
            _hover={{ cursor: 'pointer' }}
            onClick={() => {
                if (onClick) onClick();
            }}>
            <Icon as={icon} boxSize={8} />
        </Box>
    )
}

export default OutlineIconButton;