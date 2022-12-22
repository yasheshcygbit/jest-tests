import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiGet } from '../../configs/axiosConfigs';

const initialState = {
  loading: false,
  users: []
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, actions) => {
      state.loading = actions.payload;
    },
    setUsers: (state, actions) => {
      state.users = actions.payload;
    },
  },
});

export const getAllUsers = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const response = await apiGet('/users');
    dispatch(setUsers(response.data));
    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setLoading(false));
    console.log('[ERROR e]', e);
  }
};

export const {
  setLoading,
  setUsers
} = user.actions;

export default user.reducer;
