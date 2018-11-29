<template>
<div>
  <we-header :WeTitle="title" :isShow='false'></we-header>
  <div class="test">
    <div class="title">菜单选择</div>
    <ul>
      <li>
        <router-link to="/agree">免责声明</router-link>
      </li>
      <li>
        <router-link to="/test">测试界面</router-link>
      </li>
      <li>
        <router-link to="/black/list">黑名单管理</router-link>
      </li>
      <li>
        <router-link to="/white/list">白名单管理</router-link>
      </li>
      <li>
        <router-link to="/classify/list">拦截分类设置</router-link>
      </li>
      <li>
        <router-link to="/classify/search">拦截记录查询</router-link>
      </li>
    </ul>
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
  height: 3rem;
  padding: 4rem 0;
  /* background-color: #42b983; */
  font-size: 12px;
}
div.title {
  height: 1rem;
  line-height: 1rem;
  font-weight: bold;
  padding-left: 0.4rem;
}
ul li{
  height: 1rem;
  line-height: 1rem;
  padding-left: 0.4rem;
}
</style>
