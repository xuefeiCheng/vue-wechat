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
      title: '常见问题'
    }
  }
}
</script>

<style scoped lang="stylus"></style>
