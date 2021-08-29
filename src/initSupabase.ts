import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Better put your these secret keys in .env file
export const supabase = createClient(
    'https://ytqsqdsegozvvknbltzi.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDA0MDQ0NSwiZXhwIjoxOTQ1NjE2NDQ1fQ.WXrFY7a_O7bq39ApsjfpedAMXhFo5ERnutkwwNzZO0w',
    {
        localStorage: AsyncStorage as any,
    }
);
