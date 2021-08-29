import { useState, useEffect } from 'react';
import { supabase } from '../initSupabase';
import { definitions } from '../types/supabase';
import { Event, Recurrence, Weekday } from '../types/supabaseMapped';
import { arrayToString } from '../utils';
import useUser from './useUser';

// Gets events by user ids and between a timerange
const useEvents = ({
    uids, // Current user uid get from useUser id field
    start_date,
    end_date,
}: {
    uids: string[];
    start_date?: string;
    end_date?: string;
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [events, setEvents] = useState<Event[]>();
    const [error, setError] = useState<any>();

    const getEvents = async () => {
        const { data, error } = await supabase
            .from<Event & definitions['user_event']>('event')
            .select(
                `
            *,
            location:location_id (*),
            recurrence:recurrent_id (*)
        `
            )
            .gte('start_date', start_date ?? '0')
            .lte('end_date', end_date ?? '3')
            .in('user_id', uids);

        if (error) throw error;
        return data ?? [];
    };

    useEffect(() => {
        setLoading(true);
        getEvents()
            .then((ret) => ret && setEvents(ret))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { loading, error, events };
};

export default useEvents;
