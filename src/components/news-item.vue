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
          <text v-if="news.commentcount">{{news.commentcount}}</text>
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

</style>
