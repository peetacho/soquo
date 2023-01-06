import { Box, Icon, Text, Tooltip } from "@chakra-ui/react"
import { AiOutlineQuestionCircle } from "react-icons/ai";

const QuestionMarkToolTip = ({
    hintLabel,
    placement = 'bottom',
    size = 8
}) => {
    return (
        <Tooltip label={hintLabel} placement={placement} hasArrow arrowSize={size}>
            <Box marginTop={'6px'}><Icon as={AiOutlineQuestionCircle} color={'brand.400'} boxSize={size} /></Box>
        </Tooltip>
    )
}

export default QuestionMarkToolTip;