<template>
  <div>
    <div class="add-box">
      <div class="box-top">
        <div class="top-row input-group">
          <input class="qh form-control" placeholder="区号"/>
          <input class="phone form-control border-noRedius-r" ref="phone" placeholder="手机或固话号" v-model="whtiePhone"/>
          <div class='lxr border-radius-12 border-noRedius-l' @click="showLianxiren"><i class="iconfont icon-lianxiren font-size-30 font-color-FFF"></i></div>
        </div>
        <div class="top-row input-group">
          <input class="all form-control" ref="remark" placeholder="请填写备注（6字以内）" v-model="remark"/>
        </div>
      </div>
      <div class="box-info">添加后，白名单中的号码不会被拦截</div>
      <div class="box-bottom">
        <x-button type="primary" class="globalBtn" @click.native="onAdd">立即添加</x-button>
        <x-button type="default" class="globalBtn" link="/white/list">白名单列表</x-button>
      </div>
    </div>
    <div v-transfer-dom class="checklist">
      <confirm v-model="show"
      title="呼叫记录"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <checklist :options="inlineDescList" v-model="inlineDescListValue" :max="1" @on-change="onChange"></checklist>
      </confirm>
    </div>
  </div>
</template>

<script>
import { XButton, Confirm, TransferDomDirective as TransferDom, Checklist } from 'vux'
export default {
  name: 'addWhite',
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
      show: false,
      whtiePhone: '',
      remark: '',
      inlineDescList: [
        {key: '1', value: '15715262025', inlineDesc: '2018/11/31 15:45:37'},
        {key: '2', value: '14715486282', inlineDesc: '2018/11/31 15:45:37'},
        {key: '3', value: '16515823952', inlineDesc: '2018/11/31 15:45:37'},
        {key: '4', value: '16515823952', inlineDesc: '2018/11/31 15:45:37'},
        {key: '5', value: '16515823952', inlineDesc: '2018/11/31 15:45:37'}
      ],
      inlineDescListValue: []
    }
  },
  methods: {
    setFoucs (position) {
      switch (position) {
        case 'whitePhone':
          // 若没有数据 设置焦点到 手机号或区号
          this.$refs.phone.focus()
          break
        case 'remark':
          this.$refs.remark.focus()
          break
        default:
          this.$refs.phone.focus()
      }
    },
    showLianxiren () {
      this.show = true
      this.inlineDescListValue = []
    },
    onCancel () {
      console.log('on cancel')
    },
    onConfirm (msg) {
      console.log('on confirm')
      if (msg) {
        alert(msg)
      }
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
      this.whtiePhone = ''
    },
    onChange (val, label) {
      console.log('change', val, label)
      this.whtiePhone = label[0]
    },
    onAdd () {
      const RESULT = this.check()
      const FLAG = RESULT.flag
      const POSITION = RESULT.position
      if (FLAG) {
        this.setFoucs(POSITION)
      } else {
        console.log('必填项填写符合要求')
        this.$vux.toast.show({text: '添加成功'})
        setTimeout(() => {
          // 跳转 黑名单列表
          this.$router.push('/white/list')
        }, 2000)
      }
    },
    check () {
      let flag, position
      (this.whtiePhone === '' || this.whtiePhone === undefined) || (this.remark === '' || this.remark === undefined) ? flag = true : flag = false
      if (this.whtiePhone === '' || this.whtiePhone === undefined) {
        position = 'whtiePhone'
      } else if (this.remark === '' || this.remark === undefined) {
        position = 'remark'
      } else {
        position = ''
      }
      if (flag) {
        this.$vux.toast.show({
          type: 'warn',
          text: '必填不能为空'
        })
      }
      return {flag, position}
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
    height 0.5333rem
    line-height 0.5333rem
    background #23d4ea
    padding-left 0.1333rem
    color #fff
    text-align center
</style>
