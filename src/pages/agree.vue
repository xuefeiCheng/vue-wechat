<template>
  <div class="hello">
    <div class="test">
      测试
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.test {
  height: 1rem;
  background-color: #42b983;
  font-size: 12px;
}
</style>
