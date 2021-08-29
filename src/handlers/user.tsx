import { supabase } from '../initSupabase';
import { definitions } from '../types/supabase';
import { Location, User } from '../types/supabaseMapped';

export const getUserData = (auth_id: string) =>
    supabase
        .from<User>('user')
        .select(
            `
        *,
        location:location_id (*)
    `
        )
        .eq('auth_uid', auth_id)
        .single();

export const setUserLocation = ({
    location_type,
    location_value,
}: {
    location_type: 'custom' | 'local';
    location_value: string | number;
}) => {
    const pl =
        location_type == 'custom'
            ? ({ custom_location: location_value } as {
                  custom_location: string;
              })
            : ({ location_id: location_value } as { location_id: number });

    return supabase.from<definitions['user']>('user').update({
        location_type,
        ...pl,
    });
};
