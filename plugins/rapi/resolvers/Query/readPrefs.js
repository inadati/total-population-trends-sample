import client from '../client'
import cache from '../cache'

// resolver
export default async variables => {
    const prefs = cache.Find('prefs')
        ? cache.Find('prefs')
        : await client.req(
              'https://opendata.resas-portal.go.jp/api/v1/prefectures'
          )

    let chartSeries = []
    for (const i in prefs) {
        const pref = prefs[i]
        pref['id'] = pref.prefCode
        pref['isChecked'] = false
        pref['isLoadedChartSeries'] = false
        delete pref.prefCode
        chartSeries.push({
            id: Number(i) + 1,
            name: pref.prefName,
            data: []
        })
    }

    return [
        cache.Regist('prefs', prefs),
        cache.Regist('chartSeries', chartSeries)
    ]
}
