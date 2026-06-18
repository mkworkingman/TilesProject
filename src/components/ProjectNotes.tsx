import { CustomTextarea } from '@/components/ui'

export default function ProjectNotes({ defaultValue }: { defaultValue?: string }) {
    return (
        <CustomTextarea
            label="Project name / Notes:"
            name="notes"
            indent={200}
            form="send-form"
            defaultValue={defaultValue}
        />
    )
}
