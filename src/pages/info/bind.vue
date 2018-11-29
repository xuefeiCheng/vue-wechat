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
    <x-button type="primary" class="globalBtn" :disabled="btnState" @click.native="insertUser">确定</x-button>
    <x-button type="primary" class="globalBtn" :disabled="btnState" @click.native="deleUser">取消注册</x-button>
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
  },
  methods: {
    insertUser () {
      sessionStorage.setItem('hasUser', true)
      let targetPath = sessionStorage.getItem('targetPath')
      let redirect = decodeURIComponent(targetPath || '/')
      this.$router.push({// 你需要接受路由的参数再跳转
        path: redirect
      })
    },
    deleUser () {
      sessionStorage.setItem('hasUser', null)
    }
  },
  computed: {
    btnState () {
      return !this.agreeBind
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
</style>
