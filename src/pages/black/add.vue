<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="add-box">
      <div class="box-top">
        <div></div>
      </div>
      <div class="box-info">手机无需区号，添加后，黑名单中的号码来电会被直接拦截</div>
      <div class="box-middle">
        <div class="coloumn" v-for="( img, index ) in imgList" :key="index">
          <div class="reson-item" v-for="i in img" :key="i.value" @click="selectBlackReason(i)">
            <img class="reson-item-img" :src="i.src[0]" alt="img.title" v-show='!i.state'>
            <img class="reson-item-img" :src="i.src[1]" alt="img.title" v-show='i.state'>
            <div class="reson-item-title">{{i.title}}</div>
          </div>
        </div>
      </div>
      <div class="box-bottom">
        <x-button type="primary" style="margin-top:1em;width:80vw">立即添加</x-button>
        <x-button type="default" style="margin-top:1em;width:80vw">黑名单列表</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { XButton } from 'vux'
export default {
  name: 'addBlack',
  components: {
    WeHeader,
    XButton
  },
  data () {
    return {
      title: '新增黑名单',
      imgList: [
        [{
          value: '1',
          state: false,
          src: ['/static/img/black/addblack_swindle.png', '/static/img/black/addblack_swindle_press.png'],
          title: '诈骗电话'
        },
        {
          value: '2',
          state: false,
          src: ['/static/img/black/addblack_harass.png', '/static/img/black/addblack_harass_press.png'],
          title: '恶意骚扰'
        },
        {
          value: '3',
          state: false,
          src: ['/static/img/black/addblack_medi.png', '/static/img/black/addblack_medi_press.png'],
          title: '房产中介'
        },
        {
          value: '4',
          state: false,
          src: ['/static/img/black/addblack_ad.png', '/static/img/black/addblack_ad_press.png'],
          title: '广告推销'
        }],
        [{
          value: '5',
          state: false,
          src: ['/static/img/black/addblack_promote.png', '/static/img/black/addblack_promote_press.png'],
          title: '保险理财'
        },
        {
          value: '6',
          state: false,
          src: ['/static/img/black/addblack_edu.png', '/static/img/black/addblack_edu_press.png'],
          title: '教育培训'
        },
        {
          value: '7',
          state: false,
          src: ['/static/img/black/addblack_express.png', '/static/img/black/addblack_express_press.png'],
          title: '快递送餐'
        },
        {
          value: '8',
          state: false,
          src: ['/static/img/black/addblack_other.png', '/static/img/black/addblack_other_press.png'],
          title: '其他'
        }]
      ]
    }
  },
  methods: {
    initBlackList () {
      this.imgList.forEach(element => {
        element.forEach(e => {
          e.state = false
        })
      })
    },
    selectBlackReason (i) {
      this.initBlackList()
      this.$nextTick(() => {
        i.state = true
        // console.log(i)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/variables.styl'
.add-box
  width 100vw
  height 100vh
  background #cccccc
  .box-top
    height 20%
    background $bgColor
  .box-info
    height 0.5333rem
    line-height 0.5333rem
    background #23d4ea
    padding-left 0.1333rem
    color #fff
  .box-middle
    height 36%
    background #ffffff
    display: flex
    flex-wrap: wrap
    align-content: center
    .coloumn-basis
      flex-basis: 100%
    .coloumn
      flex-basis: 100%
      display: flex
      justify-content: center
      .reson-item
        width 2.4rem
        height 2.4rem
        .reson-item-img
          width 60%
          padding 0 20%
        .reson-item-title
          width 100%
          text-align center
</style>
