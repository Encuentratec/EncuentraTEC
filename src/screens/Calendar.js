import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { AntDesign } from "@expo/vector-icons"
import {
  NativeBaseProvider,
  VStack,
  Fab,
  Icon,
  Modal,
} from "native-base"
import SearchBar from "../components/utils/SearchBar";
import { MainStackParamList } from '../types/navigation';
import NavBar from "../components/utils/NavBar";
import {useState} from 'react';
import RNSchedule from 'rnschedule';
const data = [
  {
    title: 'Lunch Appointment',
    subtitle: 'With Harry',
    start: new Date(2021,7,28,10),
    end: new Date(2021,7,28,11),
    color: '#390099'
  }
]


export default function ({
    navigation,
  }) {
    const [showModal, setShowModal] = useState(false)
    return (
      <NativeBaseProvider>
      <VStack paddingX={4} paddingTop={12} flex={1} justifyContent="flex-start">
      <NavBar title="Tus Eventos" avatar_uri="https://pbs.twimg.com/profile_images/1188747996843761700/8CiUdKZW_400x400.jpg" />
      <RNSchedule
        dataArray={data}
        onEventPress={(appt) => {
          console.log(appt)
          console.log(new Date(2021, 8, 29, 11))
        }
        }
      />
      </VStack>
      <Fab
          position="absolute"
          size="sm"
          icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
          onPress={()=>setShowModal(true)}
        />
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            Que onda que pex
          </Modal.Body>
        </Modal.Content>
      </Modal>
      </NativeBaseProvider>
  );
}
