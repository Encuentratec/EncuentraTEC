import {
    Avatar,
    Button,
    HamburgerIcon,
    Heading,
    HStack,
    Popover,
    Pressable,
    Switch,
    VStack,
    Text,
    Select,
} from 'native-base';
import React from 'react';
import { useState } from 'react';
import useUser from '../../hooks/useUser';
import Loading from '../../screens/utils/Loading';
import Configuration from './Configuration';

const NavBar = (props: { title: string; avatar_uri?: string }) => {
    const [userStatus, setUserStatus] = useState('disponible');
    const { data, loading } = useUser({});

    console.log('DATA', data);

    if (loading) return <Loading />;

    return (
        <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Heading>{props.title}</Heading>
            {props.avatar_uri && (
                <HStack alignItems={'center'} alignContent={'flex-end'}>
                    <Pressable
                        onPress={() => {
                            userStatus == 'disponible'
                                ? setUserStatus('ocupado')
                                : setUserStatus('disponible');
                        }}
                    >
                        <Avatar
                            marginLeft={23}
                            source={{ uri: props.avatar_uri }}
                        >
                            SS
                            <Avatar.Badge
                                bg={
                                    userStatus == 'disponible'
                                        ? 'green.600'
                                        : 'red.600'
                                }
                            />
                        </Avatar>
                    </Pressable>
                    <Popover
                        trigger={(triggerProps) => {
                            return (
                                <Pressable {...triggerProps}>
                                    <HamburgerIcon marginLeft={4} />
                                </Pressable>
                            );
                        }}
                    >
                        <Popover.Content
                            accessibilityLabel="profile configuration"
                            borderRadius={'xl'}
                        >
                            <Popover.Arrow />
                            <Popover.Header>Configuraci??n</Popover.Header>
                            <Popover.Body>
                                <Configuration />
                            </Popover.Body>
                        </Popover.Content>
                    </Popover>
                </HStack>
            )}
        </HStack>
    );
};

export default NavBar;
