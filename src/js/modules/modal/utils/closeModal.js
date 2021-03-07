const closeModal = (modalWrap, modal) => {
  modalWrap.classList.add('fadeOut')

  setTimeout(() => {
    document.body.appendChild(modal)
    document.body.removeChild(modalWrap)
  }, 450)
}

export default closeModal
