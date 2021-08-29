import React from "react"
import {VStack, NativeBaseProvider, Container, Text, HStack, Avatar } from "native-base"
export const Example = (props) => {
const data = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Contact",
        uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Contact",
        uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
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
    ]
  return (
    <Container paddingY={4} borderTopWidth={"1px"} borderTopColor="black" width={"100%"}>
        <HStack>
        <Avatar source={ props.item.uri } marginRight={4}></Avatar>
        <Container>
            <VStack>
            <Text fontSize="lg" fontWeight="bold">{props.item.title}</Text>
            <Text fontSize="md">{ props.item.title}</Text>
            </VStack>
        </Container>
        </HStack>
    </Container>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
        <Example />
    </NativeBaseProvider>
  )
}