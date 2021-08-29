import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Keyboard, View } from 'react-native';
import {
    NativeBaseProvider,
    VStack,
    Fab,
    Icon,
    Modal,
    Button,
    Text,
    Switch,
    HStack,
    Input,
    Select,
} from 'native-base';
import NavBar from '../components/utils/NavBar';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNSchedule from 'rnschedule';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MultiSelect from 'react-native-multiple-select';
import createEvent from "../handlers/events"
import useUser from "../hooks/useUser";

const data = [
    {
        title: 'Lunch Appointment',
        subtitle: 'With Harry',
        start: new Date(2021, 7, 29, 10),
        end: new Date(2021, 7, 29, 11),
        color: 'blue',
    },
];

export default function ({ navigation }) {
    const [showModal, setShowModal] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [repeats, setRepeats] = useState(false);
    const [frequency, setFrequency] = useState('daily');
    const [interval, setInterval] = useState(1);
    const [weekReps, setWeekReps] = useState([]);
    const weekdays = [
        { id: 'monday', name: 'lunes' },
        { id: 'tuesday', name: 'martes' },
        { id: 'wednesday', name: 'miercoles' },
        { id: 'thursday', name: 'jueves' },
        { id: 'friday', name: 'viernes' },
        { id: 'saturday', name: 'sabado' },
        { id: 'sunday', name: 'domingo' },
    ];

    const onChange1 = (event, selectedDate) => {
        if (mode == 'date') {
            const currentDate = selectedDate || date1;
            setShow1(false);
            setDate1(currentDate);
            setMode('time');
            setShow1(true);
        } else if (mode == 'time') {
            const currentTime = selectedDate || date1;
            const currentDate = date1;
            date1.setHours(currentTime.getHours());
            date1.setMinutes(currentTime.getMinutes());
            setShow1(false);
            setMode('date');
            setDate1(currentDate);
            console.log(date1);
        }
    };
    const onChange2 = (event, selectedDate) => {
        if (mode == 'date') {
            const currentDate = selectedDate || date2;
            setShow2(false);
            setDate2(currentDate);
            setMode('time');
            setShow2(true);
        } else if (mode == 'time') {
            const currentTime = selectedDate || date2;
            const currentDate = date2;
            date2.setHours(currentTime.getHours());
            date2.setMinutes(currentTime.getMinutes());
            setDate2(currentDate);
            setShow2(false);
            setMode('date');
            console.log(date2);
        }
    };
  
    const {data:user,loading} = useUser({});
    if(loading){
      return null;
    }

    return (
        <>
            <VStack
                paddingX={4}
                paddingTop={12}
                flex={1}
                justifyContent="flex-start"
            >
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
                icon={
                    <Icon
                        color="white"
                        as={<AntDesign name="plus" />}
                        size="sm"
                    />
                }
                onPress={() => setShowModal(true)}
            />

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Crea un evento</Modal.Header>
                    {/* <>Inicio</>
                    <Button onPress={() => setShow1(true)}>
                    {date1.toString()}
                    </Button>
                    <>Final</>
                    <Button onPress={() => setShow2(true)}>
                    {date2.toString()}
                  </Button> */}
                    <VStack space={4}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <VStack>
                                <Text>Inicio</Text>
                                <DateTimePicker
                                    testID="dateTimePicker1"
                                    value={date1}
                                    mode={'datetime'}
                                    // is24Hour={true}
                                    display="default"
                                    onChange={onChange1}
                                />
                            </VStack>
                            <VStack>
                                <Text>Fin</Text>
                                <DateTimePicker
                                    testID="dateTimePicker2"
                                    value={date2}
                                    mode={'datetime'}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange2}
                                />
                            </VStack>
                        </TouchableWithoutFeedback>
                        <VStack space={8}>
                            <HStack alignItems="center" space={4}>
                                <Text>Se repite?</Text>
                                <Switch
                                    isChecked={repeats}
                                    onToggle={() => setRepeats(!repeats)}
                                />
                            </HStack>
                            {repeats && (
                                <VStack space={2}>
                                    <Text>Repetición</Text>
                                    <HStack space={2} alignItems="center">
                                        <Text>Cada</Text>
                                        <Input
                                            defaultValue={1}
                                            value={interval}
                                            onChange={setInterval}
                                            minW={50}
                                            keyboardType="numeric"
                                        />
                                        <Select
                                            selectedValue={frequency}
                                            minWidth={200}
                                            accessibilityLabel="Frecuencia"
                                            placeholder="Frecuencia"
                                            onValueChange={setFrequency}
                                            _selectedItem={{
                                                bg: 'cyan.600',
                                                // endIcon: <CheckIcon size={4} />,
                                            }}
                                        >
                                            <Select.Item
                                                label="dia(s)"
                                                value="daily"
                                            />
                                            <Select.Item
                                                label="semana(s)"
                                                value="weekly"
                                            />
                                        </Select>
                                    </HStack>
                                    {frequency == 'weekly' && (
                                        <MultiSelect
                                            hideTags
                                            items={weekdays}
                                            uniqueKey="id"
                                            onSelectedItemsChange={setWeekReps}
                                            selectedItems={weekReps}
                                            selectText="Dias de la semana"
                                            // searchInputPlaceholderText="Search Items..."
                                            // onChangeInput={(text) =>
                                            //     console.log(text)
                                            // }
                                            // altFontFamily="ProximaNova-Light"
                                            // tagRemoveIconColor="#CCC"
                                            // tagBorderColor="#CCC"
                                            // tagTextColor="#CCC"
                                            // selectedItemTextColor="#CCC"
                                            // selectedItemIconColor="#CCC"
                                            // itemTextColor="#000"
                                            // displayKey="name"
                                            // searchInputStyle={{ color: '#CCC' }}
                                            // submitButtonColor="#CCC"
                                            // submitButtonText="Submit"
                                        />
                                    )}
                                </VStack>
                            )}
                        </VStack>
                    </VStack>
                    <Modal.Footer>
                        <Button.Group variant="ghost" space={2}>
                            <Button
                                onPress={() => {
                                    setShowModal(false);
                                    createEvent();
                                }}
                            >
                                Aceptar
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    );
}
