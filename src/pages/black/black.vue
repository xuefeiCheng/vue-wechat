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
    <router-link to="/black/add">
      <group>
        <cell title="添加黑名单">
          <x-icon type="ios-plus-outline" class="cell-x-icon" slot="icon" style="padding-top:8px"></x-icon>
        </cell>
      </group>
    </router-link>
    <group>
      <cell inline-desc='2018/11/22 15:27:40'>
        <x-icon type="ios-minus-outline" class="cell-x-icon" @click="onDeleteItem"></x-icon>
        <span slot="title">
          <span style="vertical-align:middle;">7615248952</span>
          <badge text="教育培训"></badge>
        </span>
      </cell>
      <cell inline-desc='2018/11/22 15:27:40'>
        <x-icon type="ios-minus-outline" class="cell-x-icon"></x-icon>
        <span slot="title">
          <span style="vertical-align:middle;">17615864102</span>
          <badge text="教育培训"></badge>
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
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { Search, Group, Cell, XButton, Badge, Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'

export default {
  name: 'agree',
  components: {
    WeHeader,
    Search,
    Group,
    Cell,
    XButton,
    Badge,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton
  },
  data () {
    return {
      title: '黑名单列表',
      results: [],
      value: ''
    }
  },
  methods: {
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
</style>
