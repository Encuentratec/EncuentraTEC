import React from "react"
import {VStack, Text, HStack, Avatar, List, View } from "native-base"
import { VirtualizedList } from "react-native"

  const data = [
    {
      id: "6",
      title: "First Contact",
      uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
      status: "ocupado",
    },
    {
      id: "5",
      title: "Second Contact",
      uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
      status: "disponible",
    },
    {
      id: "4",
      title: "Third Contact",
      uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
      status: "disponible",
    },
    {
      id: "1",
      title: "First Contact",
      uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
      status: "ocupado",
    },
    {
      id: "2",
      title: "Second Contact",
      uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
      status: "disponible",
    },
    {
      id: "3",
      title: "Third Contact",
      uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
      status: "ocupado",
    },
    {
      id: "11",
      title: "Third Contact",
      uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
      status: "disponible",
    },
    {
      id: "10",
      title: "Third Contact",
      uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
      status: "ocupado",
    },
  ]

const ListItem = ({ title, avatar_uri, status }: { title: string; avatar_uri: string, status: string }) => (
    <List.Item borderBottomColor="#e7e5e4" borderBottomWidth="1px" >
      <VStack justifyContent="center" width="100%" >
          <HStack>
            <Avatar size="md" source={{ uri: avatar_uri }} marginRight={4}>        
              <Avatar.Badge bg={status == "disponible" ? "green.600" : "red.600" } />
            </Avatar>
              <VStack>
                <Text fontSize="md" fontWeight="bold">{title}</Text>
                <Text fontSize="sm">{title}</Text>
              </VStack>
          </HStack>
      </VStack>
  </List.Item>
)

const getItem = (_data: any, index: number) => ({
  id: _data[index].id,
  title: _data[index].title,
  avatar_uri: _data[index].uri,
  status: _data[index].status,
})

const getItemCount = (_data: any) => _data.length;

export const FriendsListComponent = () => {
  return (
    <>
    <View
      style={{
        borderBottomColor: "#e7e5e4",
        borderBottomWidth: 1,
        width: "120%",
        marginLeft: -20,
      }}
    ></View>
    <VirtualizedList
      data={data}
      initialNumToRender={data.length}
      renderItem={({ item }) => <ListItem title={item.title} avatar_uri={item.avatar_uri} status={item.status} />}
      getItemCount={getItemCount}
      getItem={getItem}
      keyExtractor={(item) => item.id}
    />
    </>
  )
}

export default FriendsListComponent;
