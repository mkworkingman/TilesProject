'use server'
import { OrderSchema } from './schema'
import { z } from 'zod'

export type OrderState = {
    errors: Record<string, string[]>
    rawData: Record<string, string>
} | null

export async function sendData(_: unknown, formData: FormData): Promise<OrderState> {
    const rawData = Object.fromEntries(formData) as Record<string, string>
    const result = OrderSchema.safeParse(rawData)

    if (!result.success) {
        return {
            errors: z.flattenError(result.error).fieldErrors,
            rawData,
        }
    }

    return null
}
