import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './index'

interface GridState {
    selectedTileId: string | null
    cells: Record<string, string>
}

const initialState: GridState = {
    selectedTileId: null,
    cells: {},
}

const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        selectTile: (state, action: PayloadAction<string>) => {
            state.selectedTileId = action.payload
        },
        clearSelection: (state) => {
            state.selectedTileId = null
        },
        placeTile: (state, action: PayloadAction<string>) => {
            if (state.selectedTileId === null) return
            const cellId = action.payload
            if (state.cells[cellId] === state.selectedTileId) {
                delete state.cells[cellId]
            } else {
                state.cells[cellId] = state.selectedTileId
            }
        },
        clearCell: (state, action: PayloadAction<string>) => {
            delete state.cells[action.payload]
        },
    },
})

export const selectSelectedTileId = (state: RootState) => state.grid.selectedTileId
export const selectCells = (state: RootState) => state.grid.cells

export const { selectTile, clearSelection, placeTile, clearCell } = gridSlice.actions
export default gridSlice.reducer
