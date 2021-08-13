<template>
  <div class="full-screen flex row-center col-center" v-if="enabled">
    <div class="flex column" id="login" v-if="!isLogin">
      <h2 style="margin: .5em;text-align: center;">💗恋爱系统登录💗</h2>
      <div class="content">
        <span class="space-between">👩<input v-model="bride" placeholder="请输入自己的姓名"></span>
        <span class="space-between">👨<input v-model="bridegroom" placeholder="请输入你老公的姓名"></span>
        <span class="space-between">🔑<input v-model="firstDate" placeholder="成为男女朋友的日子" type="date"></span>
        <span v-if="errorMessage !==''" class="errorMessage">{{errorMessage}}</span>
        <div class="login-btn">
          <span style="margin-left: auto;margin-right: auto;" @click="login">❤️ </span>
          <span class="tip">⬆️ 点击这里登陆</span>
        </div>
      </div>
    </div>
    <div v-else class="flex">
      <!-- 表白内容-S -->
        <div style="margin: 2em;">
          <div class="Info">亲爱的 张岚，</div>
          <div class="Info-small">我们认识到现在已经<span class="Info">{{meetingDays}}</span>了</div>
          <div class="Info-small">谈恋爱已经<span class="Info">{{datingDays}}</span>了</div>
          <div class="Info-small">这是我们婚前的最后一个七夕节。我就是个程序员不知道送啥，干脆就写个页面送给你吧。💋 </div>
          <div class="Info-small">老婆，我爱你 </div>
        </div>
      <!-- 表白内容-E -->
    </div>
    <heart v-if="isLogin" class="bg" />
  </div>
</template>

<script>
import Heart from './pages/Heart';

export default {
  name: 'Love',
  components: {
    Heart
  },
  data() {
    return {
      bride: '',
      bridegroom: '',
      firstDate: null,
      errorMessage: '',
      isLogin: false,
      meetingDate: new Date('2020-05-13T20:06:00'),
      datingDate: new Date('2020-06-03T21:15:00'),
      datingDay: '2020-06-03',
      date: new Date(),
    };
  },
  created() {
    setInterval(() => {
      this.date = new Date();
    },1000);
  },
  computed: {
    meetingDays() {
      const days_timestamp =  this.date.getTime() - this.meetingDate.getTime();
      const time = (days_timestamp / 1000 / (24 * 60 * 60));// 天
      const days = Math.floor(time);// 天
      const hours = Math.floor((time - days) * 24);
      const minutes = Math.floor((time - days - hours / 24) * 60 * 24);
      const seconds = Math.floor((time - days - hours / 24 - minutes / 24 / 60) * 60 * 60 * 24);
      return `${days}天${hours}小时${minutes}分钟${seconds}秒`;
    },
    datingDays() {
      const days_timestamp =  this.date.getTime() - this.datingDate.getTime();
      const time = (days_timestamp / 1000 / (24 * 60 * 60));// 天
      const days = Math.floor(time);// 天
      const hours = Math.floor((time - days) * 24);
      const minutes = Math.floor((time - days - hours / 24) * 60 * 24);
      const seconds = Math.floor((time - days - hours / 24 - minutes / 24 / 60) * 60 * 60 * 24);
      return `${days}天${hours}小时${minutes}分钟${seconds}秒`;
    },
    enabled() {
      return this.date > new Date('2021-08-14') ? true : false;
    }
  },
  methods: {
    login() {
      if(this.bride === '张岚' && this.bridegroom === '傅裕彬' && this.firstDate === this.datingDay) {
        this.isLogin = true
      } else if(this.bride !== '张岚') {
        this.errorMessage = "你是谁啊！😠 "
      } else if(this.bridegroom !== '傅裕彬') {
        this.errorMessage = "你不爱我了么？🥺 "
      } else if(this.firstDate !== this.datingDay) {
        this.errorMessage = "好！你不记得了！😫 "
      } else {
        this.errorMessage ="滚😡 "
      }
    }
  }
}
</script>

<style lang="scss">
.full-screen {
  height: 100vh;
  width: 100%;
  input, button {
    height: 30px;
    outline: none;
    padding-left: 8px;
  }
  input {
    width: 220px;
  }
  #login {
    $space: 20px;
    width: 300px - 2*$space;
    height: 350px - 2*$space;
    box-shadow: #e2e2e2 0 0 2px 1px;
    padding: $space;
    .content {
      flex: 1;
      display: flex;
      flex-flow: column;
      justify-content: center;
    }
    .content > * {
      display: flex;
      margin: 8px 0;
    }
    .tip {
      position: absolute;
      left: calc(50% - 8px);
      top: 25px;
      animation: blink 2s linear 1s infinite alternate none running;
    }
    .login-btn {
      text-align: center;
      position: relative;
    }
  }
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.flex {
  display: flex;
  &.column {
    flex-flow: column;
  }
  &.row {
    flex-flow: row;
  }
  &.row-center {
    justify-content: center;
  }
  &.col-center {
    align-items: center;
  }
}
.space-between {
  justify-content: space-between;
}
.errorMessage {
  color: red;
}
.bg {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
$fontColor: hsla(0, 100%, 60%, 1);
.Info {
  color: $fontColor;
  font-size: 1.5em;
  font-weight: bold;
}
.Info-small {
  color: $fontColor;
  font-size: 1em;
}
</style>
