import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from 'qs'

export const getMyAccount = createAsyncThunk(
  'account/getMyAccount',
  async function ({ email, password }, { rejectWithValue, dispatch }) {
    try {
      const res = await axios({
        method: "POST",
        url: 'http://localhost:3002/login',
        data: {
          email: email,
          password: password
        }
      })
      if (res.status === 404) {
        throw new Error('Server Error!')
      }
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const addToCart = createAsyncThunk(
  'account/addToCart',
  async function ({ accountId, itemId, color, size }, { rejectWithValue, dispatch }) {
    try {
      const res = await axios({
        method: "PATCH",
        url: 'http://localhost:3002/cart',
        data: {
          accountId: accountId,
          itemId: itemId,
          color: color,
          size: size
        }
      })
      if (res.status === 404) {
        throw new Error('Server Error!')
      }
      dispatch(setCart(res.data))
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const getCart = createAsyncThunk(
  'account/getCart',
  async function (itemsId , { rejectWithValue}) {
    try {
      const res = await axios({
        method: "GET",
        url: 'http://localhost:3002/cart',
        params: {
          itemsId: itemsId
        },
        paramsSerializer: params => {
          return qs.stringify(params)
        }
      })
      if (res.status === 404) {
        throw new Error('Server Error!')
      }
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const removeFromCart = createAsyncThunk(
  'account/removeFromCart',
  async function ({itemId, accountId }, { rejectWithValue, dispatch }) {
    try {
      const res = await axios({
        method: "PATCH",
        url: 'http://localhost:3002/cart/removeItem',
        data: {
          accountId: accountId,
          itemId: itemId
        }
      })
      if (res.status === 404) {
        throw new Error('Server Error!')
      }
      console.log('res data',res.data)
      dispatch(setCart(res.data))
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    myAccount: {
      firstname: '',
      lastname: '',
      cart: []
    },
    status: null,
    error: null
  },
  reducers: {
    logIn: (state, action) => {
      state.myAccount = action.payload
    },
    logOut: (state, action) => {
      state.myAccount = {
        firstname: '',
        lastname: '',
        cart: []
      };
      state.status = null
    },
    error: (state, action) => {
      state.error = action.payload;
    },
    removeError: (state) => {
      state.error = null
    },
    setCart: (state,action) =>{
      state.myAccount.cart = action.payload
    },
    getCart: ()=>{}
  },
  extraReducers: {
    [getMyAccount.pending]: (state) => { state.status = 'loading' },
    [getMyAccount.fulfilled]: (state, action) => {
      state.status = 'loggedIn';
      state.myAccount = action.payload
    },
    [getMyAccount.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload
    }
  }
})


export const { logIn, logOut, error, removeError, setCart } = accountSlice.actions;

export default accountSlice.reducer

