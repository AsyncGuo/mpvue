<template>
  <div class="news-item">
    <a :href="news.link" v-if="!news.lapinid" class="news-item">
      <img :src="news.image" class="news-img" alt="">
      <div class="news-text">
        <div class="news-title">
          {{news.title}}
        </div>
        <div class="news-info">
          <text>{{news.postdate}}</text>
          <text v-if="news.commentcount">{{news.commentcount}}评</text>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="less" scoped>
  .news-item{
    display: flex;
    width: 100%;
    height: 90px;
    align-items: center;
    border-bottom: 1px solid #eee;
    .news-img{
      width: 100px;
      height: 75px;
      margin-right: 10px;
    }
    .news-text{
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .news-title {
      font-size: 15px;
    }
    .news-info {
      color: #aaa;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
