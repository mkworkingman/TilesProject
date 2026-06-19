'use client'

import { PaymentProps } from '@/app/page'
import Image from 'next/image'

const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 16)
    e.target.value = digits.replace(/(\d{4})/g, '$1 ').trim()
}

const handleExpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, '').slice(0, 4)

    if (digits.length === 1 && parseInt(digits, 10) > 1) {
        digits = '0' + digits
    }

    if (digits.length >= 2) {
        const mm = Math.min(Math.max(parseInt(digits.slice(0, 2), 10), 1), 12)
        digits = String(mm).padStart(2, '0') + digits.slice(2)
    }

    e.target.value = digits.replace(/(\d{2})(?=\d)/, '$1/')
}

const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4)
}

export default function Payment({ state, className }: PaymentProps) {
    return (
        <div className={className}>
            <input
                name="cardnumber"
                onChange={handleCardChange}
                maxLength={19}
                autoComplete="cc-number"
                inputMode="numeric"
                form="send-form"
                required
                defaultValue={state?.rawData?.cardnumber}
            />
            {state?.errors?.cardnumber?.[0] && (
                <p className="text-amber-800">{state?.errors?.cardnumber?.[0]}</p>
            )}
            <input
                name="expirationdate"
                onChange={handleExpChange}
                maxLength={5}
                autoComplete="cc-exp"
                inputMode="numeric"
                placeholder="MM/YY"
                form="send-form"
                required
                defaultValue={state?.rawData?.expirationdate}
            />
            {state?.errors?.expirationdate?.[0] && (
                <p className="text-amber-800">{state?.errors?.expirationdate?.[0]}</p>
            )}
            <input
                name="cvv"
                onChange={handleCvvChange}
                maxLength={4}
                autoComplete="cc-csc"
                inputMode="numeric"
                placeholder="cvv"
                form="send-form"
                required
                defaultValue={state?.rawData?.cvv}
            />
            {state?.errors?.cvv?.[0] && <p className="text-amber-800">{state?.errors?.cvv?.[0]}</p>}
            <fieldset>
                <legend className="bg-surface border-2 border-b-0 p-0.5 pl-1 text-2xl tracking-[0.04em]">
                    Select payment method:
                </legend>
                <label className="inline-block h-31 w-41 border-2">
                    <div className="mx-auto mt-3 w-fit">
                        <input
                            type="radio"
                            className="mr-1 inline h-7 w-7 align-middle accent-black"
                            name="payment"
                            value="debit"
                            form="send-form"
                            defaultChecked={(state?.rawData?.payment ?? 'debit') === 'debit'}
                        />
                        <Image
                            className="inline h-13 w-23"
                            alt=""
                            height={52}
                            width={92}
                            src="/credit_card.jpg"
                        />
                    </div>
                    <p className="mt-4 text-center text-[18px]">Credit/Debit Card</p>
                </label>
                <label className="inline-block h-31 w-41 border-2">
                    <div className="mx-auto mt-3 w-fit">
                        <input
                            type="radio"
                            className="mr-1 inline h-7 w-7 align-middle accent-black"
                            name="payment"
                            value="debit"
                            form="send-form"
                            defaultChecked={(state?.rawData?.payment ?? 'debit') === 'debit'}
                        />
                        <Image
                            className="inline h-13 w-23"
                            alt=""
                            height={52}
                            width={92}
                            src="/paypal.jpg"
                        />
                    </div>
                    <p className="mt-4 text-center text-[18px]">PayPal</p>
                </label>
                <label className="inline-block h-31 w-41 border-2">
                    <div className="mx-auto mt-3 w-fit">
                        <input
                            type="radio"
                            className="mr-1 inline h-7 w-7 align-middle accent-black"
                            name="payment"
                            value="debit"
                            form="send-form"
                            defaultChecked={(state?.rawData?.payment ?? 'debit') === 'debit'}
                        />
                        <Image
                            className="inline h-13 w-23"
                            alt=""
                            height={52}
                            width={92}
                            src="/apple_pay.jpg"
                        />
                    </div>
                    <p className="mt-4 text-center text-[18px]">Apple Pay</p>
                </label>
                <label className="inline-block h-31 w-41 border-2">
                    <div className="mx-auto mt-3 w-fit">
                        <input
                            type="radio"
                            className="mr-1 inline h-7 w-7 align-middle accent-black"
                            name="payment"
                            value="debit"
                            form="send-form"
                            defaultChecked={(state?.rawData?.payment ?? 'debit') === 'debit'}
                        />
                        <Image
                            className="inline h-13 w-23"
                            alt=""
                            height={52}
                            width={92}
                            src="/bank_transfer.jpg"
                        />
                    </div>
                    <p className="mt-4 text-center text-[18px]">Bank Transfer</p>
                </label>
            </fieldset>
        </div>
    )
}
