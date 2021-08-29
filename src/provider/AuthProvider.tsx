import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../initSupabase';
import { Session, User } from '@supabase/supabase-js';
import { User as AppUser } from '../types/supabaseMapped';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/slices/user';
type ContextProps = {
    user: null | User;
    session: Session | null;
    isSignedIn: boolean;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
    children: React.ReactNode;
}

const AuthProvider = (props: Props) => {
    const [user, setUser] = useState<null | User>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const dispatch = useDispatch();

    const processNewSession = async (session: Session | null) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (session) {
            setIsSignedIn(true);
        } else {
            setIsSignedIn(false);
        }
        if (user) {
            // TODO: Fetch user data
            // const { data, error } = await supabase
            //     .from<AppUser>('user')
            //     .select('*')
            //     .eq('id', session?.user?.id)
            //     .single();

            // if (error || !data) {
            //     setUser(null);
            //     setSession(null);
            //     setIsSignedIn(false);
            // } else {
            //     dispatch(
            //         setUserData({
            //             state: 'logged in',
            //             user: data,
            //         })
            //     );
            // }
        } else {
            setUserData({
                state: 'logged out',
                user: null,
            });
        }
    };

    useEffect(() => {
        const session = supabase.auth.session();
        processNewSession(session);
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                console.log(`Supabase auth event: ${event}`);
                processNewSession(session);
            }
        );
        return () => {
            authListener!.unsubscribe();
        };
    }, [user]);

    return (
        <AuthContext.Provider
            value={{
                user,
                session,
                isSignedIn,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
