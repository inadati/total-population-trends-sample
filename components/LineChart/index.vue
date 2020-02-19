<template>
    <div>
     <Apexcharts type="line" :width="width" :options="options" :series="series"></Apexcharts>
   </div>
</template>

<script>
import getOptions from './options'

export default {
    name: 'line-chart',
    components: {
        Apexcharts: () => import('vue-apexcharts')
    },
    props: {
        width: {
            default: 500
        },
        categories: {
            type: Array
        },
        series: {
            type: Array,
        },
        xTitle: {
            type: String,
            default: ''
        },
        yTitle: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            options: null
        }
    },
    mounted() {
        this.options = getOptions(this.categories, this.xTitle, this.yTitle)
    }
}
</script>

<style lang="scss" scoped></style>
