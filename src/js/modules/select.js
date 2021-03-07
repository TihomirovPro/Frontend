const customSelect = () => {
  const selects = document.querySelectorAll('.select-js')

  document.body.addEventListener('click', (e) => {
    const target = e.target
    const openSelect = document.querySelector('.custom-select._open')

    if (!target.classList.contains('custom-select') && !target.classList.contains('custom-select__option') && openSelect) {
      openSelect.classList.remove('_open')
    }
  })

  selects.forEach(select => {
    select.style.display = 'none'
    const options = select.querySelectorAll('option')

    const customSelect = createSelect()
    const customSelectLabel = customSelect.querySelector('.custom-select__label')
    const customSelectOption = customSelect.querySelector('.custom-select__options')

    options.forEach(option => {
      const optionText = option.textContent
      const optionValue = option.value

      if (option.selected) {
        customSelectLabel.textContent = optionText
      }

      const customSeletOption = createOptions(optionText, optionValue)
      customSelectOption.appendChild(customSeletOption)
    })

    select.before(customSelect)

    customSelect.addEventListener('click', (e) => {
      const target = e.target
      const openSelect = document.querySelector('.custom-select._open')

      if (openSelect) openSelect.classList.remove('_open')

      if (target !== openSelect) target.classList.add('_open')

      if (target.classList.contains('custom-select__option')) {
        const value = target.getAttribute('data-value')
        const selectOption = select.querySelector(`option[value="${value}"]`)

        select.value = value
        selectOption.selected = true
        customSelectLabel.textContent = target.textContent

        const selectChange = new Event('change', { bubbles: true })
        select.dispatchEvent(selectChange)

        select.classList.remove('_open')
      }
    })
  })
}

function createSelect () {
  const select = document.createElement('div')
  const selectLabel = document.createElement('div')
  const selectIcon = document.createElement('div')
  const selectOptions = document.createElement('div')

  select.classList.add('custom-select')
  selectLabel.classList.add('custom-select__label')
  selectIcon.classList.add('custom-select__icon')
  selectOptions.classList.add('custom-select__options')

  select.appendChild(selectIcon)
  select.appendChild(selectLabel)
  select.appendChild(selectOptions)

  return select
}

function createOptions (optionText, optionValue) {
  const option = document.createElement('div')
  option.classList.add('custom-select__option')

  option.setAttribute('data-value', optionValue)
  option.textContent = optionText

  return option
}

export default customSelect
