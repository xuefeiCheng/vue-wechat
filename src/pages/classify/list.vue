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
            <div class="classifyIcon" :class="classifyState.class"></div>
          </div>
          <div class='row-right'>
            <div class="classifyCon font-color-FFF font-size-17">
              <div class="con-top">{{classifyState.stateMsg}}</div>
              <div class="con-top con-top-button" @click="onSubmitState">{{classifyState.btnMsg}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-middle" v-show="stateFlag">
         <group class="weui-cells-top0">
          <x-switch title="疑似诈骗" v-model="value"></x-switch>
          <x-switch title="骚扰电话" v-model="value"></x-switch>
          <x-switch title="违法犯罪" v-model="value"></x-switch>
          <x-switch title="响一声" v-model="value"></x-switch>
          <x-switch title="广告推销" v-model="value"></x-switch>
          <x-switch title="房产中介" v-model="value"></x-switch>
          <x-switch title="保险理财" v-model="value"></x-switch>
          <x-switch title="教育培训" v-model="value"></x-switch>
          <x-switch title="招聘猎头" v-model="value"></x-switch>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { XSwitch, Group } from 'vux'
const classify = {
  true: {
    stateMsg: '骚扰拦截已开启',
    btnMsg: '关闭拦截',
    class: 'bgOne'
  },
  false: {
    stateMsg: '骚扰拦截已关闭',
    btnMsg: '开启拦截',
    class: 'bgTwo'
  }
}
export default {
  components: {
    WeHeader,
    XSwitch,
    Group
  },
  data () {
    return {
      title: '拦截分类设置',
      stateFlag: true,
      classifyState: classify[true],
      value: true
    }
  },
  methods: {
    onSubmitState () {
      this.stateFlag = !this.stateFlag
      this.classifyState = classify[this.stateFlag]
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
.bgOne
  background url('/static/img/classify/classify_icon_on.png') no-repeat center center
.bgTwo
  background url('/static/img/classify/classify_icon_off.png') no-repeat center center
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
