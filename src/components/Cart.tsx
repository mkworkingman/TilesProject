'use client'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addTile, removeTile, selectActiveTiles, selectTotals } from '@/store/tilesSlice'
import { AddTile } from './ui'
import Image from 'next/image'

export default function Cart({ className }: { className?: string }) {
    const tiles = useAppSelector(selectActiveTiles)
    const { subtotal, shipping, grandTotal } = useAppSelector(selectTotals)
    const dispatch = useAppDispatch()

    return (
        <div className={className}>
            <table className="cart-table w-full border-collapse text-center">
                <thead className="bg-surface h-16 text-xl">
                    <tr>
                        <th className="w-45">Tile Collection</th>
                        <th className="w-33">Item</th>
                        <th className="w-28">Quantity (sq. ft.)</th>
                        <th className="w-30">Unit Price ($)</th>
                        <th className="w-28">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tiles.map((tile) => (
                        <tr key={tile.id}>
                            <td>
                                <Image
                                    src={`/${tile.collection.collectionUrl}.jpg`}
                                    alt=""
                                    width={68}
                                    height={68}
                                    className="mx-auto mt-1.5 border-2 border-black"
                                />
                                <p className="mb-1.5 text-xl">{tile.collection.name}</p>
                            </td>
                            <td>
                                <Image
                                    src={`/${tile.tileUrl}.jpg`}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="mx-auto"
                                />
                            </td>
                            <td className="text-4xl tracking-wider">
                                [ {tile.quantity || '\u00A0'} ]
                            </td>
                            <td className="text-xl tracking-wider">[ ${tile.price.toFixed(2)}]</td>
                            <td>
                                <button
                                    className="inline-flex h-16 w-12 cursor-pointer flex-col justify-end bg-[url(/add.jpg)] bg-size-[44px_44px] bg-top bg-no-repeat px-2 py-1 text-xs"
                                    onClick={() => dispatch(addTile(tile.id))}
                                >
                                    Add
                                </button>
                                <button
                                    className="inline-flex h-16 w-12 cursor-pointer flex-col justify-end bg-[url(/remove.jpg)] bg-size-[44px_44px] bg-top bg-no-repeat px-2 py-1 text-xs"
                                    onClick={() => dispatch(removeTile(tile.id))}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex">
                <AddTile />
                <div className="ml-auto">
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-2xl">Subtotal: </span>
                        <div className="flex h-10 w-28.25 items-center justify-center border-2 border-t-0">
                            [{subtotal}]
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-2xl">Shipping: </span>
                        <div className="flex h-10 w-28.25 items-center justify-center border-2 border-t-0">
                            [{shipping}]
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-2xl">Grand Total: </span>
                        <div className="bg-surface flex h-10 w-28.25 items-center justify-center border-2 border-t-0">
                            [{grandTotal}]
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
