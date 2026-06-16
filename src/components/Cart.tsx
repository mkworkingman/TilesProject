'use client'
// import { useAppSelector } from '@/store/hooks'

export default function Cart() {
    // const tiles = useAppSelector((s) => s.tiles.items)

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
                    <tr>
                        <td>R1C1</td>
                        <td>R1C2</td>
                        <td>[ 10 ]</td>
                        <td>[ 28.00$ ]</td>
                        <td>
                            <button className="cursor-pointer border-2 px-2 py-1">+</button>
                            <button className="cursor-pointer border-2 px-2 py-1">-</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-between">
                <div>Add new Tile to card</div>
                <div>
                    <p>Subtotal:</p>
                    <p>Shipping:</p>
                    <p>Grand Total:</p>
                </div>
            </div>
        </>
    )
}
