'use client'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addTile, removeTile, selectActiveTiles, selectTotals } from '@/store/tilesSlice'
import { AddTile } from './ui'

export default function Cart() {
    const tiles = useAppSelector(selectActiveTiles)
    const { subtotal, shipping, grandTotal } = useAppSelector(selectTotals)
    const dispatch = useAppDispatch()

    return (
        <>
            <table className="cart-table w-full border-collapse text-center">
                <thead className="bg-surface">
                    <tr>
                        <th>Tile Collection</th>
                        <th>Item</th>
                        <th>Quantity (sq. ft.)</th>
                        <th>Unit Price ($)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tiles.map((tile) => (
                        <tr key={tile.id}>
                            <td>
                                {tile.collection.name}
                                <br />
                                {tile.collection.collectionUrl}
                            </td>
                            <td>{tile.tileUrl}</td>
                            <td>[ {tile.quantity} ]</td>
                            <td>[ {tile.price.toFixed(2)}$ ]</td>
                            <td>
                                <button
                                    className="cursor-pointer border-2 px-2 py-1"
                                    onClick={() => dispatch(addTile(tile.id))}
                                >
                                    +
                                </button>
                                <button
                                    className="cursor-pointer border-2 px-2 py-1"
                                    onClick={() => dispatch(removeTile(tile.id))}
                                >
                                    -
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex">
                <AddTile />
                <div className="ml-auto">
                    <p>Subtotal: {subtotal}</p>
                    <p>Shipping: {shipping}</p>
                    <p>Grand Total: {grandTotal}</p>
                </div>
            </div>
        </>
    )
}
