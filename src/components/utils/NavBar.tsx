import { Avatar, Container, HamburgerIcon, Heading, HStack } from "native-base"
import React from "react"

const NavBar = (props: {
    title: string;
    avatar_uri?: string;
}) => {
    return (
        <HStack 
            alignItems={"center"}
            alignContent={"space-between"}
        >
            <Heading alignSelf={
                {
                    base: "flex-start",
                    md: "flex-start"
                }
            }>
                {props.title}
            </Heading>
            {props.avatar_uri &&
                <>
                    <Avatar marginLeft={23}
                        source={
                            { uri: props.avatar_uri }
                        }>
                        SS
                    </Avatar>
                    <HamburgerIcon marginLeft={4} />
                </>
            }
        </HStack>
    )
}

export default NavBar;
