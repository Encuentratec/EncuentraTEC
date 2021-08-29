import { Avatar, Container, HamburgerIcon, Heading, HStack } from "native-base"
import React from "react"

const NavBar = (props: {
    title: string;
    avatar_uri?: string;
}) => {
    return (
        <HStack
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <Heading>
                {props.title}
            </Heading>
            {props.avatar_uri &&
                <HStack
                    alignItems={"center"}
                    alignContent={"flex-end"}
                >
                    <Avatar marginLeft={23}
                        source={
                            { uri: props.avatar_uri }
                        }>
                        SS
                    </Avatar>
                    <HamburgerIcon marginLeft={4} />
                </HStack>
            }
        </HStack>
    )
}

export default NavBar;
