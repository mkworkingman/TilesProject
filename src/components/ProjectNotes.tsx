import { CustomTextarea } from '@/components/ui'

export default function ProjectNotes() {
    return (
        <CustomTextarea label="Project name / Notes:" name="notes" indent={200} form="send-form" />
    )
}
