const BASE_URL = "http://localhost:3000/"
const USER_URL = `${BASE_URL}/users`
const INCOME_URL = `${BASE_URL}/incomes`
const EXPENSE_URL = `${BASE_URL}/expenses`
const SIGNIN_URL = `${BASE_URL}/signin`
const SIGNOUT_URL = `${BASE_URL}/signout`
const CURRENT_USER_URL = `${BASE_URL}/current_user`

let signinFormSH = document.getElementById('signinForm').style.display='block'
let signupFormSH = document.getElementById('signupForm').style.display='none'
let signupButtonSH = document.getElementById('signupButtonSH').style.display='block'
let signoutButtonSH = document.getElementById('signoutButtonSH').style.display='none'

const displayFullName = (obj) => {
    let navbarSection = document.getElementById('navbarSection')
    let h3 = document.createElement('h3')
    h3.innerText = `Welcome ${obj.firstName} ${obj.lastName}`
    navbarSection.appendChild(h3)
}
const findUser = (event) => {
    event.preventDefault();
    let user = {
        email: document.getElementById('signinEmail').value,
        password: document.getElementById('signinPassword').value
    }
    return user
}
const clickSigninButton = (event) => {
    event.preventDefault();
    let formData = {
        email: document.getElementById('signinEmail').value,
        password: document.getElementById('signinPassword').value
    }
    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    fetch(SIGNIN_URL, configObj)
    .then(response => response.json())
    .then(obj => {console.log(obj)
        displayCurrentUser()
    })
}
const clickSignUpButton = (event) => {
    event.preventDefault();
    signinFormSH = document.getElementById('signinForm').style.display='none'
    signupFormSH = document.getElementById('signupForm').style.display='block'
    signupButtonSH = document.getElementById('signupButtonSH').style.display='none'

}
const userSignup = () => {
    event.preventDefault();
    const getGender = () => {
        let gender = document.getElementsByName('gender')
        for (let i=0; i<gender.length; i++ ) {
            if (gender[i].checked) {
                console.log(gender[i].value)
                return gender[i].value
            }
        }
    }
    let formData = {
        email: document.getElementById('signupEmail').value,
        password: document.getElementById('signupPassword').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        gender: getGender(),
        age: document.getElementById('age').value
    }
    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    fetch(USER_URL, configObj)
    .then(response => response.json())
    .then(obj => { console.log(obj),
        signupFormSH.style.display='none',
        displayFullName(obj)
        signinFormSH.style.display='none'
    })
}
const clickSignoutButton = (event) => {
    event.preventDefault()
    fetch(SIGNOUT_URL)
    .then(response => response.json())
    .then(response => {console.log(response)
        signinFormSH = document.getElementById('signinForm').style.display='block'
        signupButtonSH = document.getElementById('signupButtonSH').style.display='block'
        signoutButtonSH = document.getElementById('signoutButtonSH').style.display='none'
        document.querySelector('section').innerText=''
        signinForm.reset()
    })
}
const displayCurrentUser = () => {
    fetch(CURRENT_USER_URL)
    .then(response => response.json())
    .then(obj => {
    if (obj.message === undefined) {
        displayFullName(obj)
        signinFormSH = document.getElementById('signinForm').style.display='none'
        signupButtonSH = document.getElementById('signupButtonSH').style.display='none'
        signoutButtonSH = document.getElementById('signoutButtonSH').style.display='block'
        }
    })
}
displayCurrentUser()


const signinForm = document.getElementById('signinForm')
signinForm.addEventListener('submit', clickSigninButton)

const signupButton = document.getElementById('signupButtonSH')
signupButton.addEventListener('click', clickSignUpButton)

const signoutButton = document.getElementById('signoutButtonSH')
signoutButton.addEventListener('click', clickSignoutButton)

const signupForm = document.getElementById('signupForm')
signupForm.addEventListener('submit', userSignup)









// const clickSigninButton = () => {
//     let userInfo = findUser(event)
//     fetch(USER_URL)
//     .then(response => response.json())
//     .then(obj => {
//         let signinForm = document.getElementById('signinForm')
//         for (user of obj) {
//             if (user.email === userInfo.email && user.password === userInfo.password) {
//                 console.log(`user found ${user.email}`)
//                 signinForm.style.display = 'none'
//                 displayFullName(user)
//                 signupButtonSH.style.display='none'
//                 signoutButtonSH.style.display='block'
//                 signupForm.style.display='none'
//                 return
//             }
//         }
//         signinForm.reset()
//         console.log('user not found')
//     })
// }
// const clickSignoutButton = (event) => {
//     event.preventDefault();
//     signinFormSH.style.display='block'
//     signoutButtonSH.style.display='none'
//     signupButtonSH.style.display='block'
//     document.querySelector('section').innerText=''
//     signinForm.reset()
// }