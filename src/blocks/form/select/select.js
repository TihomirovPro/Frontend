export function select () {
  const selects = document.querySelectorAll('.select-js')

  selects.forEach(select => {
    const checkedSelect = select.querySelector('.select__checked')
    const optionsWrap = select.querySelector('.select__options')
    const optionsWrapHeight = optionsWrap.offsetHeight
    closeSelect(optionsWrap, select)

    select.addEventListener('click', (e) => {
      const target = e.target
      if (target === checkedSelect) {
        optionsWrap.style.height = `${optionsWrapHeight}px`
        optionsWrap.style.zIndex = ''
        select.classList.add('open')
      } else if (target.classList.contains('select__text')) {
        checkedSelect.textContent = target.innerText
        closeSelect(optionsWrap, select)
      }
    })
    select.addEventListener('mouseleave', () => {
      closeSelect(optionsWrap, select)
    })
  })
}

function closeSelect (optionsWrap, select) {
  optionsWrap.style.height = '0'
  optionsWrap.style.zIndex = '-1'
  select.classList.remove('open')
}
