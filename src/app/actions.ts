'use server'

export async function sendData(formData: FormData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const notes = formData.get('notes')

    console.log(formData)
    console.log({ name, email, notes })
}
