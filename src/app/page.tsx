'use client'
import { Summary, Cart, Payment, Grid } from '@/components'
import { CustomTextarea, OrderFormLogo } from '@/components/ui'
import { useActionState } from 'react'
import { sendData } from './actions'
import style from './page.module.css'

export interface SummaryProps {
    state: Awaited<ReturnType<typeof sendData>> | null
    formAction: (payload: FormData) => void
    pending: boolean
    className?: string
}

export type PaymentProps = Pick<SummaryProps, 'state' | 'className'>

export default function Home() {
    const [state, formAction, pending] = useActionState(sendData, null)

    return (
        <div className={`${style.base} uppercase`}>
            <OrderFormLogo className={`${style.logo}`} />
            <Summary
                className={`${style.summary} mt-10 mb-4 px-1`}
                state={state}
                formAction={formAction}
                pending={pending}
            />
            <Cart className={style.cart} />
            <Payment state={state} className={style.payment} />
            <CustomTextarea
                className={`${style.projectNotes} mt-2 block`}
                label="Project name / Notes:"
                name="notes"
                indent={250}
                form="send-form"
                defaultValue={state?.rawData?.notes}
            />
            <Grid className={style.grid} />
        </div>
    )
}
