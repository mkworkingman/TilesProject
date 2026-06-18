'use client'
import { Summary, ProjectNotes, Cart, Payment } from '@/components'
import { OrderFormLogo } from '@/components/ui'
import { useActionState } from 'react'
import { sendData } from './actions'
import Grid from '@/components/Grid'

export interface SummaryProps {
    state: Awaited<ReturnType<typeof sendData>> | null
    formAction: (payload: FormData) => void
    pending: boolean
}

export type PaymentProps = Pick<SummaryProps, 'state'>

export default function Home() {
    const [state, formAction, pending] = useActionState(sendData, null)

    return (
        <div className="uppercase">
            <OrderFormLogo />
            <Summary state={state} formAction={formAction} pending={pending} />
            <ProjectNotes defaultValue={state?.rawData?.notes} />
            <Cart />
            <Payment state={state} />
            <Grid />
        </div>
    )
}
