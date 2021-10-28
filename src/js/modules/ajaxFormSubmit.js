const ajaxFormSubmit = () => {
  const forms = document.querySelectorAll('form')

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const formData = new FormData(form)
      postData('./mail.php', formData)
        .then(res => successSend())
        .catch(() => errorSend())
        .finally(() => finallySend())
    })
  })
}

const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    body: data
  })
  return await res.text()
}

const successSend = () => {}

const errorSend = () => {}

const finallySend = () => {}

export default ajaxFormSubmit
