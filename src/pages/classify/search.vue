<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="add-box">
      <div class="box-top">
        <div class="box-info">
          <i class="iconfont icon-laba1 font-color-FFF"></i>
          <span>共为您拦截{{num}}次来话</span>
        </div>
      </div>
      <div class="box-middle">
        <group class="weui-cells-top0">
          <cell title="暂无拦截记录"></cell>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { XSwitch, Group, Cell } from 'vux'
export default {
  components: {
    WeHeader,
    XSwitch,
    Group,
    Cell
  },
  data () {
    return {
      title: '拦截记录查询',
      num: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/variables.styl'
.weui-cells-top0 >>> .vux-no-group-title {
  margin-top 0px
}
.add-box
  width 100vw
  height 100vh
  .box-top
    .box-info
      height 0.7467rem
      line-height 0.72rem
      background #23d4ea
      color #fff
      text-align center
</style>
