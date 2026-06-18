import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { selectTile, placeTile, selectSelectedTileId, selectCells } from '@/store/gridSlice'
import { selectActiveTiles } from '@/store/tilesSlice'

export default function Grid() {
    const dispatch = useAppDispatch()
    const tiles = useAppSelector(selectActiveTiles)
    const selectedTileId = useAppSelector(selectSelectedTileId)
    const cells = useAppSelector(selectCells)
    const COLUMNS = 7
    const ROWS = 7

    console.log(tiles)

    return (
        <div className="flex">
            <div className="w-fit border">
                {Array.from({ length: ROWS }, (_, rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {Array.from({ length: COLUMNS }, (_, columnIndex) => {
                            const cellId = `${rowIndex}-${columnIndex}`
                            return (
                                <div
                                    key={columnIndex}
                                    onClick={() => dispatch(placeTile(cellId))}
                                    className="flex h-13 w-13 border bg-cover bg-center"
                                    style={{
                                        backgroundImage: cells[cellId]
                                            ? `url(/${cells[cellId]}.jpg)`
                                            : undefined,
                                    }}
                                />
                            )
                        })}
                    </div>
                ))}
            </div>
            <div>
                {tiles.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => dispatch(selectTile(item.tileUrl))}
                        className={`${selectedTileId === item.tileUrl ? 'text-green-500' : ''}`}
                    >
                        {item.collection.name}
                    </button>
                ))}
            </div>
        </div>
    )
}
