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
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'vux'

export default {
  components: {
    WeHeader,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton
  },
  methods: {
    onButtonClick (type) {
      alert('on button click ' + type)
    },
    handleEvents (type) {
      console.log('event: ', type)
    }
  },
  data () {
    return {
      disabled: false,
      title: '测试界面'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
.demo-content {
  padding: 0.2667rem 0.2667rem;
}
</style>
