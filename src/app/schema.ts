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
})
