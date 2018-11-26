<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="box"></div>
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
      title: '黑名单列表'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
