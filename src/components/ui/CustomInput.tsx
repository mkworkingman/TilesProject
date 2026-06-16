import { InputHTMLAttributes } from 'react'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
}

export default function CustomInput({ label, name, ...props }: CustomInputProps) {
    return (
        <div className="flex [--input-color:var(--color-black)] focus-within:[--input-color:var(--color-blue-500)]">
            <label
                htmlFor={name}
                className="cursor-pointer self-end pr-2 leading-none text-(--input-color)"
            >
                {label}
            </label>
            <input
                {...props}
                name={name}
                id={name}
                required
                className="min-w-0 flex-1 border-b-2 border-(--input-color) outline-none"
            />
        </div>
    )
}
