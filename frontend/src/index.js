const BASE_URL = "http://localhost:3000"
const USER_URL = `${BASE_URL}/users`
const INCOME_URL = `${BASE_URL}/incomes`
const EXPENSE_URL = `${BASE_URL}/expenses`
const SIGNIN_URL = `${BASE_URL}/signin`
const SIGNOUT_URL = `${BASE_URL}/signout`
const CURRENT_USER_URL = `${BASE_URL}/current_user`

let current_user = {}
let signinFormSH
let signupFormSH
let signupButtonSH
let signoutButtonSH

const displayFullName = (obj) => {
    let navbarSection = document.getElementById('navbarSection')
    let h3 = document.createElement('h3')
    h3.innerText = `Welcome ${obj.firstName} ${obj.lastName}`
    navbarSection.appendChild(h3)
}
const userSignedIn = (obj) => {
    displayFullName(obj)
    current_user = obj
    signinFormSH = document.getElementById('signinForm').style.display='none'
    signoutButtonSH = document.getElementById('signoutButtonSH').style.display='block'
    signupFormSH = document.getElementById('signupForm').style.display='none'
    signupButtonSH = document.getElementById('signupButtonSH').style.display='none'
}
const userSignedOut = () => {
    signinFormSH = document.getElementById('signinForm').style.display='block'
    signupButtonSH = document.getElementById('signupButtonSH').style.display='block'
    signoutButtonSH = document.getElementById('signoutButtonSH').style.display='none'
    signupFormSH = document.getElementById('signupForm').style.display='none'
    document.querySelector('section').innerText=''
    document.getElementById('signinForm').reset()
    current_user = {}
}
const userSignin = (event) => {
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
    .then(obj => {
        console.log(obj)
        if (obj.id !== undefined) {
            userSignedIn(obj)
            }
    })
}
const clickSignUpButton = (event) => {
    event.preventDefault();
    // signinFormSH = document.getElementById('signinForm').style.display='none'
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
    .then(obj => { console.log(obj)
        if (obj.message === undefined) {
            displayFullName(obj)
            signinFormSH = document.getElementById('signinForm').style.display='none'
            signupButtonSH = document.getElementById('signupButtonSH').style.display='none'
            signoutButtonSH = document.getElementById('signoutButtonSH').style.display='block'
            signupFormSH = document.getElementById('signupForm').style.display='none'
            }
    })
}
const userSignout = (event) => {
    event.preventDefault()
    fetch(SIGNOUT_URL)
    .then(response => response.json())
    .then(response => {console.log(response)
        userSignedOut()
    })
}
const currentUser = () => {
    fetch(CURRENT_USER_URL)
    .then(response => response.json())
    .then(obj => obj)
}
const displayCurrentUser = () => {
    fetch(CURRENT_USER_URL)
    .then(response => response.json())
    .then(obj => {
        if (obj.id !== undefined) {
            userSignedIn(obj)
        } else {
            userSignedOut()
        }
    })
}
displayCurrentUser()
const signinForm = document.getElementById('signinButton')
signinForm.addEventListener('click', userSignin)
const signupButton = document.getElementById('signupButtonSH')
signupButton.addEventListener('click', clickSignUpButton)
const signoutButton = document.getElementById('signoutButtonSH')
signoutButton.addEventListener('click', userSignout)
const signupForm = document.getElementById('signupButton')
signupForm.addEventListener('click', userSignup)


const createIncome = (event) => {
    event.preventDefault()
    let formData = {
        name: document.getElementById('incomeName').value,
        amount: document.getElementById('incomeAmount').value,
        date: document.getElementById('incomeDate').value,
        isSupplement: document.querySelector("input[value='true']").value,
        user_id: current_user.id
    }
    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    fetch(INCOME_URL, configObj)
    .then(response => response.json())
    .then(obj => console.log(obj))
}
const incomeSubmit = document.getElementById('incomeSubmit')
incomeSubmit.addEventListener('click', createIncome)

const createExpense = (event) => {
    event.preventDefault()
    const category = () => {
        let expenseCategory = document.getElementById('expenseCategory')
        for (const category of expenseCategory) {
        if (category.selected) {
            return category.value
            }
        }
    }
    const paymentType = () => {
        let paymentType = document.getElementsByName('paymentType')
        for (const type of paymentType) {
            if (type.checked) {
                return type.value
            }
        }
    }
    let formData = {
        name: document.getElementById('expenseName').value,
        amount: document.getElementById('expenseAmount').value,
        category: category(),
        date: document.getElementById('expenseDate').value,
        note: document.getElementById('expenseNote').value,
        paymentType: paymentType(),
        user_id: current_user.id
    }
    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    fetch(EXPENSE_URL, configObj)
    .then(response => response.json())
    .then(obj => console.log(obj))
}
const expenseSubmit = document.getElementById('expenseSubmit')
expenseSubmit.addEventListener('click', createExpense)


const optionSelector = () => {
    let selection = document.getElementById('expensePropSelect')
    for (const option of selection) {
        if (option.selected) {
            return option
        }
    }
}

const filter = (event) => {
    event.preventDefault()
    let filterResult = document.getElementById('filterResult')
    filterResult.innerHTML = ""
    let ul = document.createElement('ul')
    if (optionSelector().value === 'amount') {
        let sortedObj = []
        sortedObj = current_user.expenses.sort(function(a, b) {return b.amount - a.amount})
        for (obj of sortedObj) {
            let li = document.createElement('li')
            li.innerText = `${obj.name} - ${obj.amount}`
            console.log(li)
            ul.appendChild(li)
        }
        filterResult.appendChild(ul)
    } else if (optionSelector().value === 'date') {
        let sortedDateObj = []
        sortedDateObj = current_user.expenses.sort(function(a, b) {return a.date - b.date})
        for (obj of sortedDateObj) {
            let li = document.createElement('li')
            li.innerText = `${obj.name} - ${obj.date}`
            console.log(li)
            ul.appendChild(li)
        }
        filterResult.appendChild(ul)
    } else if (optionSelector().value === 'category') {
        let uniqCategory = []
        let result = []
        let orderedCategory = current_user.expenses.sort((a,b) => a.category.localeCompare(b.category))
        const findUniqCategory = (orderedCategory) => {
            let temp = []
            for (const e of orderedCategory) {
                temp.push(e.category)
            }
            for (const e of temp) {
                if (uniqCategory.length === 0) {
                    uniqCategory.push(e)
                }
                if (typeof uniqCategory.find(n => n === e) === 'undefined') {
                    uniqCategory.push(e)
                }
            }
        }
        const filterCategory = (orderedCategory, callback) => {
            callback
            for (const e of uniqCategory) {
                result.push(orderedCategory.filter(n => n.category === e))
            }
        }
        const totalByCategory = (callback) => {
            callback
            for (e of result) {
                let li = document.createElement('li')
                li.innerText = `${e[0].category} - ${e.reduce((total, e) => total + e.amount, 0).toFixed(2)}`
                console.log(li)
                ul.appendChild(li)
                }
            filterResult.appendChild(ul) 
        }
        totalByCategory(filterCategory(orderedCategory, findUniqCategory(orderedCategory)))
    }
}
const expenseFilterSubmit = document.getElementById('expenseFilterSubmit')
expenseFilterSubmit.addEventListener('click', filter)


