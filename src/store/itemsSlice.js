import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async function (_, { rejectWithValue }) {
    try {
      const res = await axios({
        method: "GET",
        url: 'http://localhost:3002/items'
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

export const fetchLatestItems = createAsyncThunk(
  'items/fetchLatestItems',
  async function (_, { rejectWithValue }) {
    try {
      const res = await axios({
        method: "GET",
        url: 'http://localhost:3002/latestItems'
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

export const fetchBrandItems = createAsyncThunk(
  'items/fetchBrandItems',
  async function (title, { rejectWithValue }) {
    try {
      const res = await axios({
        method: "GET",
        url: 'http://localhost:3002/brandItems',
        params:{
          title:title
        }
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

export const fetchCategoryItems = createAsyncThunk(
  'items/fetchCategoryItems',
  async function (category, { rejectWithValue }) {
    try {
      const res = await axios({
        method: "GET",
        url: 'http://localhost:3002/categoryItems',
        params:{
          category:category
        }
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

export const fetchItem = createAsyncThunk(
  'items/fetchitem',
  async function (title, { rejectWithValue, dispatch }) {
    try {
      const res = await axios({
        method: "GET",
        url: 'http://localhost:3002/item',
        params:{
          title:title
        }
      })
      if(!res.data._id){
        throw new Error('Cant download items')
      }
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    selectedItem: {
      data:{},
      status: ''
    },
    brandItems:{
      list:[],
      status:''
    },
    categoryItems:{
      list:[],
      status: ''
    },
    latest:{
      list:[]
    }
  },
  reducers: {
  },
  extraReducers: {
    [fetchItems.pending]: () => { },
    [fetchItems.fulfilled]: (state, action) => { state.items = action.payload },
    [fetchItems.rejected]: () => {},

    [fetchItem.pending]: (state)=>{state.selectedItem.status ='loading'},
    [fetchItem.fulfilled]: (state,action)=>{state.selectedItem.data = action.payload; state.selectedItem.status = 'fulfield'},
    [fetchItem.rejected]: (state)=>{state.selectedItem.status = 'rejected'},

    [fetchBrandItems.pending]: ()=>{},
    [fetchBrandItems.fulfilled]: (state,action)=>{state.brandItems.list = action.payload; state.brandItems.status = 'fulfield'},
    [fetchBrandItems.rejected]:()=>{},

    [fetchCategoryItems.pending]: ()=>{},
    [fetchCategoryItems.fulfilled]: (state,action)=>{state.categoryItems.list = action.payload; state.categoryItems.status = 'fulfield'},
    [fetchCategoryItems.rejected]: ()=>{},

    [fetchLatestItems.fulfilled]: (state,action)=>{state.latest.list = action.payload}
  }
})

export default itemsSlice.reducer