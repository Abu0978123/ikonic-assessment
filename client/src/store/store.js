import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../hooks/userSlice'

const store = configureStore({
    reducer: {
        users: userReducer
    }
})
export default store;