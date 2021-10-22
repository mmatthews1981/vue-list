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
          <div class="circle bg-primary">
            <span class="initials text-white">{{ initials(item.name) }}</span>
          </div>
          <div class="d-inline-block">
            <div class="card-title">{{ item.name }} ({{ index }})</div>
            <p class="card-text">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</div>
</template>

<style scoped>
  * {
    word-wrap: break-word;
    word-break: break-all;
  }

  .card {
    margin: 1rem;
    border-width: 3px;
    box-shadow: 10px 10px gray;
  }

  .avatar {
    text-transform: capitalize;
    height: 32px;
    width: 32px;
    border-radius: 20px;
  }

  .circle {
    border-radius: 50%;
    height: 32px;
    text-align: center;
    width: 32px;
  }

  .initials {
    line-height: 1;
    position: relative;
    top: 6px;
    text-transform: capitalize;
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
      if(name) {
        let split = name.split(' ');
        split.forEach(function(el, idx, arr){ arr[idx] = el[0] });
        let res = split.join('');
        if(res.length > 2){
          return res[0]+res[res.length-1]
        }
        return res;
      }
      return "?";
    },
  },
  components: {
    //Welcome
  }
};

</script>