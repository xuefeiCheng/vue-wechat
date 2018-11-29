<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="center">
      <div class="person"><div class="per-middle">111</div></div>
    </div>
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

<style scoped lang="stylus">
.center
  height 9rem
  background url(/static/img/info/my_bg.png) no-repeat center center
  background-size cover
  .person
    box-sizing border-box
    display table
    height 5rem
    padding-top 2rem
    width 3rem
    margin auto
    .per-middle
      background red
      display table-cell
      vertical-align middle
</style>
