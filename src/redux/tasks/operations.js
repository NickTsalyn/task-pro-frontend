import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://task-pro-backend-a1c2.onrender.com';

//get all card
export const fetchTitle = createAsyncThunk(
    "cards/fetchAll", async(_, thunkAPI) => {
        try {
            const response = await axios.get("/cards");
            return response.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// add title

// add description

// add card 

export const addCard = createAsyncThunk(
    "cards/addCard", async ({ title, text }, thunkAPI) => {
        try {
            const response = await axios.post("/cards", { title, text });
            return response.data;
        } catch(error) {
return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// edit column

//  edit description

// delete card
export const deleteCard = createAsyncThunk(
    "cards/deleteCard", async (Id, thunkAPI) => {
        try {
            const response = await axios.delete(`/cards/${Id}`);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

