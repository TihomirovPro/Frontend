import closeModal from './utils/closeModal'
import createModal from './utils/createModal'
import lockScroll from './utils/lockScroll'
import openModal from './utils/openModal'

const modal = (options = {
  openerSelector: '.modalJs',
  modalBackground: null,
  maxWidthContent: '80%'
}) => {
  const openerSelector = options.openerSelector

  const openers = document.querySelectorAll(openerSelector)

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
