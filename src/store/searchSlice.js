import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchItem = createAsyncThunk(
  'search/fetchSearchItem',
  async function(title, { rejectWithValue,dispatch }){
    try {
      const res = await axios({
        method: "GET",
        url: 'http://localhost:3002/search',
        params:{
          title: title
        }
      })
      if(!res.data.length){
        throw new Error('Cant find items')
      }
      return (res.data)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const searchSlice = createSlice({
  name:'search',
  initialState:{
    searchItems:[],
    position: -500,
    visibility:0
  },
  reducers:{
    showSearchBlock: (state)=>{state.position = 0; state.visibility = 0.95},
    hideSearchBlock: (state)=>{state.position = -500; state.visibility = 0}
  },
  extraReducers:{
    [fetchSearchItem.pending]:()=>{},
    [fetchSearchItem.fulfilled]:(state,action)=>{state.searchItems = action.payload},
    [fetchSearchItem.rejected]:()=>{}
  }
})

export const {showSearchBlock, hideSearchBlock} = searchSlice.actions

export default searchSlice.reducer