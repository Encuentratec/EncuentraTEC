import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { ThemeProvider } from 'react-native-rapi-ui';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import { AuthProvider } from './src/provider/AuthProvider';
import storeConfig from './src/redux/store';
import 'react-native-url-polyfill/auto';
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = storeConfig;

export default function App() {
    const images = [
        require('./assets/images/login.png'),
        require('./assets/images/register.png'),
        require('./assets/images/forget.png'),
    ];

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider images={images}>
                    <NativeBaseProvider>
                        <AuthProvider>
                            <Navigation />
                        </AuthProvider>
                        <StatusBar />
                    </NativeBaseProvider>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}
