import React from "react";
import { MainStackParamList } from "../types/navigation";
import { StackScreenProps } from "@react-navigation/stack";
import {
    NativeBaseProvider,
    Heading,
    Container,
    Avatar,
    ScrollView,
    Text,
    HStack,
    VStack,
} from "native-base"
import SearchBar from "../components/utils/SearchBar";
import FriendsList from "../components/utils/FriendsList";

import { useTheme } from "react-native-rapi-ui";
import NavBar from "../components/utils/NavBar";

export default function ({ navigation }: StackScreenProps<MainStackParamList, "MainTabs">) {
    const { isDarkmode, setTheme } = useTheme();

    return (
        <VStack paddingX={4} paddingTop={12} flex={1} justifyContent="flex-start" >
            <NavBar title="Tus Amigos" avatar_uri="https://i.imgur.com/pzESYyI.jpeg" />
            <SearchBar />
            <VStack paddingTop={2}>
                <Heading
                    alignSelf={{
                        base: "flex-start",
                        md: "flex-start",
                    }}
                    marginBottom={2}
                    size={"lg"}
                >
                    Favoritos
                </Heading>
                <HStack space={2}>
                    <Avatar
                        source={{
                            uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
                        }}
                    >
                        SS
                        <Avatar.Badge bg={"green.600"} />
                    </Avatar>
                    <Avatar
                        source={{
                            uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
                        }}
                    >
                        GG
                        <Avatar.Badge bg={"green.600"} />
                    </Avatar>
                    <Avatar
                        source={{
                            uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
                        }}
                    >
                        RS
                        <Avatar.Badge bg={"green.600"} />
                    </Avatar>
                    <Avatar
                        source={{
                            uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
                        }}
                    >
                        AK
                        <Avatar.Badge bg={"green.600"} />
                    </Avatar>
                </HStack>
            </VStack>
            <VStack marginTop={4}>
                <FriendsList />
            </VStack>
        </VStack>
    );
}