import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistedReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "mainStore",
    storage,
    whitelist: ["user"]
};
const persistedReducer = persistedReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
});
export const persistor = persistStore(store)