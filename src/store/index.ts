import { configureStore } from '@reduxjs/toolkit'
import tilesReducer from './tilesSlice'

export const makeStore = () => configureStore({ reducer: { tiles: tilesReducer } })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
