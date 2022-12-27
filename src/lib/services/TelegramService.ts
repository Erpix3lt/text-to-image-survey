export async function post(message: any) {
    const response = await fetch('/messages', {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'content-type': 'application/json'
        }
    });
    return response.json();
}

