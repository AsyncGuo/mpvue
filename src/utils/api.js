import fly from './fly'

const api = {
  getSlides () {
    return fly.get('https://api.ithome.com/xml/slide/slide.xml')
  },
  // getNewsList: (r) => fly.get('https://api.ithome.com/json/newslist/news'),
  getNewsList () {
    return fly.get('https://api.ithome.com/json/newslist/news')
  }
}

export default api
