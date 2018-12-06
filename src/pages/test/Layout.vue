<template>
  <div>
    <we-header :WeTitle="title" :leftOptions="leftOptions"></we-header>
    <router-view/>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
export default {
  components: {
    WeHeader
  },
  mounted () {
    this.title = this.$router.history.current.name || '标题'
  },
  data () {
    return {
      title: '',
      leftOptions: {
        showBack: false
      }
    }
  },
  watch: {
    title () {
      return this.$router.history.current.name || '标题'
    }
  }
}
</script>

<style lang="stylus">
</style>
