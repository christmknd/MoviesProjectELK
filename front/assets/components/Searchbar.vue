
<template>
  <div id="app" class="container">
    <div class="input-group input-group-lg bottom">
      <div class="input-group-prepend">
        <span class="input-group-text">Search</span>
      </div>
      <input type="text" class="form-control col-md-6">
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      query: '',
      data: []
    }
  },
  methods: {
    search() {
      axios.get("http://localhost:9200/search?q=" + this.query)
          .then(response => {
            console.log(response.data);
            this.data = response.data;
          })
    }
  }
}
</script>

<style>
.bottom {
  margin-top: 50px;
  margin-left: 200px;
}
</style>