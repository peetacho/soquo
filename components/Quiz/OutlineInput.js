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
        />
    )
}

export default OutlineInput;