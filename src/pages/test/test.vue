<template>
  <div>
    <list-view @testDelete="testDelete" ref="test"></list-view>
  </div>
</template>

<script>
import ListView from '@/components/listView/list.vue'

export default {
  components: {
    ListView
  },
  created () {},
  computed: {},
  methods: {
    testDelete (delId) {
      console.log('on test组件的Delete事件,删除的是：' + delId)
      this.$refs.test.DeleSuccess()
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped></style>
