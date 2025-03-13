const User = require('./entities/User');
const Deposit = require('./entities/Deposit');
const Loan = require('./entities/Loan');
const Transfer = require("./entities/Transfer");
class App{
    static #users = [];
    static newUser(name, email, password) {
        const userExist = this.#users.find(b => email === b.email);
        if (!userExist) {
            const newUser = new User(name, email, password);
            this.#users.push(newUser);
        } else {
            console.log("Usuário já existe.");
        }
    }
    
    static findUser(key){
        return this.#users.find(user => user.email === email)
    }

    static newTransfer(email, value){
        const user = this.findUser(email)
        user.account.newTransfer(email, value);
    }

    static newDeposit(email, valueDeposit){
        const user = this.findUser(email)
        user.account.newDeposit(valueDeposit);
    }

    static newLoan(email, valueLoan, installments){
        const user = this.findUser(email)
        user.account.newLoan(valueLoan, installments);
    }

    setFees(porcent){
        Loan.setFees(porcent);
    }
}