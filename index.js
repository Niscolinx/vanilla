const form = document.getElementById('form')



form.addEventListener('submit', (e) => {

    e.preventDefault()

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData)

    console.log(formProps)
})

