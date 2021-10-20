<template>
  <div class="listing">
    <div>This is the List page</div>
    <input type='text'>
    <ul>
      <li v-for="(value, key) in data" :key="key">
        {{ key }}, {{ value }}
      </li>
</ul>
  </div>
</template>

<script>

import {getData} from '../services/getData';

export default {
  name: "List",
  data: function() {
    return {
      data: getData(),
    };
  },
  components: {
    //Welcome
  }
};

</script>