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
import { definitions } from "../types/supabase";
import { supabase } from "../initSupabase";
import useUser from "../hooks/useUser";
import { useEffect } from "react";
import { useMemo } from "react";

export type UserPreview = definitions['user'] & {
    friend: definitions['user_connection'];
}

export default function ({ navigation }: StackScreenProps<MainStackParamList, "MainTabs">) {
    const { data: userData } = useUser({});

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

    const [friendsData, setFriendsData] = useState(data);

    const getFriendsData = () => {
        return supabase.from<UserPreview>('user_connection')
            .select('*, user_a:user_id_a(*), user_b:user_id_b(id) ')
    }

    const [resultingData, setResultingData] = useState<UserPreview[]>();

    useMemo(() => {
        getFriendsData().then((data) => {
            setResultingData(data.data ?? []);
        });
    }, [])

    return (
        <VStack paddingX={4} paddingTop={12} flex={1} justifyContent="flex-start" >
            <NavBar title="Tus Amigos" avatar_uri="https://i.imgur.com/pzESYyI.jpeg" />
            <SearchBar data={resultingData} setData={setResultingData} />
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
                    {resultingData?.filter((friend: any) => {
                        return friend["user_b"].id == userData?.id ?? "";
                    }).map((friend: any) => {
                        const friend_data = friend["user_a"];

                        return (
                            <Avatar
                                source={{
                                    uri: friend_data.picture_url,
                                }}
                            >
                                SS
                                <Avatar.Badge bg={friend_data.status == "available" ? "green.600" : "red.600"} />
                            </Avatar>
                        )
                    })
                    }
                </HStack>
            </VStack>
            <VStack marginTop={4}>
                {resultingData &&
                    <FriendsList data={resultingData} userId={userData?.id ?? ""} />
                }
            </VStack>
        </VStack>
    );
}