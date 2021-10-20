<template>
  <div class="listing">
    <div>This is the List page</div>
    <input type='text'>
  </div>
</template>

<script>

import {getData} from '../services/getData';

const data = getData();


export default {
  name: 'List',
  components: {
    //Welcome
  }
}

</script>