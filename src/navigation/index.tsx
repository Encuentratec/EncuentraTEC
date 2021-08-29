import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

import { NavigationContainer } from '@react-navigation/native';

import Main from './MainStack';
import Auth from './AuthStack';
import Loading from '../screens/utils/Loading';

export default () => {
    const { session, user } = useContext(AuthContext);
    return (
        <NavigationContainer>
            {session ? user == null ? <Loading /> : <Main /> : <Auth />}
        </NavigationContainer>
    );
};
