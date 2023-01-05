import { Button } from "@chakra-ui/react"

const BoldedTextButton = ({
    text
}) => {
    return (
        <Button
            fontSize={'16px'}
            fontWeight={'extrabold'}
            color={'white'}
            bg={'primary.400'}
            height={"unset"}
            paddingX={'3em'}
            paddingY={'8px'}
            borderRadius={'30px'}>
            {text}
        </Button>
    )
}

export default BoldedTextButton;