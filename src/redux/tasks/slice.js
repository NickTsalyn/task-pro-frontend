import { createSlice } from '@reduxjs/toolkit';
import { fetchTitle } from './operations';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isLoading: false,
    error: null,
    filter: '',
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSelectedPriority: (state, action) => {
      state.selectedPriority = action.payload;
    },
  },
  extraReducers: {
    [fetchTitle.pending](state) {
      state.isLoading = true;
    },
    [fetchTitle.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.tasks = action.payload;
    },
    [fetchTitle.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setFilter, setSelectedPriority } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
