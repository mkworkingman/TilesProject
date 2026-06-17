'use client'
import { useAppSelector } from '@/store/hooks'
import { addedTiles } from '@/store/tilesSlice'
import Link from 'next/link'

export default function Header() {
    const addedTilesCount = useAppSelector(addedTiles)

    return (
        <header className="bg-surface fixed right-0 left-0 z-10 h-15 rounded-t-lg border-2">
            <Link href="/shop">Shop</Link>
            <p>{addedTilesCount}</p>
        </header>
    )
}
