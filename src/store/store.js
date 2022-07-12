import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import accountReducer from './accountSlice'
import itemsReducer from './itemsSlice'
import brandsReducer from './brandSlice'
import searchReducer from './searchSlice'
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReducer = combineReducers({
  account: accountReducer,
  items: itemsReducer,
  brands: brandsReducer,
  search: searchReducer
})

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['account']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
}, composeWithDevTools())

export const persistor = persistStore(store)