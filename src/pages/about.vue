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
        <div class="date">2012-06</div>
        <div class="desc">上海理工大学</div>
      </div>
    </div>
    <div class="timeline">
      <div class="content">
        <div class="date">2011-12</div>
        <div class="desc">华东师范大学🎓</div>
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
}
</style>