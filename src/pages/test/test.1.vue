<template>
  <div>
    <we-header :WeTitle="title" :isShow='false'></we-header>
    <swipeout class="vux-1px-tb">
      <swipeout-item transition-mode="follow" v-for="i in 3" :key="i">
        <div slot="right-menu">
          <swipeout-button type="primary" @click.native="onButtonClick('fav')">Y</swipeout-button>
          <swipeout-button type="warn" @click.native="onButtonClick('delete')">R</swipeout-button>
        </div>
        <div slot="content" :class="{'vux-1px-b': i !== 3, 'vux-1px-t': i === 1}" style="padding:12px;">JavaScript is the best language</div>
      </swipeout-item>
    </swipeout>
    <we-header :WeTitle="title1" :leftOptions="leftOptions"></we-header>
    <div class="scroll-list-wrap">
      <scroll ref="scroll"
        :data="items"
        :scrollbar="scrollbarObj"
        :pullDownRefresh="pullDownRefresh"
        :pullUpLoad="pullUpLoad"
        @pullingDown="onPullingDown"
        @pullingUp="onPullingUp"
      >
        <group>
          <cell inline-desc='2018/11/22 15:27:40'>
            <x-icon type="ios-minus-outline" class="cell-x-icon" @click="onDeleteItem"></x-icon>
            <span slot="title">
              <span style="vertical-align:middle;">7615248952</span>
              <badge text="教育培训"></badge>
            </span>
          </cell>
        </group>
      </scroll>
    </div>
  </div>
</template>

<script>
import WeHeader from '@/components/layout/Header'
import Scroll from '@/components/scroll/scroll.vue'
import mock from 'common/js/chinese.js'
import { Swipeout, SwipeoutItem, SwipeoutButton, XButton, Group, Cell, Badge } from 'vux'

export default {
  components: {
    WeHeader,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton,
    Scroll,
    Group,
    Cell,
    Badge
  },
  created () {
    for (let i = 0; i < 2; i++) {
      this.items.push(mock.normalScrollListPage.previousTxt + ++this.itemIndex + mock.normalScrollListPage.followingTxt)
    }
  },
  computed: {
    scrollbarObj: function () {
      return this.scrollbar ? {fade: this.scrollbarFade} : false
    }
  },
  methods: {
    onButtonClick (type) {
      alert('on button click ' + type)
    },
    handleEvents (type) {
      console.log('event: ', type)
    },
    onDeleteItem () {
      this.show = true
      console.log('on delete')
    },
    onPullingDown () {
      // 模拟更新数据
      console.log('pulling down and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.items.unshift(mock.normalScrollListPage.newDataTxt + +new Date())
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 2000)
    },
    onPullingUp () {
      // 更新数据
      console.log('pulling up and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        if (Math.random() > 0.5) {
          // 如果有新数据
          let newPage = []
          for (let i = 0; i < 10; i++) {
            newPage.push(mock.normalScrollListPage.previousTxt + ++this.itemIndex + mock.normalScrollListPage.followingTxt)
          }
          this.items = this.items.concat(newPage)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1500)
    },
    rebuildScroll () {
      this.nextTick(() => {
        this.$refs.scroll.destroy()
        this.$refs.scroll.initScroll()
      })
    }
  },
  data () {
    return {
      disabled: false,
      title: '测试界面',
      title1: 'Bscroll',
      leftOptions: {
        showBack: false
      },
      scrollbar: true,
      scrollbarFade: true,
      pullDownRefresh: true,
      pullUpLoad: true,
      items: [],
      itemIndex: 0
    }
  },
  watch: {
    scrollbarObj: {
      handler () {
        this.rebuildScroll()
      },
      deep: true
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
.demo-content {
  padding: 0.2667rem 0.2667rem;
}
.scroll-list-wrap{
  position: relative;
  height: 10rem;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 3px;
  transform: rotate(0deg);
  overflow: hidden;
}
</style>
