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
      <x-input :placeholder="inputPH"></x-input>
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
  methods: {
    onChange (val) {
      console.log('val change', val)
    },
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    },
    onSubmit () {
      console.log('on submit')
    }
  },
  data () {
    return {
      title: '意见反馈',
      pickerTitle: '问题类型',
      pickerPH: '请选择',
      inputPH: '请输入您的QQ号或其他联系方式（50字以内）',
      textareaPH: '请在此输入您的意见或建议',
      list: [['意见反馈', '号码申诉', '其他问题']],
      groupTitle1: '问题类型选择',
      groupTitle2: '我们会为您细心解答每一个问题',
      value: []
    }
  }
}
</script>

<style scoped lang="stylus"></style>
