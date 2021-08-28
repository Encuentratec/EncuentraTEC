import React from "react";
import { MainStackParamList } from "../types/navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { supabase } from "../initSupabase";
import { NativeBaseProvider, Heading, Container, Avatar, HamburgerIcon, ScrollView, HStack } from "native-base"
import  SearchBar from "../components/utils/SearchBar";
import  FriendsList from "../components/utils/FriendsList";

import {
  useTheme
} from "react-native-rapi-ui";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "MainTabs">) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <NativeBaseProvider
    >
      <ScrollView 
        paddingX={4}
        paddingTop={12}
      >
        {/* Navbar */}
        <Container
          flexDirection={"row"}
          alignItems={"center"}
          alignContent={"space-between"}
        >
          <Heading
            alignSelf={{
              base: "flex-start",
              md: "flex-start",
            }}
          >
            Tus Amigos
          </Heading>
          <Avatar
            marginLeft={24}
            source={{
              uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
            }}
          >
            SS
          </Avatar>
          <HamburgerIcon 
          marginLeft={4}
          />
        </Container>
        {/* ScrollView */}
        <ScrollView>
          
        </ScrollView>
        {/* SearchBar */}
        <SearchBar></SearchBar>
        {/* Favorites Section */}
        <Container paddingBottom={8}>
          <Heading
            alignSelf={{
              base: "flex-start",
              md: "flex-start",
            }}
            marginBottom={4}
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
            </Avatar>
            <Avatar
              source={{
                uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
              }}
            >
              GG
            </Avatar>
            <Avatar
              source={{
                uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
              }}
            >
              RS
            </Avatar>
            <Avatar
              source={{
                uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
              }}
            >
              AK
            </Avatar>
          </HStack>
        </Container> 
        {/* Friends List */}
        <FriendsList></FriendsList>
      </ScrollView>
    </NativeBaseProvider>
  );
}