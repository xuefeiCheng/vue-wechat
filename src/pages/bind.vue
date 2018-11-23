<template>
  <div>
    <we-header :WeTitle="title" :isShow='false'></we-header>
    <div class="info">开通、取消业务请通过10086或移动营业厅</div>
    <div class="info warnInfo" v-show="bindState">您已绑定17615839470,继续帮顶将会替换已绑定手机号!</div>
    <group title="号码绑定">
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      <x-input title="验证码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
    </group>
    <x-button type="primary" style="margin-top:1em;width:80vw">确定</x-button>
    <tabbar>
      <div class="agreeBindDiv">
        <input type="checkbox" v-model="agreeBind" />{{text}}
      </div>
    </tabbar>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { Group, XInput, XButton, Tabbar } from 'vux'
export default {
  name: 'bind',
  components: {
    WeHeader,
    Group,
    XInput,
    XButton,
    Tabbar
  },
  data () {
    return {
      title: '号码绑定',
      bindState: false,
      agreeBind: true,
      text: '开通即代表同意<<"绿盾"防护的服务条款>>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/variables.styl'
.text-align-l
    text-align left !important
.info
  position relative
  width 100vw
  height 1rem
  line-height 1rem
  padding-left  0.1rem
  background-color #97e6f1
  color $bgColor
.warnInfo
  color $defaultColor
  background-color $warn
.agreeBindDiv
  height .7rem
  line-height .7rem
  padding .2rem .5rem
.box
  padding 0.2rem
  line-height 0.4rem
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
    // height 0.6rem
    line-height 0.6rem
    font-weight bold
    margin-bottom 0.1rem
  .item
    display inline-block
    height 0.6rem
    line-height 0.6rem
    .square
      display inline-block
      height 0.16rem
      width 0.16rem
      background-color $bgColor
      vertical-align middle
    .item-title
      font-size 0.16rem
      font-weight bold
  .agreeBtn
    width 80vw
    height 0.8rem
    line-height 0.8rem
    margin auto
    background-color $bgColor
    text-align center
    border-radius 0.1rem
    color #fff
</style>
