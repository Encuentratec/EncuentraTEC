import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'react-native-rapi-ui';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import { AuthProvider } from './src/provider/AuthProvider';
import store from './src/redux/store';

export default function App() {
    const images = [
        require('./assets/images/login.png'),
        require('./assets/images/register.png'),
        require('./assets/images/forget.png'),
    ];

    return (
        <Provider store={store}>
            <ThemeProvider images={images}>
                <AuthProvider>
                    <Navigation />
                </AuthProvider>
                <StatusBar />
            </ThemeProvider>
        </Provider>
    );
}
