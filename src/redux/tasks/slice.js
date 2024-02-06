import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./operations";

const tasksSlise = createSlice ({
    name: "tasks",
    initialState: {
        tasks: [],
        // isLoading: false,
        error: null,
        },
       
 reducers: {
    
//     setFilter: (state, action) => {
//         state.filter = action.payload;
//     }
  
//     },

    extraReducers: {
        [fetchTasks.pending](state) {
            state.isLoading = true;
        },
        [fetchTasks.fulfilled] (state, action) {
            state.isLoading = false;
            state.error = null;
            state.cards = action.payload;
        },
        [fetchTasks.rejected] (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addTask.pending](state) {
            state.isLoading = true;
        },
        [addTask.fulfilled](state, action){
            state.isLoading = false;
            state.error = null;
            state.tasks.push(action.payload);
        },
        [addTask.rejected](state, action){
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteTask.pending](state){
            state.isLoading = true;
        },
        [deleteTask.fulfilled](state, action){
            state.isLoading = false;
            state.error = null;
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
        },
        [deleteTask.rejected](state, action){
            state.isLoading = false;
            state.error = action.payload;
        }

    }
}})

export const contactsReducer = tasksSlise.reducer;