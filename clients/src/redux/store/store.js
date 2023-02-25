import { configureStore } from '@reduxjs/toolkit'
import LoginSlice  from '../reducers/ReducerLogin'
export default configureStore({reducer: {LoginSlice}
})