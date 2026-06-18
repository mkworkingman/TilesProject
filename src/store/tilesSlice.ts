import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './index'

export interface Collection {
    id: string
    name: string
    collectionUrl: string
}

export interface Tile {
    id: string
    collection: Collection
    tileUrl: string
    quantity: number
    price: number
}

interface TilesState {
    activeTiles: Tile[]
}

const listOfTiles: Tile[] = [
    {
        id: 'tile_1',
        collection: {
            id: 'collection_1',
            name: 'Ocean Wave',
            collectionUrl: 'ocean_wave',
        },
        tileUrl: 'ocean_wave',
        quantity: 0,
        price: 28,
    },
    {
        id: 'tile_2',
        collection: {
            id: 'collection_2',
            name: 'Forest Fern',
            collectionUrl: 'forest_fern',
        },
        tileUrl: 'forest_fern',
        quantity: 0,
        price: 30,
    },
    {
        id: 'tile_3',
        collection: {
            id: 'collection_3',
            name: 'Terracotta Dot',
            collectionUrl: 'terracotta_dot',
        },
        tileUrl: 'terracotta_dot',
        quantity: 0,
        price: 26,
    },
    {
        id: 'tile_4',
        collection: {
            id: 'collection_4',
            name: 'Yellow Star',
            collectionUrl: 'yellow_star',
        },
        tileUrl: 'yellow_star',
        quantity: 0,
        price: 29,
    },
    {
        id: 'tile_5',
        collection: {
            id: 'collection_5',
            name: 'Bird',
            collectionUrl: 'bird',
        },
        tileUrl: 'bird',
        quantity: 0,
        price: 20,
    },
    {
        id: 'tile_6',
        collection: {
            id: 'collection_6',
            name: 'Yellow Texture',
            collectionUrl: 'yellow_texture',
        },
        tileUrl: 'yellow_texture',
        quantity: 0,
        price: 20,
    },
    {
        id: 'tile_7',
        collection: {
            id: 'collection_7',
            name: 'Green Texture',
            collectionUrl: 'green_texture',
        },
        tileUrl: 'green_texture',
        quantity: 0,
        price: 20,
    },
]

const initialState: TilesState = {
    activeTiles: listOfTiles.slice(0, 4),
}

const tilesSlice = createSlice({
    name: 'tiles',
    initialState,
    reducers: {
        addTile: (state, action: PayloadAction<string>) => {
            const tile = state.activeTiles.find((t) => t.id === action.payload)
            if (tile) tile.quantity += 1
        },
        removeTile: (state, action: PayloadAction<string>) => {
            const tile = state.activeTiles.find((t) => t.id === action.payload)
            if (tile && tile.quantity > 0) tile.quantity -= 1
        },
        addNewTile: (state, action: PayloadAction<string>) => {
            const exists = state.activeTiles.some((t) => t.id === action.payload)
            if (exists) return
            const tile = listOfTiles.find((t) => t.id === action.payload)
            if (tile) state.activeTiles.push(tile)
        },
    },
})

export const selectActiveTiles = (state: RootState) => state.tiles.activeTiles

export const selectUnselectedTiles = createSelector(selectActiveTiles, (items) =>
    listOfTiles.filter((tile) => !items.some((active) => active.id === tile.id)),
)

export const addedTiles = createSelector(
    selectActiveTiles,
    (items) => items.filter((tile) => tile.quantity > 0).length,
)

export const selectTotals = createSelector(selectActiveTiles, (items) => {
    const subtotal = items.reduce((sum, t) => sum + t.quantity * t.price, 0)
    const shipping = subtotal > 500 ? 0 : 25
    const grandTotal = subtotal + shipping
    return { subtotal, shipping, grandTotal }
})

export const { addTile, removeTile, addNewTile } = tilesSlice.actions
export default tilesSlice.reducer
