<template>
<div>

  <div class="row">
    <div class="col">
      <h2>This is the List page</h2>
      <label class="form-label" for="search">
        Search
      </label>
      <input id="search" class="form-control" type='text' v-model="searchstring">
    </div>
  </div>
  <div class="row">
    <h2>Total: {{ totalLength }} </h2>
    <div class="col-4" v-for="(item, index) in data.slice(0,10)" :key="index">
      <div class="card">
        <div class="card-body">
          <div class="circle bg-primary">
            <span class="initials text-white">{{ initials(item[1].name) }}</span>
          </div>
          <div class="d-inline-block">
            <div class="card-title">{{ item[1].name }} ({{ item[0] }})</div>
            <p class="card-text">{{ item[1].subtitle }}</p>
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
      searchstring: ''
    };
  },
  computed: {
    totalLength() {
      return Object.keys(this.data).length;
    },
    data() {
      var asArray = Object.entries(getData());
      return asArray;
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