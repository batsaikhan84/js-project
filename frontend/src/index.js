const BASE_URL = "http://localhost:3000/"
const USER_URL = `${BASE_URL}/users`
const INCOME_URL = `${BASE_URL}/incomes`
const EXPENSE_URL = `${BASE_URL}/expenses`

fetch(USER_URL)
.then(response => response.json())
.then(obj => {console.log(obj[0].firstName)})


function userName(obj) {
    let main = document.querySelector('main')
    let p = document.createElement('p')
    p.innerText = obj[0].firstName
    main.appendChild(p)
}

class User {
    constructor(user_obj) {
        this.obj = user_obj
    }
}
class Expense {
    constructor(expense_obj) {
        this.obj = expense_obj
    }
}
class Income {
    constructor(income_obj) {
        this.obj = income_obj
    }
}
