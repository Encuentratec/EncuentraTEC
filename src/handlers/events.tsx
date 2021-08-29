import { supabase } from '../initSupabase';
import { definitions } from '../types/supabase';
import { Event, Recurrence, Weekday } from '../types/supabaseMapped';
import { arrayToString } from '../utils';

export type NewRecurrence = Omit<Recurrence, 'weekdays' | 'id'> & {
    weekdays: Weekday[];
};

export type NewEvent = {
    name: string;
    description: string;
    start_date: string; //timestaptz
    end_date: string; //timestaptz
    location_id?: string;
    custom_location?: string;
    class_id?: string;
    color: string;
    recurrent_id?: string;
    user_id: string;
};

export const createEvent = async ({
    name,
    description,
    start_date,
    end_date,
    location_id,
    custom_location,
    class_id,
    color,
    recurrent_id,
    user_id,
}: NewEvent) => {
    const payload = {
        name,
        description,
        start_date,
        end_date,
        location_id,
        custom_location,
        location_type: location_id && location_id != '' ? 'local' : 'custom',
        organizer: user_id,
        class_id,
        color,
        recurrent_id,
    } as Omit<definitions['event'], 'id'>;

    const { data, error } = await supabase
        .from<definitions['event']>('event')
        .insert([payload])
        .single();

    if (error) throw error;

    return data;
};

export const createRecurrence = async (recurrence: NewRecurrence) => {
    const { weekdays, ...newRecurr } = recurrence;
    const payload = {
        ...newRecurr,
        weekdays: arrayToString(weekdays),
    } as Omit<definitions['recurrence'], 'id'>;

    const { data, error } = await supabase
        .from<definitions['recurrence']>('recurrence')
        .insert([payload])
        .single();

    if (error) throw error;

    return data;
};

export const createRecurrentEvent = async (
    event: NewEvent,
    recurrence: NewRecurrence
) => {
    const recurrenceData = await createRecurrence(recurrence);

    if (recurrenceData) {
        const eventData = await createEvent({
            ...event,
            recurrent_id: recurrenceData.id,
        });
        if (eventData) {
            return {
                ...eventData,
                recurrence: recurrenceData,
            } as Event;
        }
    }
};
