import { configureStore } from "@reduxjs/toolkit"
import {  persistStore, persistReducer, createMigrate} from "reduxjs-toolkit-persist"
import storage from "reduxjs-toolkit-persist/lib/storage"
import {migrations, rootReducer} from "./combine-reducer"

const persistConfig = {
  key: 'store',
  storage: storage,

}

const _persistReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: rootReducer, middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]
})

// export const persistor = persistStore(store)

export default store
