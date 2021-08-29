import React from "react"
import {VStack, Text, HStack, Avatar, List, Center } from "native-base"
import { VirtualizedList } from "react-native"

  const data = [
    {
      id: "6",
      title: "First Contact",
      uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg"
    },
    {
      id: "5",
      title: "Second Contact",
      uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg"
    },
    {
      id: "4",
      title: "Third Contact",
      uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg"
    },
    {
      id: "1",
      title: "First Contact",
      uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg"
    },
    {
      id: "2",
      title: "Second Contact",
      uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg"
    },
    {
      id: "3",
      title: "Third Contact",
      uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg"
    },
    {
      id: "11",
      title: "Third Contact",
      uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg"
    },
    {
      id: "10",
      title: "Third Contact",
      uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg"
    },
  ]

const ListItem = ({ title, avatar_uri }: { title: string; avatar_uri: string }) => (
    <List.Item >
      <VStack {...styles["list_item"]} width="100%">
          <HStack>
            <Avatar size="md" source={{ uri: avatar_uri }} marginRight={4}>        
              <Avatar.Badge bg={"red.600"} />
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
})

const getItemCount = (_data: any) => _data.length;

export const FriendsListComponent = () => {
  return (
    <VirtualizedList
      data={data}
      initialNumToRender={data.length}
      renderItem={({ item }) => <ListItem title={item.title} avatar_uri={item.avatar_uri} />}
      getItemCount={getItemCount}
      getItem={getItem}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = {
  list_item: {
    paddingTop: 3,
    borderTopWidth: "1px",
    borderTopColor: "gray.200",
    justifyContent: "center",
    // borderBottomWidth: "1px",
    // borderBottomColor: "gray.200",
  }
}
export default FriendsListComponent;
