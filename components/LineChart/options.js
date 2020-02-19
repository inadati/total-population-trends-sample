export default (categories, xTitle, yTitle) => {
    return {
        chart: {
            id: 'line-chart',
            toolbar: {
                show: false
            }
        },
        markers: {
            size: 5
        },
        legend: {
            showForSingleSeries: true,
            position: 'bottom'
        },
        stroke: {
            width: 2
        },
        xaxis: {
            show: true,
            categories,
            title: {
                text: xTitle
            }
        },
        yaxis: {
            show: true,
            title: {
                text: yTitle
            }
        }
    }
}
