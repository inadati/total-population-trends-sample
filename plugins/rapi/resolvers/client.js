const method = 'GET'
const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-API-KEY': process.env.RESAS_API_KEY
}

export default {
    async req(endpoint) {
        const res = await fetch(endpoint, {
            method,
            headers
        })
        const { result } = await res.json()
        return result
    }
}
