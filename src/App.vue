<template>
  <div id="app">
    <HeaderNav />
    <main class="py-5">
      <router-view />
    </main>
</div>
  
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
export default {
  components: {
    HeaderNav,
  },
}

</script>