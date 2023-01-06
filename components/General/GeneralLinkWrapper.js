import NextLink from 'next/link'
import { Link } from "@chakra-ui/react";

const GeneralLinkWrapper = ({
    href,
    isExternal,
    ...otherProps
}) => {
    return (
        <Link
            as={NextLink}
            href={href ? href : '/'}
            _hover={{ textDecoration: "none" }}
            isExternal={isExternal ? isExternal : false}>
            {otherProps.children}
        </Link>
    )
}

export default GeneralLinkWrapper;