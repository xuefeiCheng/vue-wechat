<template>
  <div>
    <list-view
    :title="title"
    :dataList="data"
    @testDelete="testDelete"
    @onPullingDown="onPullingDown"
    @onPullingUp="onPullingUp"
    @onSubmit="onSubmit"
    ref="test"></list-view>
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
    },
    onPullingDown () {
      // 模拟更新数据
      console.log('pulling down and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.data.unshift({
            id: ++this.itemIndex,
            phone: '17615864992',
            badge: '快递送餐',
            desc: new Date().toString()
          })
        } else {
          // 如果没有新数据
          this.$refs.test.forceUpdate()
        }
      }, 2000)
    },
    onPullingUp () {
      // 更新数据
      console.log('pulling up and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        if (Math.random() > 0.5) {
          // 如果有新数据
          let newPage = []
          for (let i = 0; i < 10; i++) {
            newPage.push({
              id: ++this.itemIndex,
              phone: '17615864992',
              badge: '快递送餐',
              desc: '2018/11/22 15:27:40'
            })
          }
          this.data = this.data.concat(newPage)
          console.log('this.data')
          console.log(this.data)
        } else {
          // 如果没有新数据
          this.$refs.test.forceUpdate()
        }
      }, 1500)
    },
    onSubmit (val) {
      console.log('搜索提交: ' + val)
    }
  },
  data () {
    return {
      data: [
        {
          id: '1',
          phone: '17615864102',
          badge: '教育培训',
          desc: '2018/11/22 15:27:40'
        }, {
          id: '2',
          phone: '17615864992',
          badge: '快递送餐',
          desc: '2018/11/22 15:27:40'
        },
        {
          id: '3',
          phone: '17615864102',
          badge: '教育培训',
          desc: '2018/11/22 15:27:40'
        }, {
          id: '4',
          phone: '17615864992',
          badge: '快递送餐',
          desc: '2018/11/22 15:27:40'
        },
        {
          id: '5',
          phone: '17615864102',
          badge: '教育培训',
          desc: '2018/11/22 15:27:40'
        }, {
          id: '6',
          phone: '17615864992',
          badge: '快递送餐',
          desc: '2018/11/22 15:27:40'
        },
        {
          id: '7',
          phone: '17615864102',
          badge: '教育培训',
          desc: '2018/11/22 15:27:40'
        }, {
          id: '8',
          phone: '17615864992',
          badge: '快递送餐',
          desc: '2018/11/22 15:27:40'
        },
        {
          id: '9',
          phone: '17615864102',
          badge: '教育培训',
          desc: '2018/11/22 15:27:40'
        }, {
          id: '10',
          phone: '17615864992',
          badge: '快递送餐',
          desc: '2018/11/22 15:27:40'
        }
      ],
      itemIndex: 10,
      title: 'test'
    }
  }
}
</script>

<style scoped></style>
