<template>
  <div>
    <list-view @testDelete="testDelete"></list-view>
  </div>
</template>

<script>
import WeHeader from '@/components/Header'
import ListView from '@/components/listView/list.vue'

export default {
  components: {
    WeHeader,
    ListView
  },
  created () {},
  computed: {},
  methods: {
    testDelete (type) {
      console.log('on test组件的Delete事件')
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped></style>
