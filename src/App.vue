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
    <div class="page first-page" ref="home">
      <p>这里是傅裕彬,</p>
      <p>一位90年出生,</p>
      <p>不务正业的前端工程🦁️</p>
      <p class='flex-row'>
        <a>喜欢各种乱七八糟的东西</a>
        <a class="splitor"></a>
      </p>
    </div>
    <!-- <div class="page" style="background-color: blue"></div>
    <div class="page" style="background-color: green"></div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
.flex-row {
  display: flex;
  align-items: center;
}

#app {
  .banner {
    @extend .flex-row;
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
      @extend .flex-row;
      & > * {
        padding: 0 10px;
        line-height: 20px;
      }
    }
  }

  .page {
    width: 100%;
    height: 100vh;
  }
}
.first-page {
  @extend .flex-row;
  justify-content: center;
  flex-flow: column;
  background-image: url(./assets/images/download.svg);
  p {
    font-size: 40px;
    color: #fff;
  }
  .splitor {
    background-color: #000;
    width: 3px;
    height: 80%;
    transform: height .2s;
  }
}
</style>