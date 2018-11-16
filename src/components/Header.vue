<template>
  <div class="header">
    <span>{{WeTitle}}</span>
    <!-- <div class='iconfont back-icon'>&#xe624;</div> -->
    <router-link to="/" v-if='isShow'>
      <div class='iconfont back-icon'>&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'WeHeader',
  props: {
    WeTitle: {
      type: String
    },
    isShow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/variables.styl'
  .header
    position: fixed
    z-index: 999
    overflow: hidden
    width: 100vw
    height: $headerHeight
    line-height: $headerHeight
    color: #fff
    background: $bgColor
    text-align: center
    font-size: .32rem
    .back-icon
      position: absolute
      top: 0
      left: 0
      font-size: .4rem
      width: .64rem
      text-align: center
      color: #fff
</style>
