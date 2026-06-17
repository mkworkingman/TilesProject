import { Summary, ProjectNotes, Cart, Payment } from '@/components'
import { OrderFormLogo } from '@/components/ui'

export default function Home() {
    return (
        <div className="uppercase">
            <OrderFormLogo />
            <Summary />
            <ProjectNotes />
            <Cart />
            <Payment />
        </div>
    )
}
