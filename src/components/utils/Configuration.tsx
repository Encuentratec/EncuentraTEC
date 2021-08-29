import {
    Button,
    HStack,
    Switch,
    VStack,
    Text,
    Actionsheet,
    useDisclose,
} from 'native-base';
import React, { useState } from 'react';
import useUser from '../../hooks/useUser';
import { supabase } from '../../initSupabase';
import { User } from '../../types/supabaseMapped';

const Configuration = () => {
    const { data } = useUser({});
    const { isOpen, onOpen, onClose } = useDisclose();
    const [location, setLocation] = useState('TEC');
    const [currentStatus, setStatus] = useState(data?.status ?? 'available');

    const updateLocation = (loc: string) => {
        setLocation(loc);
        onClose();
    };

    const updateStatus = async () => {
        if (currentStatus == 'available') {
            setStatus('busy');
        } else {
            setStatus('available');
        }

        const { data: userData, error } = await supabase
            .from<User>('user')
            .update({
                status: currentStatus == 'available' ? 'busy' : 'available',
            })
            .eq('id', data?.id);
        if (error) {
            console.error(error);
            alert(
                'Algo salió mal al actualizar tu estatus, vuelve a intentar más tarde.'
            );
        } else {
            console.log(userData);
        }
    };

    return (
        <>
            <VStack space={4} justifyContent="flex-start">
                <VStack>
                    <Text fontWeight="bold" alignSelf="center">
                        {(data?.given_name ?? '') +
                            ' ' +
                            (data?.family_name ?? '')}
                    </Text>
                    <Text fontStyle="italic" fontSize="sm" alignSelf="center">
                        en {location}
                    </Text>
                </VStack>
                <HStack alignItems="center" space={8}>
                    <Text>Disponible</Text>
                    <Switch
                        isChecked={currentStatus == 'available' ? true : false}
                        onToggle={updateStatus}
                    />
                </HStack>
                <Button variant="outline" onPress={onOpen}>
                    Ubicación
                </Button>
                <Button variant="outline">Cambiar foto</Button>
            </VStack>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Actionsheet.Item
                        onPress={() => {
                            updateLocation('TEC');
                        }}
                    >
                        TEC
                    </Actionsheet.Item>
                    <Actionsheet.Item
                        onPress={() => {
                            updateLocation('Biblioteca');
                        }}
                    >
                        Biblioteca
                    </Actionsheet.Item>
                    <Actionsheet.Item
                        onPress={() => {
                            updateLocation('Casa');
                        }}
                    >
                        Casa
                    </Actionsheet.Item>
                    <Actionsheet.Item
                        onPress={() => {
                            updateLocation('Centrales');
                        }}
                    >
                        Centrales
                    </Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    );
};

export default Configuration;
