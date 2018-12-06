<template>
<div>
  <we-header :WeTitle="title" :isShow='false'></we-header>
  <div class="test">
    <div class="title">菜单选择</div>
      <div>
        <ul><li class="padding-left0">我的绿盾</li> </ul>
        <ul>
          <li><router-link to="/center">个人中心</router-link></li>
          <li><router-link to="/introduce">绿盾介绍</router-link></li>
          <li><router-link to="/feedback/suggest">意见反馈</router-link></li>
          <li><router-link to="/problem">常见问题</router-link></li>
        </ul>
      </div>
      <div>
        <ul><li class="padding-left0">业务设置</li> </ul>
        <ul>
          <li><router-link to="/black">黑名单管理</router-link></li>
          <li><router-link to="/white/list">白名单管理</router-link></li>
          <li><router-link to="/classify/list">拦截分类设置</router-link></li>
        </ul>
      </div>
      <div>
        <ul><li class="padding-left0">记录查询</li> </ul>
        <ul>
          <li><router-link to="/classify/search">拦截记录查询</router-link></li>
        </ul>
      </div>
  </div>
</div>
</template>

<script>
import WeHeader from '@/components/Header'
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '首页'
    }
  },
  components: {
    WeHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.test {
  padding: 1rem 0;
  /* background-color: #42b983; */
  font-size: 12px;
}
div.title {
  height: 1rem;
  line-height: 1rem;
  font-weight: bold;
  padding-left: 0.4rem;
}
ul {
  padding-left: 0.4rem;
}
ul li{
  height: 1rem;
  line-height: 1rem;
  padding-left: 0.4rem;
}
.padding-left0 {
  padding-left: 0;
}
</style>
