<template>

  <div id="app">
    <HeaderNav :easteregg.sync="easteregg"/>
    <main class="py-5">
      <router-view :easteregg.sync="easteregg" />
    </main>
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