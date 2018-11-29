<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="add-box">
      <div class="box-top">
        <div class="box-info">
          <i class="iconfont icon-light font-color-FFF"></i>
          <span>共为您拦截0次来话</span>
        </div>
      <div class="box-middle">
         <group class="weui-cells-top0">
          <x-switch title="疑似诈骗" v-model="value" @on-change="onSwitchChange"></x-switch>
          <x-switch title="骚扰电话" v-model="value"></x-switch>
          <x-switch title="违法犯罪" v-model="value"></x-switch>
          <x-switch title="响一声" v-model="value"></x-switch>
          <x-switch title="广告推销" v-model="value"></x-switch>
          <x-switch title="房产中介" v-model="value"></x-switch>
          <x-switch title="保险理财" v-model="value"></x-switch>
          <x-switch title="教育培训" v-model="value"></x-switch>
          <x-switch title="招聘猎头" v-model="value"></x-switch>
        </group>
        <group>
          <cell title="拦截阈值" link="/classify/set" inline-desc="被标记超过一定次数时拦截">
            <span slot="value" class="font-size-12">50次（建议值）</span>
          </cell>
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
      title: '拦截记录查询'
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
.add-box
  width 100vw
  height 100vh
  .box-top
    height 5rem
    background $bgColor
    .box-info
      height 0.7467rem
      line-height 0.72rem
      background #23d4ea
      color #fff
      text-align center
</style>
