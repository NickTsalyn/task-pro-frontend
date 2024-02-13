import { createSlice } from "@reduxjs/toolkit";
import { fetchTitle, addTask, deleteTask } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    // priority: [],
    // deadline: [],
    // // column: true,
    // column:"",
    owner: true,
    isLoading: false,
    error: null,
    filter: '',
  },

  reducers: {
    // setFilter: (state, action) => {
    //     state.filter = action.payload;
    // }
  },

  extraReducers: {
    [fetchTitle.pending](state) {
      state.isLoading = true;
    },
    [fetchTitle.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.tasks = action.payload; // змінено з state.cards на state.tasks
    },
    [fetchTitle.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addTask.pending](state) {
      state.isLoading = true;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.tasks.push(action.payload);
    },
    [addTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteTask.pending](state) {
      state.isLoading = true;
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    [deleteTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;