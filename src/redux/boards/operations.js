import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://task-pro-backend-a1c2.onrender.com'

export const fetchBoards = createAsyncThunk(
    'boards/fetchAll', async (_, thunkAPI) => {
        try {
            const res = await axios.get('/boards')
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
  
export const addBoard = createAsyncThunk(
    'boards/addBoard', async (board, thunkAPI) => {
        try {
            const res = await axios.post('/boards', board)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const editBoard = createAsyncThunk(
    'boards/editBoard', async ({ id, updetedBoard }, thunkAPI) => {
        try {
            const res = await axios.put(`/boards/${id}`, updetedBoard)
            return res.data
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
  
export const deleteBoard = createAsyncThunk(
    'boards/deleteBoard', async (id, thunkAPI) => {
        try {
            const res = await axios.delete(`/boards/${id}`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)