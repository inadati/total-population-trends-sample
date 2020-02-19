import readChartCategories from './resolvers/Query/readChartCategories'
import readPrefs from './resolvers/Query/readPrefs'
import updateChartSeries from './resolvers/Mutation/updateChartSeries'

export const rapi = {
    Query: {
        readPrefs,
        readChartCategories
    },
    Mutation: {
        updateChartSeries
    }
}

// Insert it in the context of the framework you use
// example nuxt.js

export default (ctx, inject) => {
    inject('rapi', rapi)
}
