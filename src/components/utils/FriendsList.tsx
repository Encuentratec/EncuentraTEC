import React from "react"
import { VStack, Text, HStack, Avatar, List, View, AddIcon, IconButton, Icon } from "native-base"
import { VirtualizedList } from "react-native"
import { UserPreview } from "../../screens/Home"


export const FriendsListComponent = (props: {
  data: UserPreview[], userId: string
}) => {
  const ListItem = ({ given_name, family_name, avatar_uri, status, is_friend, location }: { given_name: string; family_name: string; avatar_uri: string; status: string; is_friend: boolean, location: string }) => (
    <List.Item borderBottomColor="#e7e5e4" borderBottomWidth="1px" >
      <VStack justifyContent="center" width="100%" >
        <HStack justifyContent="space-between" alignItems="center">
          <HStack>
            <Avatar size="md" source={{ uri: avatar_uri }} marginRight={4}>
              <Avatar.Badge bg={status == "available" ? "green.600" : "red.600"} />
            </Avatar>
            <VStack>
              <Text fontSize="md" fontWeight="bold">{given_name + " " + family_name}</Text>
              <Text fontSize="sm">en {location}</Text>
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
    const user_a_data = _data[index].user_a;
    return ({
      id: user_a_data.id,
      given_name: user_a_data.given_name,
      avatar_uri: user_a_data.picture_url ?? "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
      status: user_a_data.status,
      is_friend: _data[index].user_b.id == props.userId,
      location: user_a_data.custom_location ?? "Casa",
      family_name: user_a_data.family_name ?? "",
    })
  }

  const getItemCount = (_data: any) => _data.length;

  const filteredData = props.data.filter((friend: any) => {
    return friend["user_a"].id != props.userId
  });

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
        data={filteredData}
        initialNumToRender={filteredData.length}
        renderItem={({ item }) => <ListItem given_name={item.given_name} family_name={item.family_name} avatar_uri={item.avatar_uri} status={item.status} is_friend={item.is_friend} location={item.location} />}
        getItemCount={getItemCount}
        getItem={getItem}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

export default FriendsListComponent;
