import React, { useState } from "react";
import { VStack, Input, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';


function SearchBar(props: { data: any, setData: React.Dispatch<React.SetStateAction<any>> }) {
  const [searchTerm, setSearchTerm] = useState("");

  const checkName = (name: string, str: string) => {
    var pattern = str.split("").map((x) => {
      return `(?=.*${x})`
    }).join("");
    var regex = new RegExp(`${pattern}`, "g")
    return name.match(regex);
  }

  return (
    <VStack paddingTop={4}>
      <Input
        placeholder="Search"
        value={searchTerm}
        onChangeText={(value) => {
          setSearchTerm(value);
          props.setData(props.data.filter((friend: { title: string; }) => {
            const friends_name_first_letters = friend.title.substring(0, 3).toLowerCase()

            return value == "Search" ? true : (friend.title.toLowerCase().includes(value) || checkName(friends_name_first_letters, value));
          }));
        }}
        variant="filled"
        width="100%"
        bg="gray.200"
        borderRadius={10}
        py={1}
        px={2}
        _web={{
          _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
        }}
        paddingY={2}
        InputLeftElement={<Icon size='sm' ml={2} color="gray.400" as={<Ionicons name="ios-search" />} />
        }
      />
    </VStack>
  )
}

export default SearchBar;