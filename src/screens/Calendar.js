import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { NativeBaseProvider, VStack, Fab, Icon, Modal, Button } from "native-base";
import NavBar from "../components/utils/NavBar";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNSchedule from "rnschedule";
import createEvent from "../handlers/events"
import useUser from "../hooks/useUser";

const data = [
  {
    title: "Lunch Appointment",
    subtitle: "With Harry",
    start: new Date(2021, 7, 29, 10),
    end: new Date(2021, 7, 29, 11),
    color: "blue",
  },
];

export default function ({ navigation }) {
  const [showModal,setShowModal] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [mode, setMode] = useState("date");
  const onChange1 = (event, selectedDate) => {
    if (mode == "date") {
      const currentDate = selectedDate || date1;
      setShow1(false);
      setDate1(currentDate);
      setMode("time");
      setShow1(true);
    } else if (mode == "time") {
      const currentTime = selectedDate || date1;
      const currentDate = date1;
      date1.setHours(currentTime.getHours());
      date1.setMinutes(currentTime.getMinutes());
      setShow1(false);
      setMode("date");
      setDate1(currentDate);
      console.log(date1)
    }
  };
  const onChange2 = (event, selectedDate) => {
    if (mode == "date") {
      const currentDate = selectedDate || date2;
      setShow2(false);
      setDate2(currentDate);
      setMode("time");
      setShow2(true);
    } else if (mode == "time") {
      const currentTime = selectedDate || date2;
      const currentDate = date2;
      date2.setHours(currentTime.getHours());
      date2.setMinutes(currentTime.getMinutes());
      setDate2(currentDate);
      setShow2(false);
      setMode("date");
      console.log(date2)
    }
  };

  const {data:user,loading} = useUser({});
  if(loading){
    return null;
  }

  return (
    <NativeBaseProvider>
      <VStack paddingX={4} paddingTop={12} flex={1} justifyContent="flex-start">
        <NavBar
          title="Tus Eventos"
          avatar_uri="https://pbs.twimg.com/profile_images/1188747996843761700/8CiUdKZW_400x400.jpg"
        />
        <RNSchedule
          dataArray={data}
          onEventPress={(appt) => {
            console.log(appt);
            console.log(new Date(2021, 8, 29, 11));
          }}
        />
      </VStack>
      <Fab
        position="absolute"
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        onPress={() => setShowModal(true)}
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Modal Title</Modal.Header>
          <>
          Inicio
          </>
          <Button onPress={()=>setShow1(true)}>{date1.toLocaleString("es-MX")}</Button>
          <>
          Final
          </>
          <Button onPress={()=>setShow2(true)}>{date2.toLocaleString("es-MX")}</Button>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button
                onPress={() => {
                  setShowModal(false);
                  console.log(user)
                  /*createEvent({
                    name: "Name",
                    description: "description",
                    start_date: date1.toLocaleString("en-US"),
                    end_date: date2.toLocaleString("en-US"),
                    color: "blue",
                    user_id: user}
                  )*/
                  data.push(
                    {
                      title: "Name",
                      subtitle: "Description",
                      start: date1,
                      end: date2,
                      color: "blue",
                    }

                  )
                }}
              >
                Aceptar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <View>
        {show1 && (
          <DateTimePicker
            testID="dateTimePicker2"
            value={date1}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange1}
          />
        )}
        {show2 && (
          <DateTimePicker
            testID="dateTimePicker2"
            value={date2}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange2}
          />
        )}
      </View>
    </NativeBaseProvider>
  );
}
