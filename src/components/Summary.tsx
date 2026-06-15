import CustomInput from './ui/CustomInput'
import CustomTextArea from './ui/CustomTextarea'

export default function Summary() {
    return (
        <div className="uppercase">
            <form>
                <CustomInput label="Customer name:" name="name" autoComplete="name" />
                <div className="grid grid-cols-2 gap-3">
                    <CustomInput label="Phone:" name="phone" type="tel" autoComplete="tel" />
                    <CustomInput label="Email:" name="email" type="email" autoComplete="email" />
                </div>
                <CustomTextArea
                    label="Shipping Address:"
                    name="address"
                    autoComplete="shipping street-address"
                />
                <button>Place secure order</button>
            </form>
        </div>
    )
}
