<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="add-box">
      <div class="box-middle" v-show="stateFlag">
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
          <cell title="拦截阈值" value="200次" islink></cell>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { Group, Cell } from 'vux'
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
    Group,
    Cell
  },
  data () {
    return {
      title: '拦截阈值设置',
      stateFlag: true,
      classifyState: classify[true],
      value: true
    }
  },
  methods: {
    onSubmitState () {
      this.stateFlag = !this.stateFlag
      this.classifyState = classify[this.stateFlag]
    },
    onSwitchChange (value) {
      console.log('change-->' + value)
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
</style>
