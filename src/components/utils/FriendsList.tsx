import React from "react"
import { VStack, Text, HStack, Avatar, List, View, AddIcon, IconButton } from "native-base"
import { VirtualizedList } from "react-native"


export const FriendsListComponent = (props: {
  data: {
    id: string;
    title: string;
    uri: string;
    status: string;
    is_friend: boolean;
  }[]
}) => {
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

  const getItem = (_data: any, index: number) => {
    return ({
      id: _data[index].id,
      title: _data[index].title,
      avatar_uri: _data[index].uri,
      status: _data[index].status,
      is_friend: _data[index].is_friend,
    })
  }

  const getItemCount = (_data: any) => _data.length;

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
        data={props.data}
        initialNumToRender={props.data.length}
        renderItem={({ item }) => <ListItem title={item.title} avatar_uri={item.avatar_uri} status={item.status} is_friend={item.is_friend} />}
        getItemCount={getItemCount}
        getItem={getItem}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

export default FriendsListComponent;
