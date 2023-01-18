import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63c600b64ebaa802853d7033.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
