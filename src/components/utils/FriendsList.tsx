import React from "react"
import { VStack, Text, HStack, Avatar, List, View, Icon, AddIcon, Button, IconButton } from "native-base"
import { VirtualizedList } from "react-native"

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

const ListItem = ({ title, avatar_uri, status, is_friend }: { title: string; avatar_uri: string; status: string; is_friend: boolean }) => (
  <List.Item borderBottomColor="#e7e5e4" borderBottomWidth="1px" >
    <VStack justifyContent="center" width="100%" >
      <HStack justifyContent="space-between" alignItems="center">
        <HStack>
          <Avatar size="md" source={{ uri: avatar_uri }} marginRight={4}>
            <Avatar.Badge bg={status == "disponible" ? "green.600" : "red.600"} />
          </Avatar>
          <VStack>
            <Text fontSize="md" fontWeight="bold">{title}</Text>
            <Text fontSize="sm">{title}</Text>
          </VStack>
        </HStack>
        {!is_friend &&
          <IconButton icon={<AddIcon size="xs" />} variant="outline" borderColor="gray.300"></ IconButton>
        }
      </HStack>
    </VStack>
  </List.Item>
)

const getItem = (_data: any, index: number) => ({
  id: _data[index].id,
  title: _data[index].title,
  avatar_uri: _data[index].uri,
  status: _data[index].status,
  is_friend: _data[index].is_friend,
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
        renderItem={({ item }) => <ListItem title={item.title} avatar_uri={item.avatar_uri} status={item.status} is_friend={item.is_friend} />}
        getItemCount={getItemCount}
        getItem={getItem}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

export default FriendsListComponent;
