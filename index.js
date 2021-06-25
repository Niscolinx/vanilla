const form = document.getElementById('form')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData)

    //Note: Formprops elements must match the names of your input field specified in the html file

    if (formProps.firstname === '') {
        //Do anything you want here

        console.log('firstname cannot be empty')
    }
    if (formProps.lastname === '') {
        //Do anything you want here

        console.log('lastname cannot be empty')
    }

    console.log('No errors')
        
})

