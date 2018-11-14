<template>
  <div>
    <we-header :WeTitle="title"></we-header>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
export default {
  name: 'agree',
  components: {
    WeHeader
  },
  data () {
    return {
      title: '免责声明'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
