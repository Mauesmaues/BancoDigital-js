const User = require('./entities/User');
const Deposit = require('./entities/Deposit');
const Loan = require('./entities/Loan');
const Transfer = require("./entities/Transfer");
module.exports = class App{
    static #users = [];
    static newUser(name, email, password) {
        const userExist = this.#users.find(b => email === b.email);
        if (!userExist) {
            const newUser = new User(name, email, password);
            App.#users.push(newUser);
        } else {
            console.log("Usuário já existe.");
        }
    }
    
    static findUser(key){
        return App.#users.find(user => user.email === key)
    }

    static newTransfer(email, emailReceive, value){
        const user = this.findUser(email)
        user.account.newTransfer(email, emailReceive, value);
        const userRece = this.findUser(emailReceive)
        userRece.account.newDeposit(value);
    }

    static newDeposit(email, valueDeposit){
        const user = this.findUser(email)
        user.account.newDeposit(valueDeposit);
    }

    static newLoan(email, valueLoan, installments){
        const user = this.findUser(email)
        user.account.newLoan(valueLoan, installments);
    }

    static setFees(porcent){
        Loan.setFees(porcent);
    }

    static showApp(){
       return this.#users.forEach(b => b.account.showAccount());
    }

    static showApp2(){
        return console.table(this.#users)
    }
}