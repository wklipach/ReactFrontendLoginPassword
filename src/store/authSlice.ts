import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  user: {
    id: number;
    name: string;
  } | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  user: (() => {
    const data = localStorage.getItem('user');
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  })()
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; user: {id: number; name: string}}>) => {
      state.token = action.payload.token;
      state.user = {id: action.payload.user.id, name: action.payload.user.name}
      
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', action.payload.user.name);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});



export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;