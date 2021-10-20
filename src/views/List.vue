<template>
<div>

  <div class="row">
    <div class="col">
      <h2>This is the List page</h2>
      <label class="form-label" for="search">
        Search
      </label>
      <input id="search" class="form-control" type='text'>
    </div>
  </div>
  <div class="row">
    <div class="col-4" v-for="(item, index) in data" :key="index">
        Avatar: {{ item.name }}({{ index }}): {{ item.subtitle }}
    </div>
  </div>
    
</div>
</template>

<style>
  div {
    word-wrap: break-word;
  }
</style>

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