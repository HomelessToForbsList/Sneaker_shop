import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBrands = createAsyncThunk(
  'brand/fetchBrands',
  async function(_, { rejectWithValue }){
    try {
      const res = await axios({
        method: "GET",
        url: 'http://localhost:3002/brands'
      })
      if(!res.data.length){
        throw new Error('Cant download items')
      }
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const brandSlice = createSlice({
  name:'brand',
  initialState:{
    brands:[],
  },
  reducers:{
    setBrands: ()=>{}
  },
  extraReducers:{
    [fetchBrands.pending]:()=>{},
    [fetchBrands.fulfilled]:(state,action)=>{state.brands = action.payload},
    [fetchBrands.rejected]:()=>{}
  }
})

export default brandSlice.reducer