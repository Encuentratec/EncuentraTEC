import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Better put your these secret keys in .env file
export const supabase = createClient(
    process.env.SUPABASE_URL ?? '',
    process.env.SUPABASE_PUBLIC_KEY ?? '',
    {
        localStorage: AsyncStorage as any,
    }
);
