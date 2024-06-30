const FORM = document.getElementById('contact-form');

const sendMessage = async(name, phone, email) => {

    const url = 'https://api.telegram.org/bot7257071849:AAFHpwPl7U2f8McbFExHJh8S8Lzjp34JgVI/sendMessage'

    if (!name || !email || !phone) return

    const request = {
        chat_id: 1151533771,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
    }

    const telegramResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })

    const response = await telegramResponse.json()

    if (response.ok) {

        alert('Your message has been sent!')

    } else {

        console.log(response.description || response)
        alert('Something went wrong. Please try again later.')

    }

}

const onSubmit = async (event) => {
    event.preventDefault();
    const [name, phone, email] = event.target.elements;

    await sendMessage(name.value, phone.value, email.value)
    event.target.reset()
}

FORM.addEventListener('submit', onSubmit)
