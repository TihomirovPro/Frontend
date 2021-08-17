const closeModal = (modalWrap, modal) => {
  modalWrap.classList.add('fadeOut')

  setTimeout(() => {
    modal.style.display = ''
    document.body.appendChild(modal)
    document.body.removeChild(modalWrap)
  }, 450)
}

export default closeModal
