import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "reduxjs-toolkit-persist"
import storage from "reduxjs-toolkit-persist/lib/storage"
import { rootReducer } from "./combine-reducer"

const persistConfig = {
  key: 'store',
  storage: storage,
  throttle: 500,
  version: 1,
  // stateReconciler: hardSet
}

const _persistReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: _persistReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {thunk: true, serializableCheck: false, immutableStateInvariant: false, }
  )
})

export const persistor = persistStore(store)

export default store
