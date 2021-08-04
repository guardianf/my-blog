<template>
  <div class="page first-page" ref="home">
    <p>我叫傅裕彬,</p>
    <p>一只90年出生,</p>
    <p>不务正业的前端工程🦁️</p>
    <p class='flex-row'>
      <a>{{ animateText }}</a>
      <a class="splitor"></a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
@import "~@/styles/main.scss";

@keyframes twinkle {
  0% {
    opacity:.0.8;
  }
  100%{
    opacity:0;
  }
}

.first-page {
  @extend .flex-row !optional;
  justify-content: center;
  flex-flow: column;
  background-image: url(~@/assets/images/download.svg);
  p {
    font-size: 40px;
    color: #fff;
  }
  .splitor {
    background-color: #000;
    width: 4px;
    margin-left: 4px;
    height: 60%;
    visibility: visible;
    animation: twinkle 2s infinite;
  }
}
</style>