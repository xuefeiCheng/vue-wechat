<template>
  <div>
    <we-header :WeTitle="title" :isShow='false'></we-header>
    <div class="info">开通、取消业务请通过10086或移动营业厅</div>
    <div class="info warnInfo" v-show="bindState">您已绑定17615839470,继续帮顶将会替换已绑定手机号!</div>
    <group title="号码绑定">
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      <x-input title="发送验证码" class="weui-vcode">
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
import { Group, Cell, Alert, TransferDomDirective as TransferDom, AlertModule, XInput, XButton, Divider, Tabbar, CheckIcon } from 'vux'
export default {
  name: 'bind',
  directives: {
    TransferDom
  },
  components: {
    WeHeader,
    Group,
    Cell,
    Alert,
    XInput,
    XButton,
    Divider,
    Tabbar,
    CheckIcon
  },
  data () {
    return {
      title: '号码绑定',
      msg: 'Hello World!',
      bindState: false,
      show: false,
      showMe: '显示',
      agreeBind: true,
      text: '开通即代表同意<<"绿盾"防护的服务条款>>',
      Congratulations: 'hello',
      BtitleList: [
        {
          'title': '“绿盾”为用户默认开启拦截功能的骚扰电话类别包括：',
          'isShow': false,
          'itemList': [
            {
              'title': '疑似诈骗类：',
              'content': '被系统确认或被大量用户标记为诈骗电话的来电。'
            },
            {
              'title': '响一声类：',
              'content': '被系统确认或被大量用户标记为诈骗电话的来电。'
            },
            {
              'title': '骚扰电话类：',
              'content': '被系统确认或被大量用户标记为诈骗电话的来电。'
            },
            {
              'title': '商业营销类：',
              'content': '被系统确认或被大量用户标记为诈骗电话的来电。'
            }
          ]
        },
        {
          'title': '“绿盾”还提供对以下类型的骚扰电话的拦截功能，需要用户手动开启：',
          'isShow': false,
          'itemList': [
            {
              'title': '房产中介：',
              'content': '被系统确认或被大量用户标记为诈骗电话的来电。'
            },
            {
              'title': '保险理财：',
              'content': '被系统确认或被大量用户标记为诈骗电话的来电。'
            },
            {
              'title': '教育培训：',
              'content': '被系统确认或被大量用户标记为诈骗电话的来电。'
            },
            {
              'title': '招聘猎头：',
              'content': '被系统确认或被大量用户标记为诈骗电话的来电。'
            }
          ]
        },
        {
          'title': '用户可通过“绿盾”业务微信公众号等渠道选择设置以下三种拦截通知方式之一：',
          'isShow': true,
          'itemList': [
            {
              'title': '短信通知（默认）：',
              'content': '被系统确认或被大量用户标记为诈骗电话的来电。'
            },
            {
              'title': '微信通知：',
              'content': '被系统确认或被大量用户标记为诈骗电话的来电。'
            },
            {
              'title': '不通知：',
              'content': '被系统确认或被大量用户标记为诈骗电话的来电。'
            }
          ]
        }
      ]
    }
  },
  methods: {
    onShow () {
      console.log('show')
    },
    onHide () {
      console.log('hide')
    },
    handleSwitch (newValue, oldVlue) {
      console.log(newValue + '-->' + oldVlue)
    },
    showPlugin1 () {
      this.$vux.alert.show({
        title: 'VUX is Cool',
        content: 'hhh',
        onShow () {
          console.log('Plugin: I\'m showing')
        },
        onHide () {
          console.log('Plugin: I\'m hiding now')
        }
      })
    },
    showPlugin2 () {
      AlertModule.show({
        title: 'VUX is Cool',
        content: 'Do you agree?',
        onShow () {
          console.log('Module: I\'m showing')
        },
        onHide () {
          console.log('Module: I\'m hiding now')
        }
      })
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
