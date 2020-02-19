import client from '../client'
import cache from '../cache'

// resolver
export default async variables => {
    let res = cache.Find('chartCategories')
        ? cache.Find('chartCategories')
        : await client.req(
              'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=1'
          )

    res = res.data[0].data
    let chartCategories = []
    for (const i in res) {
        chartCategories.push(res[i].year)
    }
    return cache.Regist('chartCategories', chartCategories)
}
