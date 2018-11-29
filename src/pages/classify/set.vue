<template>
  <div>
    <we-header :WeTitle="title"></we-header>
    <div class="add-box">
      <group class="weui-cells-top0">
        <cell title="拦截阈值" value="200次" link="/"></cell>
      </group>
    </div>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import { Group, Cell } from 'vux'
export default {
  components: {
    WeHeader,
    Group,
    Cell
  },
  data () {
    return {
      title: '拦截阈值设置'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/variables.styl'
.weui-cells-top0 >>> .vux-no-group-title {
  margin-top 2px
}
.add-box
  width 100vw
  height 100vh
</style>
