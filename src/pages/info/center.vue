<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="center">
      <div class="person">
        <div class="per-middle"><i class="BigSize iconfont icon-duorenhuiyi font-color-FFF"></i></div>
      </div>
      <div class="personNum">{{personNum}}</div>
    </div>
    <group title="通知提醒">
      <radio :options="radioList" value="001" @on-change="change"></radio>
    </group>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { Radio, Group } from 'vux'
export default {
  components: {
    WeHeader,
    Radio,
    Group
  },
  data () {
    return {
      title: '个人中心',
      personNum: '17615895410',
      radioList: [{
        icon: '/static/img/black/addblack_400.png',
        key: '001',
        value: '不通知'
      }, {
        icon: '/static/img/black/addblack_400.png',
        key: '002',
        value: '短信拦截通知'
      }, {
        icon: '/static/img/black/addblack_400.png',
        key: '003',
        value: '微信拦截通知'
      }]
    }
  },
  methods: {
    change (value, label) {
      console.log('change:', value, label)
    }
  }
}
</script>

<style scoped lang="stylus">
.center
  height 9rem
  background url(/static/img/info/my_bg.png) no-repeat center center
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
