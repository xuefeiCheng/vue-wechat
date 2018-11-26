<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="add-box">
      <div class="box-top">
        <div></div>
      </div>
      <div class="box-info">手机无需区号，添加后，黑名单中的号码来电会被直接拦截</div>
      <div class="box-middle">
        <div class="coloumn">
          <div class="reson-item">1</div>
          <div class="reson-item">1</div>
          <div class="reson-item">1</div>
          <div class="reson-item">1</div>
        </div>
        <div class="coloumn">
          <div class="reson-item">1</div>
          <div class="reson-item">1</div>
          <div class="reson-item">1</div>
          <div class="reson-item">1</div>
        </div>
      </div>
      <div class="box-bottom">
        <x-button type="primary" style="margin-top:1em;width:80vw">立即添加</x-button>
        <x-button type="default" style="margin-top:1em;width:80vw">黑名单列表</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { XButton } from 'vux'
export default {
  name: 'addBlack',
  components: {
    WeHeader,
    XButton
  },
  data () {
    return {
      title: '新增黑名单'
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/variables.styl'
.add-box
  width 100vw
  height 100vh
  background #cccccc
  .box-top
    height 20%
    background $bgColor
  .box-info
    height 0.5333rem
    line-height 0.5333rem
    background #23d4ea
    padding-left 0.1333rem
    color #fff
  .box-middle
    height 30%
    background #ffffff
    display: flex
    flex-wrap: wrap
    align-content: center
    .coloumn
      flex-basis: 100%
      display: flex
      justify-content: center
      .reson-item
        width 2.4rem
        height 2.4rem
        border 1px solid red
        background #cccccc

</style>
