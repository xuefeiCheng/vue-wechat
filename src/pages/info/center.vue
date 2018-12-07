<template>
  <div>
    <div class="center" :style="{background:centerBg}">
      <div class="person">
        <div class="per-middle"><i class="BigSize iconfont icon-duorenhuiyi font-color-FFF"></i></div>
      </div>
      <div class="personNum">{{personNum}}</div>
    </div>
    <group title="通知提醒">
      <!-- @on-change="change" -->
      <radio :options="radioList" v-model="checkVal" @click.native="onClick"></radio>
    </group>
  </div>
</template>

<script>
import { Radio, Group } from 'vux'
export default {
  components: {
    Radio,
    Group
  },
  data () {
    return {
      checkVal: '001',
      personNum: '17615895410',
      centerBg: 'url("static/img/info/my_bg.png") no-repeat center center',
      radioList: [{
        icon: 'static/img/black/addblack_400.png',
        key: '001',
        value: '不通知'
      }, {
        icon: 'static/img/black/addblack_400.png',
        key: '002',
        value: '短信拦截通知'
      }, {
        icon: 'static/img/black/addblack_400.png',
        key: '003',
        value: '微信拦截通知'
      }]
    }
  },
  methods: {
    onClick (value, label) {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果更改成功
          this.$vux.toast.show({
            text: '更改成功'
          })
        } else {
          // 如果更改失败
          this.$vux.toast.show({
            type: 'warn',
            text: '稍后再试'
          })
          this.init()
        }
      }, 20)
    },
    init () {
      setTimeout(() => {
        this.checkVal = '001'
      }, 2000)
    }
  }
}
</script>

<style scoped lang="stylus">
.center
  height 9rem
  background-size cover
  .person
    box-sizing border-box
    display table
    height 5rem
    width 3rem
    margin auto
    .per-middle
      display table-cell
      vertical-align middle
      .BigSize
        font-size 3rem
  .personNum
    box-sizing border-box
    color #ffffff
    font-size 28px
    margin auto
    text-align center
    width 6rem
</style>
