import { Avatar, HamburgerIcon, Heading, HStack, Pressable } from "native-base"
import React from "react"
import { useState } from "react";

const NavBar = (props: {
    title: string;
    avatar_uri?: string;
}) => {
    const [userStatus, setUserStatus] = useState("disponible"); 
 
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
                <Pressable onPress={() => {userStatus == "disponible" ? setUserStatus("ocupado") : setUserStatus("disponible")}}> 
                    <Avatar marginLeft={23}
                        source={
                            { uri: props.avatar_uri }
                        }>
                        SS
                        <Avatar.Badge bg={userStatus == "disponible" ? "green.600" : "red.600" } />
                    </Avatar>
                </Pressable>
                    <HamburgerIcon marginLeft={4} />
                </HStack>
            }
        </HStack>
    )
}

export default NavBar;
