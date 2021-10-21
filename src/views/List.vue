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
    <h2>Total: {{ totalLength }} </h2>
    <div class="col-4" v-for="(item, index) in data" :key="index">
      <div class="card">
        <div class="card-body">
          <div class="avatar">{{ initials(item.name) }}</div>
          <div class="card-title">{{ item.name }} ({{ index }})</div>
          <p class="card-text">{{ item.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
    
</div>
</template>

<style>
  div {
    word-wrap: break-word;
  }

  .card {
    margin: 1rem;
    border-width: 3px;
    box-shadow: 10px 10px gray;
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
  computed: {
    totalLength() {
      return Object.keys(this.data).length;
    },
    
  },
  methods: {
    initials(name) {
      return name ? name : ""

    }
  },
  components: {
    //Welcome
  }
};

</script>