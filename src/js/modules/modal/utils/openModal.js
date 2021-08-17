const openModal = (modalWrap, modal) => {
  const container = modalWrap.querySelector('.modal__container')
  container.appendChild(modal)

  modalWrap.style.display = 'block'
  modal.style.display = 'block'
  modalWrap.classList.add('fadeIn')
}

export default openModal
