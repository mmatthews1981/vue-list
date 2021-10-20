<template>
  <div class="listing">
    <div>This is the List page</div>
    <input type='text'>

      <div v-for="(item, index) in data" :key="index">
        Avatar: {{ item.name }}({{ index }}): {{ item.subtitle }}
      </div>

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