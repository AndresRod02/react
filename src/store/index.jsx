import { configureStore } from '@reduxjs/toolkit'
import passwordSlice from './slices/password.slice'
export default configureStore({
  reducer: {
        password : passwordSlice
	}
})