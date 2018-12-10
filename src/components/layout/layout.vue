<template>
  <div>
    <we-header
    :WeTitle="title"
    :leftOptions="leftOptions"
    :onClickBack="backToHome"
    class="fixedHeader"></we-header>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import WeHeader from './Header'
export default {
  components: {
    WeHeader
  },
  mounted () {
    this.title = this.$router.history.current.name || '标题'
    this.leftOptions.showBack = (this.$router.history.current.path !== '/menu')
  },
  data () {
    return {
      title: '',
      leftOptions: {
        showBack: true,
        preventGoBack: true,
        backText: '返回首页'
      }
    }
  },
  methods: {
    backToHome () {
      this.$router.push('/')
    }
  },
  watch: {
    '$route' (to, from) {
      this.title = this.$router.history.current.name || '标题'
      this.leftOptions.showBack = (to.path !== '/menu')
    }
  }
}
</script>

<style lang="stylus">
.fixedHeader {
  position fixed !important
  top 0
  width 100vw
  z-index 999
}
.content {
  margin-top 46px
}
</style>
