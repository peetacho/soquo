import { Stack } from "@chakra-ui/react";

export default function GeneralStackWrapper({
    ...otherProps
}) {
    return (
        <Stack paddingX={'4em'} paddingY={'2em'} alignItems={'center'} height={'100vh'}>
            {otherProps.children}
        </Stack>
    )
}