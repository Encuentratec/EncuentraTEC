import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box } from "native-base";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


function SearchBar() {
  return (
    <VStack paddingTop={4}>
      <Input
        placeholder="Search"
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