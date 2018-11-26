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
  <group>
    <cell title="keyword">{{ value }}</cell>
  </group>
  <group>
    <cell
      title="static position demo"
      is-link
      link="/component/search-static"></cell>
  </group>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { Search, Group, Cell, XButton } from 'vux'

export default {
  name: 'agree',
  components: {
    WeHeader,
    Search,
    Group,
    Cell,
    XButton
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
<style scoped lang="stylus">
.vux-search-fixed
  position relative !important
  top 0 !important
</style>
