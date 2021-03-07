const createModal = () => {
  const modalWrap = document.createElement('div')
  const modalContainer = document.createElement('div')
  const closeBtn = document.createElement('button')

  modalWrap.classList.add('modal')
  modalContainer.classList.add('modal__container')
  closeBtn.classList.add('modal__close')

  modalWrap.appendChild(modalContainer)
  modalContainer.appendChild(closeBtn)
  document.body.appendChild(modalWrap)

  return modalWrap
}

export default createModal
