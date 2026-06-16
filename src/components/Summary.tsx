import { sendData } from '@/app/actions'
import { CustomInput, CustomTextarea } from '@/components/ui'

export default function Summary() {
    return (
        <div className="uppercase">
            <form action={sendData} id="send-form">
                <CustomInput label="Customer name:" name="name" autoComplete="name" />
                <div className="grid grid-cols-2 gap-3">
                    <CustomInput label="Phone:" name="phone" type="tel" autoComplete="tel" />
                    <CustomInput label="Email:" name="email" type="email" autoComplete="email" />
                </div>
                <CustomTextarea
                    label="Shipping Address:"
                    name="address"
                    autoComplete="shipping street-address"
                    indent={160}
                />
                <button type="submit">Place secure order</button>
            </form>
        </div>
    )
}
