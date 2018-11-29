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
      title: '个人中心'
    }
  }
}
</script>

<style scoped lang="stylus"></style>
