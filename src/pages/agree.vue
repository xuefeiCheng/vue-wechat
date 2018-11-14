<template>
  <div>
    <we-header :WeTitle="msg"></we-header>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
export default {
  name: 'HelloWorld',
  components: {
    WeHeader
  },
  data () {
    return {
      msg: '免责声明'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
