import React from 'react';
import { MainStackParamList } from '../types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { Avatar, Center, Divider, Heading, VStack } from 'native-base';
import useUser from '../hooks/useUser';

export default function ({
    navigation,
}: StackScreenProps<MainStackParamList, 'MainTabs'>) {
    const { data } = useUser();

	return (
        <VStack paddingX={4} paddingTop={12} flex={1}>
            <Center marginY={4}>
                <Avatar source={{ uri: data?.picture_url }} >
                    {`${data?.given_name.charAt(0)}${data?.family_name.charAt(0)}`}
                </Avatar>
                <Heading size="lg">
                    {data?.given_name} {data?.family_name}
                </Heading>
            </Center>
            <Divider />
        </VStack>
    );
}
