import client from '../client'
import cache from '../cache'

// resolver
export default async pref => {

    if(!pref.isLoadedChartSeries){
        let res = await client.req(
            `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${pref.id}`
        )
        res = res.data[0].data

        let chartSeriesData = []
        for (const i in res) {
            chartSeriesData.push(res[i].value)
        }

        cache.Update('prefs', { id: pref.id, isLoadedChartSeries: true })
        cache.Update('chartSeries', { id: pref.id, data: chartSeriesData })
    }
    
    return cache.Find('chartSeries')
}
