<template>
  <div>
    <search
    v-model="value"
    auto-scroll-to-top
    @on-submit="onSubmit"
    ref="search"></search>
    <!-- 备份 完整版事件
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
    -->
    <router-link :to="linkObj.url">
      <group>
        <cell :title="linkObj.title" class="weui-cells-top0">
          <i class="iconfont icon-plus1-copy font-size-17" slot="icon"></i>
        </cell>
      </group>
    </router-link>
    <div class="scroll-list-wrap" :style="{height:SetHeight}">
      <scroll ref="scroll"
        :data="dataList"
        :pullDownRefresh="pullDownRefresh"
        :pullUpLoad="pullUpLoad"
        @pullingDown="onPullingDown"
        @pullingUp="onPullingUp"
      >
        <group class="weui-cells-top0">
          <cell
            v-for="item in dataList"
            :key="item.id"
            :inline-desc='item.desc'>
            <x-icon type="ios-minus-outline" class="cell-x-icon" @click="onDeleteItem(item.id)"></x-icon>
            <span slot="title">
              <span style="vertical-align:middle;">{{item.phone}}</span>
              <badge :text="item.badge" :class="badge"></badge>
            </span>
          </cell>
        </group>
      </scroll>
    </div>
    <swipeout class="vux-1px-tb" style="display:none">
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
    <toast v-model="delSuccess">删除成功</toast>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/scroll.vue'
import mock from '@/common/js/chinese.js'
import { Search, Group, Cell, XButton, Badge, Swipeout, SwipeoutItem, SwipeoutButton, Actionsheet, Toast } from 'vux'

export default {
  name: 'ListView',
  mounted () {
    console.log(this.dataList)
  },
  props: {
    badge: {
      type: String,
      default: 'vux-badge-1'
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
    dataList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {
    Search,
    Group,
    Cell,
    XButton,
    Badge,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    Actionsheet,
    Toast,
    Scroll
  },
  data () {
    return {
      delId: '',
      results: [],
      value: '',
      show: false,
      menus: {
        'title.noop': '确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>',
        delete: '<span style="color:red">删除</span>'
      },
      delSuccess: false,
      leftOptions: {
        showBack: false
      },
      scrollbar: true,
      scrollbarFade: true,
      pullDownRefresh: true,
      pullUpLoad: true
    }
  },
  methods: {
    click (key) {
      console.log(key)
    },
    onDeleteItem (delId) {
      // 点击删除按钮后，删除提示框出现，删除id绑定
      this.show = true
      this.delId = delId
      console.log('on delete')
    },
    onDelete () {
      // 用户点击 删除按钮 提交给父组件 处理
      this.$emit('testDelete', this.delId)
    },
    DeleSuccess () {
      console.log('删除成功')
      this.delSuccess = true
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
      // 向上传递 提交事件
      this.$emit('onSubmit', this.value)
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
    onButtonClick (type) {
      alert('on button click ' + type)
    },
    onPullingDown () {
      // 向上传递事件
      this.$emit('onPullingDown')
    },
    onPullingUp () {
      // 不能在子组件 更改数据 props是单向的
      this.$emit('onPullingUp')
    },
    rebuildScroll () {
      this.nextTick(() => {
        this.$refs.scroll.destroy()
        this.$refs.scroll.initScroll()
      })
    },
    forceUpdate () {
      // 调取scroll的forceUpdate方法
      this.$refs.scroll.forceUpdate()
    }
  },
  computed: {
    scrollbarObj: function () {
      return this.scrollbar ? {fade: this.scrollbarFade} : false
    },
    SetHeight () {
      const WINDOW_HEIGHT = document.documentElement.clientHeight || document.body.clientHeight
      return WINDOW_HEIGHT - mock.scrollComponent.defaultScrollHeightForSub + 'px'
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
.scroll-list-wrap{
  position: relative;
  height: 10rem;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  border-radius: 3px;
  margin-top: 1.17647059em;
  transform: rotate(0deg);
  // overflow: hidden;
}
</style>
<style scoped lang="stylus">
.weui-cells-top0 >>> .vux-no-group-title {
  margin-top 0px
}
</style>
