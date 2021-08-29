import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Better put your these secret keys in .env file
export const supabase = createClient(
    process.env.SUPABASE_URL ?? "https://ytqsqdsegozvvknbltzi.supabase.co",
    process.env.SUPABASE_PUBLIC_KEY ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDA0MDQ0NSwiZXhwIjoxOTQ1NjE2NDQ1fQ.WXrFY7a_O7bq39ApsjfpedAMXhFo5ERnutkwwNzZO0w",
    {
        localStorage: AsyncStorage as any,
    }
);
