'use client'
import { TextareaHTMLAttributes } from 'react'

interface CustomTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
    name: string
    indent?: number
    error?: string
}

const handleInput = (e: React.InputEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = 'auto'
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`
}

export default function CustomTextarea({
    label,
    name,
    indent = 0,
    error,
    ...props
}: CustomTextAreaProps) {
    return (
        <>
            <div className="relative [--textarea-color:var(--color-black)] focus-within:[--textarea-color:var(--color-blue-500)]">
                <label
                    htmlFor={name}
                    className="absolute top-1 left-0 cursor-pointer self-end leading-none text-(--textarea-color)"
                >
                    {label}
                </label>
                <textarea
                    {...props}
                    id={name}
                    name={name}
                    className="w-full resize-none overflow-y-hidden outline-none"
                    onInput={handleInput}
                    style={{
                        background: `linear-gradient(to bottom, transparent 0 22px, var(--textarea-color) 22px 23px, transparent 23px) ${indent}px 0 no-repeat`,
                        textIndent: `${indent}px`,
                    }}
                />
                <div
                    className="pointer-events-none absolute inset-0 top-12"
                    style={{
                        background: `linear-gradient(to bottom, var(--textarea-color) 0 2px, transparent 2px 24px) 0 0 / 100% 24px`,
                    }}
                />
            </div>
            {error && <p className="text-amber-800">{error}</p>}
        </>
    )
}
