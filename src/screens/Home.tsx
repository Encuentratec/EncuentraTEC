import React, { useState } from "react";
import { MainStackParamList } from "../types/navigation";
import { StackScreenProps } from "@react-navigation/stack";
import {
    Heading,
    Avatar,
    HStack,
    VStack,
} from "native-base"
import SearchBar from "../components/utils/SearchBar";
import FriendsList from "../components/utils/FriendsList";

import { useTheme } from "react-native-rapi-ui";
import NavBar from "../components/utils/NavBar";


export default function ({ navigation }: StackScreenProps<MainStackParamList, "MainTabs">) {
    const { isDarkmode, setTheme } = useTheme();

    const data = [
        {
          id: "6",
          title: "First Contact",
          uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
          status: "ocupado",
          is_friend: false,
        },
        {
          id: "5",
          title: "Second Contact",
          uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
          status: "disponible",
          is_friend: true,
        },
        {
          id: "4",
          title: "Third Contact",
          uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
          status: "disponible",
          is_friend: true,
        },
        {
          id: "1",
          title: "First Contact",
          uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
          status: "ocupado",
          is_friend: false,
        },
        {
          id: "2",
          title: "Second Contact",
          uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
          status: "disponible",
          is_friend: true,
        },
        {
          id: "3",
          title: "Third Contact",
          uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
          status: "ocupado",
          is_friend: true,
        },
        {
          id: "11",
          title: "Third Contact",
          uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
          status: "disponible",
          is_friend: false,
        },
        {
          id: "10",
          title: "Third Contact",
          uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
          status: "ocupado",
          is_friend: false,
        },
      ]

    const[userData, setUserData] = useState(data);

    return (
        <VStack paddingX={4} paddingTop={12} flex={1} justifyContent="flex-start" >
            <NavBar title="Tus Amigos" avatar_uri="https://i.imgur.com/pzESYyI.jpeg" />
            <SearchBar data={data} setData={setUserData}/>
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
                <FriendsList data={userData}/>
            </VStack>
        </VStack>
    );
}