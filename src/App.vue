<template>
  <div id="app">
    <div class="banner">
      <div>Fu Yubin</div>
      <ul class="row">
        <li>Fu Yubin</li>
        <li>首页</li>
        <li>关于我</li>
        <li>找我</li>
      </ul>
    </div>
    <home ref='home' />
    <!-- <div class="page" style="background-color: blue"></div>
    <div class="page" style="background-color: green"></div> -->
  </div>
</template>

<script>
import Home from '@/pages/home';

export default {
  name: 'App',
  components: { Home },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/main.scss";

#app {
  .banner {
    @extend .flex-row !optional;
    height: 70px;
    box-shadow: rgba($color: #000000, $alpha: 0.2) 0px 0px 3px 2px;
    padding: 0 20px;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    .row {
      @extend .flex-row !optional;
      & > * {
        padding: 0 10px;
        line-height: 20px;
      }
    }
  }
}
</style>