'use client'

import { PaymentProps } from '@/app/page'

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

export default function Payment({ state }: PaymentProps) {
    return (
        <>
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
                <legend>Select payment method</legend>
                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="debit"
                        form="send-form"
                        defaultChecked={(state?.rawData?.payment ?? 'debit') === 'debit'}
                    />
                    Debit Card
                </label>
                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        form="send-form"
                        defaultChecked={state?.rawData?.payment === 'paypal'}
                    />
                    PayPal
                </label>
                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="applepay"
                        form="send-form"
                        defaultChecked={state?.rawData?.payment === 'applepay'}
                    />
                    Apple Pay
                </label>
                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="bank"
                        form="send-form"
                        defaultChecked={state?.rawData?.payment === 'bank'}
                    />
                    Bank Transfer
                </label>
            </fieldset>
        </>
    )
}
