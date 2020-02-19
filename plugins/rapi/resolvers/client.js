const GQLKIT_SERVER_ENDPOINT = process.env.GQLKIT_SERVER_ENDPOINT || 'http://localhost:8080/query'
const method = 'POST'
const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

export default {
    async req(demand, variables) {
        const res = await fetch(GQLKIT_SERVER_ENDPOINT, {
            method,
            headers,
            body: JSON.stringify({
                query: demand.loc.source.body,
                variables
            })
        })
        const { data } = await res.json()
        return data
    }
}
