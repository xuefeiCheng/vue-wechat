<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div
      v-for="item in problemList"
      :key="item.id">
      <group class="weui-cells-top0">
        <self-cell :item="item"></self-cell>
      </group>
    </div>
    <group>
      <cell title="号码申诉" link="/"></cell>
    </group>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import SelfCell from '@/components/selfCell'
import { Group, Cell } from 'vux'
export default {
  components: {
    WeHeader,
    SelfCell,
    Group,
    Cell
  },
  data () {
    return {
      title: '常见问题',
      problemList: [
        {
          id: 1,
          showContent: false,
          question: 'Q:如何开通或取消“绿盾”防护？',
          answer: 'A:“绿盾”防护目前仅支持浙江移动用户使用，您可通过10086、移动营业厅开通，或者您可通过微信公众号自主申请开通“绿盾”防护，在关注公众号后，绑定手机号时自主申请开通即可，24小时内将完成开通，无需重复申请。<br/>如不再需要本业务，您可通过10086或移动营业厅取消本业务'
        },
        {
          id: 2,
          showContent: false,
          question: 'Q:什么是分类拦截功能？',
          answer: 'A:分类拦截功能可对疑似诈骗、违法犯罪、响一声、骚扰电话、广告推销、房产中介、保险理财、教育 培训、招聘猎头9种分类的来电实现个性化拦截。'
        },
        {
          id: 3,
          showContent: false,
          question: 'Q:为什么朋友打给我电话被拦截了？',
          answer: 'A:可能他的号码被标记为骚扰电话。在“白名单设置”中加入该号码，就可正常呼入了。'
        },
        {
          id: 4,
          showContent: false,
          question: 'Q:如何把某些号码添加进黑名单？',
          answer: 'A:在“黑名单设置”中添加该号码，这个号码就会被拦截了。'
        },
        {
          id: 5,
          showContent: false,
          question: 'Q:如何查看我的来电情况？',
          answer: 'A:每次拦截后，都会通过短信给您发送拦截通知，同时通过菜单“拦截记录查询”，可以查询最近一个月的拦截记录；'
        },
        {
          id: 6,
          showContent: false,
          question: 'Q:号码被误标记了怎么办？',
          answer: 'A:“绿盾”防护在分类拦截中所使用的电话号码标记数据来自第三方合作企业，由其用户自行标记产生。如您号码存在被误标记或被他人恶意标记的情况，您可进行号码申述，我们将联系第三方合作企业进行核实并对申述的号码进行相应处理'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.weui-cells-top0 >>> .vux-no-group-title {
  margin-top 0px
}
</style>
