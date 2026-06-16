'use client'
import { useActionState } from 'react'
import { sendData } from '@/app/actions'
import { CustomInput, CustomTextarea } from '@/components/ui'

const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9+\s]/g, '')
}

export default function Summary() {
    const [state, formAction, pending] = useActionState(sendData, null)

    return (
        <form action={formAction} id="send-form">
            <CustomInput
                label="Customer name:"
                name="name"
                autoComplete="name"
                defaultValue={state?.rawData?.name}
                error={state?.errors?.name?.[0]}
            />

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <CustomInput
                        label="Phone:"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        defaultValue={state?.rawData?.phone}
                        error={state?.errors?.phone?.[0]}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div>
                    <CustomInput
                        label="Email:"
                        name="email"
                        type="email"
                        autoComplete="email"
                        defaultValue={state?.rawData?.email}
                        error={state?.errors?.email?.[0]}
                    />
                </div>
            </div>

            <CustomTextarea
                label="Shipping Address:"
                name="address"
                autoComplete="shipping street-address"
                indent={160}
                defaultValue={state?.rawData?.address}
                error={state?.errors?.address?.[0]}
                required
            />

            <button className="uppercase" type="submit" disabled={pending}>
                {pending ? 'Pending, please wait...' : 'Place secure order'}
            </button>
        </form>
    )
}
