<template>
  <v-app>
    <v-app-bar app>
      <AppHeader />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app>
      <AppFooter />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AppHeader } from './app/components/organisms/AppHeader'
import { AppFooter } from './app/components/organisms/AppFooter'

export default defineComponent({
  components: { AppHeader, AppFooter }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
