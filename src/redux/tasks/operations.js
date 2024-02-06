import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://task-pro-backend-a1c2.onrender.com';

//get all tasks
export const fetchTitle = createAsyncThunk(
    "tasks/fetchAll", async(_, thunkAPI) => {
        try {
            const response = await axios.get("/tasks");
            return response.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


// add card 

export const addTask = createAsyncThunk(
    "tasks/addTask", async function ({ title, description }, thunkAPI) {
        try {
            const response = await axios.post("/tasks", { title, description });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// edit column



//  edit card

export const editTask = createAsyncThunk(
    "tasks/editTask", async ({ id, updatedData }, thunkAPI) => {
        try {
            const response = await axios.put(`/tasks/${id}`, updatedData);
            return response.data;
        } catch(error) {
        return thunkAPI.rejectWithValue(error.message)}
    }
);

// delete card
export const deleteTask = createAsyncThunk(
    "tasks/deleteTask", async (Id, thunkAPI) => {
        try {
            const response = await axios.delete(`/tasks/${Id}`);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

