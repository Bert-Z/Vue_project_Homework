<template>
  <div class="hello">
    <h1 class="he">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data(){
    return {
      msg: 'WELCOME',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.he{
  padding-top: 20px;
}
</style>
