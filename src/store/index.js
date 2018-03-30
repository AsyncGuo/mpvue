import Vue from 'vue'
import Vuex from 'vuex'
import xml2json from 'xmlstring2json'
import { formatSlideList, formatNewsList } from '../utils'
import api from './../utils/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    slides: [],
    news: [],
    topics: []
  },

  mutations: {
    slides (state, data) {
      state.slides = [...data]
    },
    news (state, data) {
      console.log(data)
      state.news = [...data]
    },
    topics (state, data) {
      state.topics = [...data]
    }
  },

  actions: {
    // getSlides ({ commit }) {
    //   api.getSlides().then(res => {
    //     const slides = res
    //     if (!slides) return
    //     const parsedSlides = xml2json(slides).rss.channel.item
    //     const filtedSlides = parsedSlides.filter(
    //       slide => slide.opentype['#text'] === '1'
    //     )
    //     const formatedSlides = filtedSlides.map(formatSlideList)
    //     commit('slides', formatedSlides)
    //   })
    // },
    // 获取banner图
    async getSlides ({ commit }) {
      const slides = await api.getSlides()
      if (!slides) return
      const parsedSlides = xml2json(slides).rss.channel.item
      const filtedSlides = parsedSlides.filter(
        slide => slide.opentype['#text'] === '1'
      )
      const formatedSlides = filtedSlides.map(formatSlideList)
      commit('slides', formatedSlides)
    },
    // 获取首页列表
    async getNewsList ({ state, commit }, init) {
      const news = await api.getNewsList()
      if (!news) return
      const newsItem = news.newslist
      const formatedNews = newsItem.map(formatNewsList)
      news.newslist.map((item, index) => {
        console.log(1)
      })
      console.log(formatedNews, news)
      // if (init) {
      //   commit('news', formatedNews)
      // } else {
      //   commit('news', state.news.concat(formatedNews))
      // }
    }
  }
})

export default store
