<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="box">
      <div class="Atitle">《“绿盾”骚扰电话防护服务条款》</div>
      <p class="font-indent acticle">
        “绿盾”骚扰电话防护服务(下文简称“绿盾”)根据系统智能分析出的骚扰电话信息以及由第三方企业提供的号码标记信息，
        经用户授权，对由用户认定对其构成骚扰的特定类别的骚扰电话来电进行拦截，
        并根据用户的设定向用户发出拦截通知。
      </p>
      <div class="Btitle">“绿盾”为用户默认开启拦截功能的骚扰电话类别包括：</div>
      <div class="item">
        <span class="square"></span>
        <span class="item-title">疑似诈骗类：</span>
        <span class="item-content">
          被系统确认或被大量用户标记为诈骗电话的来电。
        </span>
      </div>
      <div class="agreeBtn">确定并绑定手机号</div>
    </div>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
export default {
  name: 'agree',
  components: {
    WeHeader
  },
  data () {
    return {
      title: '免责声明'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.box
  padding 0.2rem
  .Atitle
    text-align center
    font-size 0.32rem
    height 0.8rem
    line-height 0.8rem
    font-weight bold
  .font-indent
    text-indent 2em
  .acticle
    padding 0.1333rem 0
  .Btitle
    font-size 0.16rem
    height 0.6rem
    line-height 0.6rem
    font-weight bold
  .item
    display inline-block
    height 45px
    line-height 45px
    .square
      display inline-block
      height 12px
      width 12px
      background-color #00bcd4
      vertical-align middle
    .item-title
      font-size 12px
      font-weight bold
  .agreeBtn
    width 80vw
    height 0.8rem
    line-height 0.8rem
    margin auto
    background-color #00bcd4
    text-align center
    border-radius 0.1rem
    color #fff
</style>
