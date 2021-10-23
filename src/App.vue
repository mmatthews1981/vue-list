<template>

  <div id="app">
    <HeaderNav />
    <main class="flex-shrink-1">
      <router-view :easteregg.sync="easteregg" />
    </main>
    <div class="easter-egg">
      <img alt="Easter Egg" src="./assets/easter.png" @click="easteregg = !easteregg" tabindex="0">
    </div>

</div>
  
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
export default {

  components: {
    HeaderNav,
  },
  data: function() {
    return {
      easteregg: false,
    };
  },

}

</script>

<style scoped>
    .easter-egg {
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 2rem;
    }
    .easter-egg img {
        height: 48px;
    }
</style>