'use client'
import { TextareaHTMLAttributes } from 'react'

interface CustomTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
    name: string
    indent?: number
    error?: string
    className?: string
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
    className,
    ...props
}: CustomTextAreaProps) {
    return (
        <>
            <div
                className={`${className} relative text-2xl [--textarea-color:var(--color-black)] focus-within:[--textarea-color:var(--color-blue-500)]`}
            >
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
                        background: `linear-gradient(to bottom, transparent 0 30.5px, var(--textarea-color) 30.5px 32px, transparent 32px) ${indent}px 0 no-repeat`,
                        textIndent: `${indent}px`,
                    }}
                />
                <div
                    className="pointer-events-none absolute inset-0 top-16"
                    style={{
                        background: `linear-gradient(to bottom, var(--textarea-color) 0 1.5px, transparent 1.5px 32px) 0 0 / 100% 32px`,
                    }}
                />
            </div>
            {error && <p className="text-amber-800">{error}</p>}
        </>
    )
}
