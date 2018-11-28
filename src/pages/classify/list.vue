<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="add-box">
      <div class="box-top">
        <div class="box-info">
          <i class="iconfont icon-light font-color-FFF"></i>
          <span>开启的分类来电时将为您拦截！点击分类修改标记次数！</span>
        </div>
        <div class="top-row">
          <div class="row-left">
            <div class="classifyIcon"></div>
          </div>
          <div class='row-right'>
            <div class="classifyCon font-color-FFF font-size-17">
              <div class="con-top">骚扰拦截已开启</div>
              <div class="con-top con-top-button">拦截关闭</div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-middle"></div>
    </div>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { XButton } from 'vux'
export default {
  components: {
    WeHeader,
    XButton
  },
  data () {
    return {
      title: '拦截分类设置'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/variables.styl'
.add-box
  width 100vw
  height 100vh
  .box-top
    height 5rem
    background $bgColor
    .top-row
      box-sizing border-box
      display flex
      height 4rem
      line-height 4rem
      justify-content center
      padding-top 10px
      .row-left
        flex 0 0 20%
        .classifyIcon
          background url('/static/img/classify/classify_icon_off.png') no-repeat center center
          background-size auto 70%
          display block
          width 3rem
          height 3rem
          margin: 0.5rem auto
      .row-right
        flex 0 0 60%
        .classifyCon
          height 3rem
          margin: 0.5rem auto
          .con-top
            height 1rem
            width 4rem
            margin auto
            line-height 1rem
            text-align center
            margin-top .5rem
          .con-top-button
            margin-top .5rem
            background #c71010
            border 1px solid #c71010
            border-radius 2px
  .box-info
    height 0.7467rem
    line-height 0.72rem
    background #23d4ea
    color #fff
    text-align center
</style>
