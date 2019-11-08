<template>
  <div>
    <p @click="clickMe" class="demo1">demo1</p>
  </div>
</template>

<script>
  export default{
    name: 'demo',
    data() {
      return {

      }
    },
    methods: {
      clickMe() {
        alert('hello');
      }
    }
  }
</script>

<style lang="scss">
  .demo1 {
    background-color:red;
  }
</style>
