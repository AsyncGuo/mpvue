function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

const formatSlideList = (slide) => {
  const title = slide.title['#text']
  const image = slide.image['#text']
  const link = slide.link['#text']
  return {
    title,
    image,
    link: encodeURI(`/pages/news/detail?id=${link}&title=${title}`)
  }
}

const formatNewsList = (news) => {
  const { newsid, title, postdate, commentcount, lapinid, image } = news
  return {
    id: newsid,
    title,
    postdate: formatTime(postdate),
    commentcount,
    lapinid,
    image,
    link: encodeURI(`/pages/news/detail?id=${newsid}&title=${title}`)
  }
}

export {
  formatSlideList,
  formatNewsList
}
