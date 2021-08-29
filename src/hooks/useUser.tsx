import { useEffect } from 'hoist-non-react-statics/node_modules/@types/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { User } from '../types/supabaseMapped';

const useUser = () => {
    // const [data, setData] = useState<User | null>(null);
    // const [loading, setLoading] = useState<boolean>(true);

    const userData = useSelector((state: RootState) => state.user.user);

    return {
        data: userData,
    };
};

export default useUser;
