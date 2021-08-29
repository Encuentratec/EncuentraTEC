import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/supabaseMapped';

type SliceState = {
    state: 'logged out' | 'loading' | 'logged in';
    user: User | null | undefined;
};

const initialState: SliceState = { state: 'logged out', user: null };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<SliceState>) => {
            if (action.payload) {
                state.state = 'logged in';
                state.user = action.payload.user;
            }
        },
    },
});

export const { setUserData } = userSlice.actions;
export type UserReducerState = SliceState;
export default userSlice.reducer;
