<template>
    <v-container grid-list-xs>
        <v-card>
            <v-form>
                <v-col cols="12">
                    <v-row class="pa-4" no-gutters>
                        <template v-for="(pref, ipref) in prefs">
                            <v-col cols="4" md="2" sm="3" :key="ipref">
                                <v-checkbox :label="pref.prefName" @change="changeHandle(pref)"></v-checkbox>
                            </v-col>
                        </template>
                    </v-row>
                </v-col>
            </v-form>
        </v-card>
        <section class="mt-4">
            <div v-show="selectedPrefs.length">
                <line-chart
                    :width="`100%`"
                    :categories="chartCategories"
                    :series="displayedChartSeries"
                    :xTitle="`年度`"
                    :yTitle="`人口`"
                ></line-chart>
            </div>
        </section>
    </v-container>
</template>

<script>
import LineChart from "~/components/LineChart";
const R = require("ramda");

export default {
    components: {
        LineChart
    },
    data() {
        return {
            selectedPrefs: []
        };
    },
    async asyncData({ app: { $rapi } }) {
        const [[prefs, chartSeries], chartCategories] = await Promise.all([
            $rapi.Query.readPrefs(),
            $rapi.Query.readChartCategories()
        ]);

        return {
            prefs,
            chartSeries,
            chartCategories
        };
    },
    methods: {
        async changeHandle(pref) {
            pref.isChecked = !pref.isChecked;
            await Promise.all([this.$rapi.Mutation.updateChartSeries(pref)]);
            if (pref.isChecked) {
                this.selectedPrefs.push(pref.prefName);
            } else {
                this.selectedPrefs = this.selectedPrefs.filter(
                    item => item !== pref.prefName
                );
            }
        }
    },
    computed: {
        displayedChartSeries() {
            return this.selectedPrefs.map(prefName => {
                return R.find(R.propEq("name", prefName))(this.chartSeries);
            });
        }
    }
};
</script>
