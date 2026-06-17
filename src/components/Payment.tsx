'use client'

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

export default function Payment() {
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
            />
            <input
                name="expirationdate"
                onChange={handleExpChange}
                maxLength={5}
                autoComplete="cc-exp"
                inputMode="numeric"
                placeholder="MM/YY"
                form="send-form"
                required
            />
            <input
                name="cvv"
                onChange={handleCvvChange}
                maxLength={4}
                autoComplete="cc-csc"
                inputMode="numeric"
                placeholder="cvv"
                form="send-form"
                required
            />
            <fieldset>
                <legend>Select payment method</legend>
                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="debit"
                        form="send-form"
                        defaultChecked
                    />
                    Debit Card
                </label>
                <label>
                    <input type="radio" name="payment" value="paypal" form="send-form" />
                    PayPal
                </label>
                <label>
                    <input type="radio" name="payment" value="applepay" form="send-form" />
                    Apple Pay
                </label>
                <label>
                    <input type="radio" name="payment" value="bank" form="send-form" />
                    Bank Transfer
                </label>
            </fieldset>
        </>
    )
}
