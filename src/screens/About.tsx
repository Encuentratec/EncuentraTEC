import React from 'react';
import { View } from 'react-native';
import { MainStackParamList } from '../types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { Layout, Text } from 'react-native-rapi-ui';
import useUser from '../hooks/useUser';
import useEvents from '../hooks/useEvents';
import { Button } from 'native-base';
import { createEvent, createRecurrentEvent } from '../handlers/events';

const TestEv = ({ uid }: { uid: string }) => {
    useEvents({
        uids: [uid],
    });
};

export default function ({
    navigation,
}: StackScreenProps<MainStackParamList, 'MainTabs'>) {
    const { data } = useUser({});

    const createEv = () => {
        const curr = new Date();
        const last = new Date();
        last.setMinutes(curr.getMinutes() + 30);

        data &&
            createEvent({
                color: '#ff0000',
                name: 'Test Event',
                description: 'An event',
                start_date: curr.toISOString(),
                end_date: last.toISOString(),
                user_id: data.id,
            })
                .then((ret) => {
                    console.log('RESULT EV', ret);
                })
                .catch((ret) => {
                    console.log('RESULT EV ERR', ret);
                });
    };

    const createRecurrentEv = () => {
        const curr = new Date();
        const last = new Date();
        last.setMinutes(curr.getMinutes() + 30);

        data &&
            createRecurrentEvent(
                {
                    color: '#ff0000',
                    name: 'Test Recurrent Event',
                    description: 'An event',
                    start_date: curr.toISOString(),
                    end_date: last.toISOString(),
                    user_id: data.id,
                },
                {
                    start_date: curr.toISOString(),
                    end_date: last.toISOString(),
                    interval: 5,
                    frequency: 'daily',
                    weekdays: [],
                }
            )
                .then((ret) => {
                    console.log('RESULT RECURR', ret);
                })
                .catch((ret) => {
                    console.log('RESULT RECURR ERR', ret);
                });
    };
    return (
        <Layout>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button onPress={createEv}>Test Create Event</Button>
                <Button onPress={createRecurrentEv}>
                    Test Create Recurr Event
                </Button>
            </View>
        </Layout>
    );
}
