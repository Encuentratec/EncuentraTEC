import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { NativeBaseProvider, VStack, Fab, Icon, Modal } from "native-base";
import NavBar from "../components/utils/NavBar";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNSchedule from "rnschedule";

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
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const onChange = (event, selectedDate) => {
    if (mode == "date") {
      const currentDate = selectedDate || date;
      setShowModal(false);
      setDate(currentDate);
      setMode("time");
      setShowModal(true);
    } else if (mode == "time") {
      const currentTime = selectedDate || date;
      const currentDate = date;
      date.setHours(currentTime.getHours());
      date.setMinutes(currentTime.getMinutes());
      setDate(currentDate);
      setShowModal(false);
      setMode("date");
    }
  };

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
      <View>
        {showModal && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </NativeBaseProvider>
  );
}
