<template>
  <div class="row">
    <div class="col">
      <h2>This is the List page</h2>
      <label class="form-label" for="search">
        Search
      </label>
      <input id="search" class="form-control" type='text'>
      
      <div v-for="(item, index) in data" :key="index">
        Avatar: {{ item.name }}({{ index }}): {{ item.subtitle }}
      </div>
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