import { InputHTMLAttributes } from 'react'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
}

export default function CustomInput({ label, name, ...props }: CustomInputProps) {
    return (
        <div className="flex gap-2 [--input-color:var(--color-black)] focus-within:[--input-color:var(--color-blue-500)]">
            <label htmlFor={name} className="self-end leading-none text-(--input-color)">
                {label}
            </label>
            <input
                {...props}
                id={name}
                required
                className="peer min-w-0 flex-1 border-b-2 border-(--input-color) outline-none"
            />
        </div>
    )
}
