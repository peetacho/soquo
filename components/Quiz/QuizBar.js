import { Box, Flex } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { getCurrentQuestion } from "../../utils/Utils"

const BarThings = ({
    color
}) => {
    return (
        <Box bg={color} width={'100%'} height={'5px'} borderRadius={'25px'}></Box>
    )
}

const QuizBar = () => {
    const router = useRouter()
    var index = -1
    if (router.asPath !== '/form' && getCurrentQuestion(router)) {
        index = getCurrentQuestion(router).id
    }
    const oranges = []
    const MAX_NUM = 6
    for (let i = 0; i < MAX_NUM; i++) {
        if (i <= index) {
            oranges.push(<BarThings key={i} color={'brand.400'} />)
        }
        else {
            oranges.push(<BarThings key={i} color={'bar.400'} />)
        }
    }
    return (
        <Flex gap={'5px'} border='2px #e6ebeb solid' padding={'3px'} justifyContent={'center'} alignItems={'center'} borderRadius={'25px'}>
            {oranges}
        </Flex>
    )
}

export default QuizBar