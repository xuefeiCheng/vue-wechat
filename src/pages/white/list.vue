<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <search
    @result-click="resultClick"
    @on-change="getResult"
    :results="results"
    v-model="value"
    auto-scroll-to-top
    @on-focus="onFocus"
    @on-cancel="onCancel"
    @on-submit="onSubmit"
    ref="search"></search>
    <router-link to="/white/add">
      <group>
        <cell title="添加白名单" class="weui-cells-top0">
          <i class="iconfont icon-plus1-copy font-size-17" slot="icon"></i>
        </cell>
      </group>
    </router-link>
    <group>
      <cell inline-desc='2018/11/22 15:27:40'>
        <x-icon type="ios-minus-outline" class="cell-x-icon" @click="onDeleteItem"></x-icon>
        <span slot="title">
          <span style="vertical-align:middle;">7615248952</span>
          <badge text="教育培训" class="bgColorGreen"></badge>
        </span>
      </cell>
      <cell inline-desc='2018/11/22 15:27:40'>
        <x-icon type="ios-minus-outline" class="cell-x-icon"></x-icon>
        <span slot="title">
          <span style="vertical-align:middle;">17615864102</span>
          <badge text="教育培训" class="bgColorGreen"></badge>
        </span>
      </cell>
    </group>
    <swipeout class="vux-1px-tb">
      <swipeout-item transition-mode="follow" v-for="i in 3" :key="i">
        <div slot="right-menu">
          <swipeout-button type="warn" @click.native="onButtonClick('delete')">删除</swipeout-button>
        </div>
        <div slot="content" :class="{'vux-1px-b': i !== 3, 'vux-1px-t': i === 1}">
          <cell inline-desc='2018/11/22 15:27:40'>
            <span slot="title">
              <span style="vertical-align:middle;font-size:17px;">7615248952</span>
              <badge text="教育培训" class="bgColorGreen"></badge>
            </span>
          </cell>
        </div>
      </swipeout-item>
    </swipeout>
    <actionsheet v-model="show" :menus="menus" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    <toast v-model="showSuccess">删除成功</toast>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { Search, Group, Cell, XButton, Badge, Swipeout, SwipeoutItem, SwipeoutButton, Actionsheet, Toast } from 'vux'

export default {
  name: 'ListWhite',
  components: {
    WeHeader,
    Search,
    Group,
    Cell,
    XButton,
    Badge,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    Actionsheet,
    Toast
  },
  data () {
    return {
      title: '白名单列表',
      results: [],
      value: '',
      show: false,
      menus: {
        'title.noop': '确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>',
        delete: '<span style="color:red">删除</span>'
      },
      showSuccess: false
    }
  },
  methods: {
    click (key) {
      console.log(key)
    },
    onDelete () {
      this.showSuccess = true
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    },
    onDeleteItem () {
      this.show = true
      console.log('on delete')
    },
    onButtonClick (type) {
      alert('on button click ' + type)
    }
  }
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~vux/src/styles/1px.less';
.vux-search-fixed {
  position: relative !important;
  top: 0 !important;
}
.vux-x-icon {
  fill: #F70968;
  fill: #f74c31;
}
</style>
