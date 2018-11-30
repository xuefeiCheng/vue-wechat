<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="add-box">
      <group class="weui-cells-top0">
        <cell title="疑似诈骗" @click.native="onClick" is-link value="200次"></cell>
        <cell title="骚扰电话" value="200次" is-link></cell>
        <cell title="违法犯罪" value="200次" is-link></cell>
        <cell title="响一声" value="200次" is-link></cell>
        <cell title="广告推销" value="200次" is-link></cell>
        <cell title="房产中介" value="200次" is-link></cell>
        <cell title="保险理财" value="200次" is-link></cell>
        <cell title="教育培训" value="200次" is-link></cell>
        <cell title="招聘猎头" value="200次" is-link></cell>
      </group>
    </div>
    <div v-transfer-dom>
      <confirm v-model="show"
      ref="confirm"
      title="拦截次数设置"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
      <div class="top-row input-group">
        <div class='lxr border-noRedius-r'><span class="font-color-FFF">大于</span></div>
        <input class="phone form-control border-noRedius-l"  value="200" v-model="ljValue"/>
      </div>
      <div class="box-info"><i class="iconfont icon-jinggao"></i>被标记次数大于设置值才会进行拦截!</div>
      </confirm>
    </div>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { Group, Cell, TransferDomDirective as TransferDom, Confirm } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    WeHeader,
    Group,
    Cell,
    Confirm
  },
  data () {
    return {
      title: '拦截阈值设置',
      show: false,
      ljValue: 200
    }
  },
  methods: {
    onClick () {
      this.show = !this.show
    },
    onShow () {
      this.$refs.confirm.setInputValue('')
    },
    onConfirm (value) {
      this.$refs.confirm.setInputValue('')
      this.$vux.toast.text('input value: ' + this.ljValue)
    },
    onCancel () {
      console.log('on cancel')
    },
    onHide () {
      console.log('on hide')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/variables.styl'
.weui-cells-top0 >>> .vux-no-group-title {
  margin-top 2px
}
.top-row >>> .form-control {
  background #00000000
  border-color #808080
  border-radius 3px
  color #808080
}
.add-box
  width 100vw
  height 100vh
.top-row
    box-sizing border-box
    display flex
    height 1.2rem
    justify-content center
    margin-top 10px
    .phone
      width 4.6rem
    .lxr
      background #808080
      border 1px solid #808080
      border-right: 1px solid #fff
      border-radius 3px
      line-height 1.2rem
      width 1.5rem
.box-info
  background #23d4ea
  border-radius 3px
  color #fff
  line-height 0.8rem
  padding 0 2px 0 4px
  text-align left
  margin-top 10px
  font-size 12px
</style>
