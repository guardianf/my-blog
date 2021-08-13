<template>
  <div class="page">
    <div class="timeline">
      <div class="content">
        <div class="date">1990-07</div>
        <div class="desc">🧒</div>
      </div>
    </div>
    <div class="timeline">
      <div class="content">
        <div class="desc">平时看📖 学习<br>周末💃</div>
      </div>
    </div>
    <div class="timeline">
      <div class="content">
        <div class="date">2011-12</div>
        <div class="desc">
          🎓 辅修专业
          <br>
          <img class="logo" src="~@/assets/images/ecnu.png" alt="">
          <br>
          英语@华东师范大学
        </div>
      </div>
    </div>
    <div class="timeline">
      <div class="content">
        <div class="date">2012-06</div>
        <div class="desc">
          <img class="logo" src="~@/assets/images/usst.png" alt="">
          <br>
          网络工程@上海理工大学
        </div>
      </div>
    </div>
    <div class="timeline">
      <div class="content">
        <div class="date">2012-07</div>
        <div class="desc">
          <br>
          开始了软件🐒 的日子
          软件开发工程师@上海众大新技术发展有限公司
          <ul>
            <li>CRM客户回访系统</li>
            <li>众大修理管理软件</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="timeline">
      <div class="content">
        <div class="date">2014-04</div>
        <div class="desc">
          <br>
          开始写前端啦～
          <br>
          前端开发组长@上海智强信息服务有限公司
          <ul>
            <li>AquaPaaS</li>
            <li>AquaBO</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="timeline">
      <div class="content">
        <div class="date">2021-03</div>
        <div class="desc">
          高级前端开发@上海非夕机器人股份有限公司
          <ul>
            <li>Client Cloud Service</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
@import '~@/styles/main.scss';
$timeLineColor: red;

.timeline {
  margin: 20px;
  color: $timeLineColor;
  text-align: center;
  &:before, &:after {
    content: ' ';
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    border: 2px solid $timeLineColor;
    margin: 0 auto;
  }
  .content {
    width: 50%;
    position: relative;
    &::before {
      content: ' ';
      width: 2px;
      background-color: $timeLineColor;
      height: 100%;
      position: absolute;
    }
    .date {
      padding: 20px 10px 5px 10px;
    }
    .desc {
      padding: 5px 10px 10px 10px;
    }
  }
  &:nth-child(odd) .content {
    margin-left: 50%;
    text-align: left;
    justify-content: end;
  }
  &:nth-child(even) .content {
    margin-right: 50%;
    text-align: right;
    justify-content: start;
  }
  .logo {
    height: 50px;
    width: 50px;
  }
}
</style>