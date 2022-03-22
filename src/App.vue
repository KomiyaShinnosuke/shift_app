<template>
  <v-app>
    <v-app-bar v-if="showHeaderFooter" app>
      <AppHeader />
    </v-app-bar>
    <v-main class="main-area">
      <router-view />
    </v-main>
    <v-footer v-if="showHeaderFooter" class="footer" app>
      <AppFooter />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { AppHeader } from './app/components/organisms/AppHeader'
import { AppFooter } from './app/components/organisms/AppFooter'
import { HIDE_HEADER_FOOTER_PAGES } from '~/static/page'

export default defineComponent({
  components: { AppHeader, AppFooter },
  setup() {
    const route = useRoute()
    const showHeaderFooter = computed(() => {
      return !HIDE_HEADER_FOOTER_PAGES.includes(route.name)
    })
    return {
      showHeaderFooter,
    }
  },
})

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .main-area {
    text-align: center;
  }
  .footer {
    padding: 0;
  }
}
</style>
