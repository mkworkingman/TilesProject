import { configureStore } from '@reduxjs/toolkit'
import tilesReducer from './tilesSlice'
import gridReducer from './gridSlice'

export const makeStore = () =>
    configureStore({ reducer: { tiles: tilesReducer, grid: gridReducer } })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
