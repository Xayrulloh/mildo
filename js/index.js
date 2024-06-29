const sendMessage = async(payload) => {

    const url = 'https://api.telegram.org/bot7257071849:AAFHpwPl7U2f8McbFExHJh8S8Lzjp34JgVI/sendMessage'
    const request = {
        chat_id: 1151533771,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}`,
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
