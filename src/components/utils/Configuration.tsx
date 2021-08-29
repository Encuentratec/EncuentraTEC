import { Button, HStack, Switch, VStack, Text, Actionsheet, useDisclose } from "native-base"
import React, { useState } from "react"

const Configuration = () => {
    const { isOpen, onOpen, onClose } = useDisclose()
    const [location, setLocation] = useState("TEC");

    const updateLocation = (loc: string) => {
        setLocation(loc);
        onClose();
    }

    return (
        <>
            <VStack space={4} justifyContent="flex-start">
                <VStack>
                    <Text fontWeight="bold" alignSelf="center">Diego Ramirez</Text>
                    <Text fontStyle="italic" fontSize="sm" alignSelf="center">en {location}</Text>
                </VStack>
                <HStack alignItems="center" space={8}>
                    <Text>Disponible</Text>
                    <Switch />
                </HStack>
                <Button variant="outline" onPress={onOpen}>Ubicación</Button>
                <Button variant="outline">Cambiar foto</Button>

            </VStack>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Actionsheet.Item onPress={() => {updateLocation("TEC")}}>TEC</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => {updateLocation("Biblioteca")}}>Biblioteca</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => {updateLocation("Casa")}}>Casa</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => {updateLocation("Centrales")}}>Centrales</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    )
}

export default Configuration;