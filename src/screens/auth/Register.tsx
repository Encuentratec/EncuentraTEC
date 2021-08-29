import React, { useState } from 'react';
import {
    ScrollView,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Image,
} from 'react-native';
import { supabase } from '../../initSupabase';
import { AuthStackParamList } from '../../types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import {
    Layout,
    Text,
    TextInput,
    Button,
    useTheme,
    themeColor,
} from 'react-native-rapi-ui';
import { useDispatch } from 'react-redux';
import { User } from '../../types/supabaseMapped';

export default function ({
    navigation,
}: StackScreenProps<AuthStackParamList, 'Register'>) {
    const { isDarkmode, setTheme } = useTheme();
    const [email, setEmail] = useState<string>('');
    const [familyName, setFamilyName] = useState<string>('');
    const [givenName, setGivenName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    async function createUserRecord({
        email,
        familyName,
        givenName,
        uid,
    }: {
        email: string;
        familyName: string;
        givenName: string;
        uid: string;
    }) {
        const { data, error } = await supabase.from<User>('user').insert({
            auth_uid: uid,
            email: email,
            family_name: familyName,
            given_name: givenName,
            role: 'student',
        });
        if (error) {
            setLoading(false);
            alert('Algo salió mal al crear tu cuenta. Intenta de nuevo.');
        }
    }
    async function register() {
        setLoading(true);
        const res = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        console.log('DATA', res);
        const { user, error } = res;
        if (!error && !user) {
            setLoading(false);
            alert('Check your email for the login link!');
        }
        if (error) {
            setLoading(false);
            alert(error.message);
        } else if (user) {
            createUserRecord({ email, familyName, givenName, uid: user.id });
        }
    }

    return (
        <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
            <Layout>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: isDarkmode
                                ? '#17171E'
                                : themeColor.white100,
                        }}
                    >
                        <Image
                            resizeMode="contain"
                            style={{
                                height: 220,
                                width: 220,
                            }}
                            source={require('../../../assets/images/register.png')}
                        />
                    </View>
                    <View
                        style={{
                            flex: 3,
                            paddingHorizontal: 20,
                            paddingBottom: 20,
                            backgroundColor: isDarkmode
                                ? themeColor.dark
                                : themeColor.white,
                        }}
                    >
                        <Text
                            fontWeight="bold"
                            size="h3"
                            style={{
                                alignSelf: 'center',
                                padding: 30,
                            }}
                        >
                            Registrate
                        </Text>
                        <Text>Nombre</Text>
                        <TextInput
                            editable={loading}
                            containerStyle={{ marginTop: 15 }}
                            placeholder="Nombre"
                            value={givenName}
                            autoCapitalize="words"
                            autoCompleteType="off"
                            autoCorrect={false}
                            onChangeText={setGivenName}
                        />
                        <Text>Apellido</Text>
                        <TextInput
                            editable={loading}
                            containerStyle={{ marginTop: 15 }}
                            placeholder="Nombre"
                            value={familyName}
                            autoCapitalize="words"
                            autoCompleteType="off"
                            autoCorrect={false}
                            onChangeText={setFamilyName}
                        />
                        <Text>Correo</Text>
                        <TextInput
                            editable={loading}
                            containerStyle={{ marginTop: 15 }}
                            placeholder="Correo"
                            value={email}
                            autoCapitalize="none"
                            autoCompleteType="off"
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={(text) => setEmail(text)}
                        />
                        <Text style={{ marginTop: 15 }}>Contraseña</Text>
                        <TextInput
                            editable={loading}
                            containerStyle={{ marginTop: 15 }}
                            placeholder="Contraseña"
                            value={password}
                            autoCapitalize="none"
                            autoCompleteType="off"
                            autoCorrect={false}
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Button
                            text={loading ? 'Cargando' : 'Crea una cuenta'}
                            onPress={() => {
                                register();
                            }}
                            style={{
                                marginTop: 20,
                            }}
                            disabled={loading}
                        />

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 15,
                                justifyContent: 'center',
                            }}
                        >
                            <Text size="md">¿Ya tienes una cuenta?</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Login');
                                }}
                            >
                                <Text
                                    size="md"
                                    fontWeight="bold"
                                    style={{
                                        marginLeft: 5,
                                    }}
                                >
                                    Inicia Sesión
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 30,
                                justifyContent: 'center',
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    isDarkmode
                                        ? setTheme('light')
                                        : setTheme('dark');
                                }}
                            >
                                <Text
                                    size="md"
                                    fontWeight="bold"
                                    style={{
                                        marginLeft: 5,
                                    }}
                                >
                                    {isDarkmode
                                        ? '☀️ light theme'
                                        : '🌑 dark theme'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Layout>
        </KeyboardAvoidingView>
    );
}
