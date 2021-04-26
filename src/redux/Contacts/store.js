import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import {
    // persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import contactsReducer from './contacts-reducer'

// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter']
// }

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,]
        }
    }),
    logger]

const store = configureStore({
    reducer: {
        contacts: contactsReducer
        // contacts: persistReducer(contactsPersistConfig, contactsReducer)
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

// const persistor = persistStore(store)

// eslint-disable-next-line
// export default { store, persistor }
export default store