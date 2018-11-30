<template>
  <div>
    <we-header :WeTitle="title"></we-header>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
export default {
  components: {
    WeHeader
  },
  data () {
    return {
      title: '绿盾介绍'
    }
  }
}
</script>

<style scoped lang="stylus"></style>
