<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="add-box">
      <div class="box-top">
        <div class="box-info">
          <i class="iconfont icon-light font-color-FFF"></i>
          <span>开启的分类来电时将为您拦截！点击分类修改标记次数！</span>
        </div>
        <div class="top-row input-group">
          <input class="qh form-control" placeholder="区号"/>
          <input class="phone form-control border-noRedius-r" ref="phone" placeholder="手机或固话号" />
          <div class='lxr border-radius-12 border-noRedius-l'><i class="iconfont icon-lianxiren font-size-30 font-color-FFF"></i></div>
        </div>
        <div class="top-row input-group">
          <input class="all form-control" placeholder="请填写备注（6字以内）"/>
        </div>
      </div>
      <div class="box-bottom">
        <x-button type="primary" class="globalBtn" @click.native="setFoucs">立即添加</x-button>
        <x-button type="default" class="globalBtn" link="/white/list">白名单列表</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { XButton } from 'vux'
export default {
  components: {
    WeHeader,
    XButton
  },
  data () {
    return {
      title: '拦截分类设置'
    }
  },
  methods: {
    setFoucs () {
      // 若没有数据 设置焦点到 手机号或区号
      this.$refs.phone.focus()
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
  .box-top
    height 5rem
    background $bgColor
    .top-row
      box-sizing border-box
      display flex
      height 2.2rem
      justify-content center
      padding-top 1rem
      .qh
        width 1.5rem
        margin-right 0.2667rem
      .phone
        width 5rem
      .lxr
        background #23d4ea
        border-left: 1px solid #fff
        line-height 1.2rem
        width 1rem
      .all
        width 8.5rem
  .box-info
    height 0.7467rem
    line-height 0.72rem
    background #23d4ea
    padding-left 0.1333rem
    color #fff
    text-align center
</style>
