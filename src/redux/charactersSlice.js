import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


const char_limit= 12;

export const fecthCharacters = createAsyncThunk('characters/getCharacters', async (page) => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${char_limit}&offset=${page * char_limit}`);
    return res.data;
})

export const charactersSlice = createSlice({
    name : 'characters',
    initialState : {
        items: [],
        isLoading: false,
        page: 0,

    },
    reducers: {},
    extraReducers: {
        [fecthCharacters.pending] : (state, action) => {
            state.isLoading= true;
        },
        [fecthCharacters.fulfilled] : (state, action) =>{
            state.items = [...state.items, ...action.payload];
            state.isLoading= false;
            state.page += 1;
        },
        [fecthCharacters.rejected] : (state, action) =>{
            state.isLoading= false;
            state.error = state.error.message;
        }
    },
})

export default charactersSlice.reducer;