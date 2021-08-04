<template>
  <div id="app">
    <div class="banner">
      <div>Fu Yubin</div>
      <ul class="row">
        <li class="focus" name="home" @click="choose">首页</li>
        <li name="about" @click="choose">关于我</li>
        <li name="me" @click="choose">找我</li>
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
    choose({ currentTarget }) {
      // change styles
      const nodes = currentTarget.parentElement.childNodes;
      for(let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.classList.remove('focus');
      }
      currentTarget.classList.add('focus');

      // logical
      const name = currentTarget.getAttribute('name');
      console.log(this.$refs[name].$el);
    }
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
        margin: 0 10px;
        line-height: 20px;
        font-size: 20px;
        &.focus {
          color: #e62200;
        }
      }
    }
    ul > li {
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>