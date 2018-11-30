<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <group :title="groupTitle1" label-width="5em">
      <popup-picker
        :title="pickerTitle"
        :data="list"
        v-model="value"
        @on-show="onShow"
        @on-hide="onHide"
        @on-change="onChange"
        :placeholder="pickerPH">
      </popup-picker>
    </group>
    <group :title="groupTitle2">
      <x-input :placeholder="inputPH1"></x-input>
      <x-input :placeholder="inputPH2" v-show="appeal"></x-input>
      <x-textarea :max="200" name="description" :placeholder="textareaPH"></x-textarea>
    </group>
    <x-button type="primary" class="globalBtn" @click.native="onSubmit">提交</x-button>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { Group, PopupPicker, XTextarea, XInput, XButton } from 'vux'
export default {
  components: {
    WeHeader,
    Group,
    PopupPicker,
    XTextarea,
    XInput,
    XButton
  },
  mounted () {
    this.initSelect(this.$route.params.flag)
  },
  methods: {
    onChange (val) {
      console.log('val change', val)
      if (val[0] === '号码申诉') {
        this.appeal = true
        this.textareaPH = '请在此输入您申诉号码的问题，如：该申诉好吗被误标记为“骚扰电话”'
      } else {
        this.appeal = false
        this.textareaPH = '请在此输入您的意见或建议'
      }
    },
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    },
    onSubmit () {
      console.log('on submit')
    },
    initSelect (flag) {
      switch (flag) {
        case 'default':
          this.value = []
          break
        case 'suggest':
          this.value = ['意见反馈']
          break
        case 'appeal':
          this.value = ['号码申诉']
          this.appeal = true
          this.textareaPH = '请在此输入您申诉号码的问题，如：该申诉好吗被误标记为“骚扰电话”'
          break
        case 'others':
          this.value = ['其他问题']
          break
        default:
          this.value = []
      }
    }
  },
  data () {
    return {
      title: '意见反馈',
      pickerTitle: '问题类型',
      pickerPH: '请选择',
      inputPH1: '请输入您的QQ号或其他联系方式（50字以内）',
      inputPH2: '请输入要申诉的号码（24字以内）',
      textareaPH: '请在此输入您的意见或建议',
      list: [['意见反馈', '号码申诉', '其他问题']],
      groupTitle1: '问题类型选择',
      groupTitle2: '我们会为您细心解答每一个问题',
      value: [],
      appeal: false
    }
  }
}
</script>

<style scoped lang="stylus"></style>
