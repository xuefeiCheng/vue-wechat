<template>
  <div>
    <cell
      :title="item.question"
      is-link
      :border-intent="false"
      :arrow-direction="item.showContent ? 'up' : 'down'"
      @click.native="item.showContent = !item.showContent">
    </cell>
    <p class="slide" :class="item.showContent?'animate':''" v-html="item.answer"></p>
  </div>
</template>

<script>
import { Cell, CellBox, CellFormPreview, Group } from 'vux'
export default {
  props: ['item'],
  components: {
    Cell,
    CellBox,
    CellFormPreview,
    Group
  }
}
</script>

<style scoped lang="stylus">
.slide {
  box-sizing: border-box;
  max-height: 0;
  overflow: hidden;
  padding: 2px 20px;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  width: 100%;
  word-break: break-all;
  word-wrap: break-word;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>
