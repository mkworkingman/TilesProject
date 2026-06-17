'use client'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addNewTile, selectUnselectedTiles } from '@/store/tilesSlice'
import { useRef } from 'react'

export default function AddTile() {
    const unselectedTiles = useAppSelector(selectUnselectedTiles)
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDialogElement>(null)

    if (unselectedTiles.length === 0) return null

    return (
        <>
            <button className="cursor-pointer" onClick={() => ref.current?.showModal()}>
                Add new tile to card
            </button>
            <dialog
                ref={ref}
                className="bg-base top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 p-6 backdrop:bg-black/50"
            >
                <button className="cursor-pointer" onClick={() => ref.current?.close()}>
                    Close
                </button>
                <h2>Add new tile to card:</h2>
                {unselectedTiles.map((item) => (
                    <div key={item.id}>
                        <p>{item.collection.name}</p>
                        <p>{item.price}</p>
                        <button onClick={() => dispatch(addNewTile(item.id))}>ADD</button>
                    </div>
                ))}
            </dialog>
        </>
    )
}
