import closeModal from './utils/closeModal'
import createModal from './utils/createModal'
import lockScroll from './utils/lockScroll'
import createModalStyles from './utils/modalStyles'
import openModal from './utils/openModal'

const modal = (options = {
  modalBackground: 'rgba(0,0,0,.5)',
  maxWidthContent: '80%'
}) => {
  createModalStyles(options)
  const openers = document.querySelectorAll('[data-modal]')

  openers.forEach(item => {
    item.addEventListener('click', () => {
      const modalId = item.getAttribute('data-modal')
      const modal = document.querySelector(modalId)
      const modalWrap = createModal()

      openModal(modalWrap, modal)
      lockScroll(true)

      modalWrap.addEventListener('click', (e) => {
        if (e.target === modalWrap || e.target.classList.contains('modal__close')) {
          closeModal(modalWrap, modal)
          lockScroll(false)
        }
      })
    })
  })
}

export default modal
