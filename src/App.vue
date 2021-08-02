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
      <p>我叫傅裕彬,</p>
      <p>一只90年出生,</p>
      <p>不务正业的前端工程🦁️</p>
      <p class='flex-row'>
        <a>{{ animateText }}</a>
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
  data() {
    return {
      like: '喜欢',
      something: ''
    }
  },
  created() {
    this.getAnimateText();
  },
  computed: {
    animateText() {
      return `${this.like}${this.something}`;
    },
  },
  methods: {
    getAnimateText() {
      const texts = ["設計。", "美食。", "各種亂七八糟的東西。"];
      let index = 0;// display count
      const inter = 200;
      let itlTextTime = inter * (texts[index % texts.length].length + 2);
      const itlTextFunc = () => {
        let text = texts[index % texts.length];
        let len = 2 * (text.length + 1);
        let i = 0;
        const itlFunc = () => {
          if(i <= len) {
            const str = text.slice(0, i <= (len / 2) ? i : len - i);
            this.something = str;
            console.log(str,i);
          } else {
            clearInterval(itl);
            index++;
            itlTextFunc();
          }
          i++;
        };
        itlFunc();
        const itl = setInterval(itlFunc, inter);
      }
      itlTextFunc();
    }
  }
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
    visibility: visible;
    animation: twinkle 2s infinite;
  }
}
@keyframes twinkle {
  0% {
    opacity:.0.8;
  }
  100%{
    opacity:0;
  }
}
</style>