import { createSlice } from '@reduxjs/toolkit'

export interface Collection {
    id: string
    name: string
    imgUrl: string
}

export interface Tile {
    id: string
    collection: Collection
    itemUrl: string
    quantity: number
    price: number
}

interface TilesState {
    items: Tile[]
}

const initialState: TilesState = { items: [] }

const tilesSlice = createSlice({
    name: 'tiles',
    initialState,
    reducers: {},
})

export default tilesSlice.reducer
