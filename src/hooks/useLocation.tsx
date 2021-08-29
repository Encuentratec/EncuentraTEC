import { useState, useEffect } from 'react';
import { supabase } from '../initSupabase';
import { definitions } from '../types/supabase';
import { Location } from '../types/supabaseMapped';

const useLocations = ({
    ids = [],
    institution_id,
}: {
    ids?: string[];
    institution_id?: string;
}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();
    const [data, setData] = useState<Location[]>([]);

    useEffect(() => {
        supabase
            .from<definitions['location']>('location')
            .select('*')
            .eq('institution_id', institution_id)
            .in('id', ids)
            .then((ret) => {
                if (ret.data && !ret.error) {
                    setData(ret.data);
                }
                if (ret.error) setError(ret.error);

                setLoading(true);
            })
            //@ts-ignore
            .catch((err) => {
                setError(err);
                setLoading(true);
            });
    }, []);

    return { loading, error, data };
};

export default useLocations;
