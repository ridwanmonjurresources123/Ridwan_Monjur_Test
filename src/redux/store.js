import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer, createMigrate } from "reduxjs-toolkit-persist"
import storage from "reduxjs-toolkit-persist/lib/storage"
import { migrations, rootReducer } from "./combine-reducer"

const persistConfig = {
  key: 'store',
  storage: storage,
  throttle: 500,
  version: 1,
}

const _persistReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: _persistReducer, middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]
})

export const persistor = persistStore(store)

export default store
