import { definitions } from './supabase';

export type User = definitions['user'];

export type Event = definitions['event'] & {
    location?: definitions['location'] | string;
    recurrence?: definitions['recurrence'] | string;
};

export type Location = definitions['location'];

export type Recurrence = definitions['recurrence'];

export type Weekday =
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday';
