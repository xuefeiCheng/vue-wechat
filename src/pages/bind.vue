<template>
  <div>
    <we-header :WeTitle="title" :isShow='false'></we-header>
    <div class="box">
      <div class="Atitle">《“绿盾”骚扰电话防护服务条款》</div>
      <p class="font-indent acticle">
        “绿盾”骚扰电话防护服务(下文简称“绿盾”)根据系统智能分析出的骚扰电话信息以及由第三方企业提供的号码标记信息，
        经用户授权，对由用户认定对其构成骚扰的特定类别的骚扰电话来电进行拦截，
        并根据用户的设定向用户发出拦截通知。
      </p>
      <div v-for="(item, index) of BtitleList" :key="index">
        <div v-if="item.isShow">
          <p>用户可通过“绿盾”业务微信公众号等渠道开启或关闭上述各类骚扰来电的拦截功能，并可修改各类骚扰电话的标记阈值（当某电话号码的用户标记数超过该阈值时，该电话号码会被系统认定为该类型骚扰电话）。</p>
          <p>“绿盾”还提供黑/白名单功能，用户可通过“绿盾”业务微信公众号等渠道设置黑名单和白名单，黑名单号码的来电将在云端被直接拦截，白名单号码的来电将在云端被直接放行。</p>
        </div>
        <h4 class="Btitle">{{item.title}}</h4>
        <div class="item" v-for="(innerItem, index) of item.itemList" :key="index">
          <span class="square"></span>
          <span class="item-title">{{innerItem.title}}</span>
          <span class="item-content">
            {{innerItem.content}}
          </span>
        </div>
      </div>
      <div class="Atitle text-align-l">“绿盾”免责条款：</div>
      <p class="font-indent acticle">
        “绿盾”在骚扰电话拦截中所使用的电话号码标记数据来自第三方合作企业，由其用户自行标记产生。“绿盾”对上述第三方号码标记数据持中立态度，不对其真实性、准确性、有效性以及由此引发的误拦行为承担法律责任。请您充分了解上述风险，谨慎决定是否开通“绿盾”骚扰电话拦截功能。
        您同意本条款即代表您授权“绿盾”对你的所有来电进行过滤，对骚扰来电进行拦截和提醒，并同意承担潜在的误拦风险。
        “绿盾”将尽最大努力提供精准的骚扰电话拦截服务，并不断完善产品功能。
      </p>
      <div class="agreeBtn">确定并绑定手机号</div>
    </div>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
export default {
  name: 'bind',
  components: {
    WeHeader
  },
  data () {
    return {
      title: '号码绑定',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/variables.styl'
.text-align-l
    text-align left !important
.box
  padding 0.2rem
  padding-top 1rem
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
    height 45px
    line-height 45px
    .square
      display inline-block
      height 12px
      width 12px
      background-color $bgColor
      vertical-align middle
    .item-title
      font-size 12px
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
