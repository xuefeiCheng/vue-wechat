<template>
  <div>
    <div class="add-box">
      <div class="box-top">
        <div class="top-row input-group">
          <input class="qh form-control" placeholder="区号"/>
          <input class="phone form-control border-noRedius-r" ref="phone" placeholder="手机或固话号" v-model="balckPhone"/>
          <div class='lxr border-radius-12 border-noRedius-l' @click="showLianxiren"><i class="iconfont icon-lianxiren font-size-30 font-color-FFF"></i></div>
        </div>
      </div>
      <div class="box-info">手机无需区号，添加后，黑名单中的号码来电会被直接拦截</div>
      <div class="box-middle">
        <div class="coloumn" v-for="(img, index) in imgList" :key="index">
          <div class="reson-item" v-for="i in img" :key="i.value" @click="selectBlackReason(i)">
            <img class="reson-item-img" :src="i.src[0]" alt="img.title" v-show='!i.state'>
            <img class="reson-item-img" :src="i.src[1]" alt="img.title" v-show='i.state'>
            <div class="reson-item-title">{{i.title}}</div>
          </div>
        </div>
      </div>
      <div class="box-bottom">
        <x-button type="primary" class="globalBtn" @click.native="onAdd">立即添加</x-button>
        <x-button type="default" class="globalBtn" link="/black/list">黑名单列表</x-button>
      </div>
    </div>
    <div v-transfer-dom class="checklist">
      <confirm v-model="show"
      title="呼叫记录"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <checklist :options="inlineDescList" v-model="initDescList" :max="1" @on-change="onChange"></checklist>
      </confirm>
    </div>
  </div>
</template>

<script>
import { XButton, Confirm, TransferDomDirective as TransferDom, Checklist } from 'vux'
export default {
  name: 'addBlack',
  directives: {
    TransferDom
  },
  components: {
    XButton,
    Confirm,
    Checklist
  },
  data () {
    return {
      show: false, // 通话记录弹框是否展示
      balckPhone: '', // 黑名单号码
      reasonStr: '', // 拉黑原因
      initDescList: [], // 通话记录默认选择
      inlineDescList: [
        {key: '1', value: '15715262025', inlineDesc: '2018/11/31 15:45:37'},
        {key: '2', value: '14715486282', inlineDesc: '2018/11/31 15:45:37'},
        {key: '3', value: '16515823952', inlineDesc: '2018/11/31 15:45:37'}
      ],
      imgList: [
        [{
          value: '1',
          state: false,
          src: ['static/img/black/addblack_swindle.png', 'static/img/black/addblack_swindle_press.png'],
          title: '诈骗电话'
        },
        {
          value: '2',
          state: false,
          src: ['static/img/black/addblack_harass.png', 'static/img/black/addblack_harass_press.png'],
          title: '恶意骚扰'
        },
        {
          value: '3',
          state: false,
          src: ['static/img/black/addblack_medi.png', 'static/img/black/addblack_medi_press.png'],
          title: '房产中介'
        },
        {
          value: '4',
          state: false,
          src: ['static/img/black/addblack_ad.png', 'static/img/black/addblack_ad_press.png'],
          title: '广告推销'
        }],
        [{
          value: '5',
          state: false,
          src: ['static/img/black/addblack_promote.png', 'static/img/black/addblack_promote_press.png'],
          title: '保险理财'
        },
        {
          value: '6',
          state: false,
          src: ['static/img/black/addblack_edu.png', 'static/img/black/addblack_edu_press.png'],
          title: '教育培训'
        },
        {
          value: '7',
          state: false,
          src: ['static/img/black/addblack_express.png', 'static/img/black/addblack_express_press.png'],
          title: '快递送餐'
        },
        {
          value: '8',
          state: false,
          src: ['static/img/black/addblack_other.png', 'static/img/black/addblack_other_press.png'],
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
      console.log('选择的是：' + i.title + '，值为：' + i.value)
      this.reasonStr = i.value
    },
    setFoucs () {
      // 若没有数据 设置焦点到 手机号或区号
      this.$refs.phone.focus()
    },
    showLianxiren () {
      this.show = true
      this.initDescList = []
    },
    onCancel () {
      console.log('on cancel')
      this.balckPhone = ''
    },
    onConfirm (msg) {
      console.log('on confirm')
      if (msg) {
        alert(msg)
      }
      console.log('在最近通话记录中选择的黑名单号码为：' + this.balckPhone)
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    onAdd () {
      if (this.check()) {
        this.setFoucs()
      } else {
        console.log('必填项输入符合规范')
        this.$vux.toast.show({text: '添加成功'})
        setTimeout(() => {
          // 跳转 黑名单列表
          this.$router.push('/black/list')
        }, 2000)
      }
    },
    onChange (val, label) {
      // val label 为集合
      console.log('change', val, label)
      this.balckPhone = label[0]
    },
    check () {
      let flag
      this.balckPhone === '' || this.reasonStr === '' ? flag = true : flag = false
      if (flag) {
        this.$vux.toast.show({
          type: 'warn',
          position: 'middle',
          text: '必填不能为空'
        })
      }
      return flag
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/variables.styl'
.checklist >>> .weui-dialog__bd {
  height: 144px;
  overflow-y: auto;
}
.checklist >>> .weui-cell {
  padding: 0;
}
.checklist >>> .weui-cell__bd {
  text-align: left;
  color: #666;
}
.checklist >>> .vux-label-desc {
  color: #999;
}
.add-box
  width 100vw
  height 100vh
  .box-top
    height 3.5467rem
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
  .box-info
    height 0.5333rem
    line-height 0.5333rem
    background #23d4ea
    padding-left 0.1333rem
    color #fff
  .box-middle
    height 6.4rem
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
