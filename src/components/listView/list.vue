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
    <router-link :to="linkObj.url">
      <group>
        <cell :title="linkObj.title" class="weui-cells-top0">
          <i class="iconfont icon-plus1-copy font-size-17" slot="icon"></i>
        </cell>
      </group>
    </router-link>
    <group>
      <cell
        v-for="item in this.data"
        :key="item"
        :inline-desc='item.desc'>
        <x-icon type="ios-minus-outline" class="cell-x-icon" @click="onDeleteItem"></x-icon>
        <span slot="title">
          <span style="vertical-align:middle;">{{item.phone}}</span>
          <badge :text="item.badge" :class="badge"></badge>
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
              <badge text="教育培训"></badge>
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
  name: 'ListView',
  props: {
    badge: {
      type: String,
      default: 'vux-badge-1'
    },
    title: {
      type: String,
      default: '黑名单列表'
    },
    linkObj: {
      type: Object,
      default () {
        return {
          title: '新增黑名单',
          url: '/black/add'
        }
      }
    },
    data: {
      type: Array,
      default: function () {
        return [{
          phone: '17615864102',
          badge: '教育培训',
          desc: '2018/11/22 15:27:40'
        }, {
          phone: '17615864992',
          badge: '快递送餐',
          desc: '2018/11/22 15:27:40'
        }]
      }
    }
  },
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
.vux-badge-1 {
  background: #f74c31;
}
.vux-badge-2 {
  background: #008000;
}
</style>
