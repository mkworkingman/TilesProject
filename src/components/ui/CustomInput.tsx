import { InputHTMLAttributes } from 'react'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
}

export default function CustomInput({ label, name, ...props }: CustomInputProps) {
    return (
        <div className="flex gap-2">
            <label htmlFor={name} className="self-end leading-none">
                {label}
            </label>
            <input {...props} id={name} required className="min-w-0 flex-1 border-b-2" />
        </div>
    )
}
