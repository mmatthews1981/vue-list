<template>
<div>
<div class="container">
  <div class="row">
    <div class="col">
      <h2 class="text-center mb-4 display-2">Listing</h2>
      <p class="text-center">Use this search form to search for entries with specific names.</p>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4 mb-5">
       <label class="form-label text-center" for="search">
        Search
      </label>
      <input id="search" class="form-control" type='text' v-model="searchstring">
      <small class="text-muted">Search is case-sensitive</small>
    </div>
  </div>
  <div class="row">
    <h3 class="text-center display-5" aria-atomic="true" aria-live="assertive">Total Results: {{ totalLength }}, Showing: {{ showingLength }}</h3>
    <div class="col-md-4" v-for="(item, index) in data.slice(0,10)" :key="index" role="log">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-2">
              <div class="circle bg-primary" aria-hidden="true">
                <span class="initials text-white">{{ initials(item[1].name) }}</span>
              </div>
            </div>
            <div class="col">
              <div class="card-title">{{ item[1].name }} ({{ item[0] }})</div>
              <p class="card-text">{{ item[1].subtitle }}</p>
            </div>
          </div>
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
    box-shadow: 10px 10px 5px 0 gray;
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
    top: 3px;
    text-transform: capitalize;
  }
</style>

<script>
import {TheData} from '../services/getData';

export default {
  name: "List",
  data: function() {
    return {
      searchstring: ''
    };
  },
  computed: {
    totalLength() {
      return this.data.length;
    },
    showingLength() {
      return this.data.length > 10 ? 10 : this.data.length;
    },
    data() {
      let vm = this;
      let thedata = new TheData;
      let asArray = Object.entries(thedata.getData());
      if(vm.searchstring){
        return asArray.filter(function(el){
          let thename = el[1].name ? el[1].name.toString() : "";
          return thename.includes(vm.searchstring);
        });
      }
      return asArray;
    },
  },
  methods: {
    initials(name) {
      if(name) {
        let split = name.split(' ');
        split.forEach(function(el, idx, arr){ arr[idx] = el[0] });
        let res = split.join('');
        return res.length > 2 ? res[0]+res[res.length-1] : res;
      }
      return "?";
    },
  },
};

</script>