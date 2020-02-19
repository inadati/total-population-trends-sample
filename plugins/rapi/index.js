import example from './resolvers/Query/example'
import mutateExample from './resolvers/Mutation/mutateExample'

export const rapi = {
    Query: {
        example
    },
    Mutation: {
        mutateExample
    }
}

// Insert it in the context of the framework you use
// example nuxt.js

export default (ctx, inject) => {
    inject('rapi', rapi)
}
