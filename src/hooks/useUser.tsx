import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../initSupabase';
import { setUserData } from '../redux/slices/user';
import { RootState } from '../redux/store';
import { User } from '../types/supabaseMapped';

const useUser = ({ uid }: { uid?: string }) => {
    const [data, setData] = useState<User | null>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const userData = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();

    const updateRedux = (user: User) => {
        if (user) {
            dispatch(
                setUserData({
                    state: 'logged in',
                    user,
                })
            );
        }
    };

    useEffect(() => {
        if (!uid) {
            setData(userData as User);
        } else {
            supabase
                .from<User>('user')
                .select('*')
                .eq('auth_uid', uid)
                .single()
                .then((ret) => {
                    if (ret.error) setError(ret.error);
                    else setData(ret.data);
                    setLoading(false);
                });
        }
    }, []);

    return {
        data,
        loading,
        error,
    };
};

export default useUser;
