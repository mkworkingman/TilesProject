'use server'
import { OrderSchema } from './schema'
import { z } from 'zod'

type OrderField =
    | 'name'
    | 'phone'
    | 'email'
    | 'address'
    | 'notes'
    | 'cardnumber'
    | 'expirationdate'
    | 'cvv'
    | 'payment'

export type OrderState = {
    errors: Partial<Record<OrderField, string[]>>
    rawData: Partial<Record<OrderField, string>>
} | null

export async function sendData(_: unknown, formData: FormData): Promise<OrderState> {
    const rawData = Object.fromEntries(formData) as Record<string, string>
    const result = OrderSchema.safeParse(rawData)

    console.log(rawData)
    console.log(result)

    if (!result.success) {
        return {
            errors: z.flattenError(result.error).fieldErrors,
            rawData,
        }
    }

    return null
}
