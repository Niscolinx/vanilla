const btn = document.querySelector('.form__btn')
const firstName = document.querySelector('.form__input')
const form = document.getElementById('form')



form.addEventListener('submit', (e) => {

    e.preventDefault()

    console.log('form submitted')
})



btn.addEventListener('click', () => {
    console.log('button clicked')
})