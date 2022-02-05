/* eslint-disable no-unused-vars */

import Swiper from 'swiper'
// import Swiper, { Navigation, Pagination } from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    // modules: [Navigation, Pagination]
    slidesPerView: 1,
    spaceBetween: 10
  })
})
