/* eslint-disable no-unused-vars */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isAuthenticated : false,
    isLoading : false,
    user: null
}

export const registerUser = createAsyncThunk('/auth/register',
  async(formData) =>{
    const response = await axios.post('http://localhost:5001/api/auth/register',formData,{
        withCredentials : true
    });
    return response.data;
  } 
)

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setUser:(state,action)=> {
        }
    },
    extraReducers : (builder) => {
        builder.addCase(registerUser.pending, (state)=> {
            state.isLoading = true;
        }).addCase(registerUser.fulfilled, (state)=> {
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
        }).addCase(registerUser.rejected, (state)=> {
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
        })   
    }
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;