<template>
  <v-app dark>
    
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: '都道府県別の総人口推移グラフ'
    }
  }
}
</script>
