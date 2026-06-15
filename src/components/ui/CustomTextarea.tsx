'use client'
import { TextareaHTMLAttributes } from 'react'

interface CustomTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
    name: string
}

const handleInput = (e: React.InputEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = 'auto'
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`
}

export default function CustomTextArea({ label, name, ...props }: CustomTextAreaProps) {
    return (
        <div className="relative">
            <div
                className="absolute inset-0 top-12"
                style={{
                    background: `linear-gradient(to bottom, black 0 2px, transparent 2px 24px) 0 0 / 100% 24px`,
                }}
            />
            <label htmlFor={name} className="absolute top-1 left-0 self-end leading-none">
                {label}
            </label>
            <textarea
                {...props}
                id={name}
                className="w-full resize-none overflow-y-hidden indent-40"
                onInput={handleInput}
                required
                style={{
                    background: `linear-gradient(to bottom, transparent 0 22px, black 22px 23px, transparent 23px) no-repeat`,
                    backgroundPositionX: '160px',
                }}
            />
        </div>
    )
}
