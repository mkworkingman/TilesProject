import { z } from 'zod'

export const OrderSchema = z.object({
    name: z.string().trim().min(1, 'Name is required'),
    phone: z
        .string()
        .trim()
        .min(1, 'Phone number is required')
        .regex(/^\+?[0-9\s\-()]{7,15}$/, 'Invalid phone number'),
    email: z
        .string()
        .trim()
        .toLowerCase()
        .min(1, 'Email is required')
        .pipe(z.email('Invalid email address')),
    address: z.string().trim().min(1, 'Address is required').min(3, 'Address is too short'),
    notes: z.string().trim().optional(),
    payment: z.enum(['debit', 'paypal', 'applepay', 'bank']),
    cardnumber: z
        .string()
        .trim()
        .transform((v) => v.replace(/\s/g, ''))
        .pipe(
            z
                .string()
                .regex(/^\d{13,19}$/, 'Invalid card number')
                .refine(luhn, 'Invalid card number'),
        ),
    expirationdate: z
        .string()
        .trim()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry (MM/YY)')
        .refine(notExpired, 'Card has expired'),
    cvv: z
        .string()
        .trim()
        .regex(/^\d{3,4}$/, 'Invalid CVV'),
})

function luhn(num: string): boolean {
    let sum = 0
    let alt = false
    for (const ch of [...num].reverse()) {
        let d = +ch
        if (alt) {
            d *= 2
            if (d > 9) d -= 9
        }
        sum += d
        alt = !alt
    }
    return sum % 10 === 0
}

function notExpired(val: string): boolean {
    const parts = val.split('/')
    if (parts.length !== 2) return false
    const mm = Number(parts[0])
    const yy = Number(parts[1])
    if (Number.isNaN(mm) || Number.isNaN(yy)) return false
    const exp = new Date(2000 + yy, mm)
    return exp > new Date()
}
