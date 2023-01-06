import { Input } from "@chakra-ui/react"

const OutlineInput = ({
    placeHolderText,
    value = '',
    handleChange,
}) => {
    return (
        <Input
            placeholder={placeHolderText}
            value={value}
            onChange={handleChange}
            borderRadius='30px'
            borderWidth={'4px'}
            borderColor={'brand.400'}
            height={'50px'}
            _hover={{ borderColor: 'brand.400' }}
            _focus={{ borderColor: 'brand.200', boxShadow: 'none' }}
        />
    )
}

export default OutlineInput;