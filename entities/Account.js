const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");

module.exports = class Account{
    #balance
    constructor(balance, user){
        this.#balance = balance;
        this.deposits = [];
        this.loans = [];
        this.user = user;
        this.transfers = [];

    }

    getBalance() {
        return this.#balance;
    }

    newDeposit(valueDeposit){
        this.#balance += valueDeposit;
        const data = new Date();
        const deposit = new Deposit(valueDeposit, data);
        this.deposits.push(deposit);
    }

    newLoan(valueLoan, numberInstallments){
        this.#balance += valueLoan;
        const data = new Date();
        const loan = new Loan(valueLoan, data, numberInstallments);
        this.loans.push(loan);
    }

    newTransfer(user, userReceive, valueTransfer){
        const data = new Date();
        if(userReceive.email === this.user){
            this.#balance += valueTransfer;
            const transfer = new Transfer(user, userReceive, valueTransfer, data)
            this.transfers.push(transfer)
        }else{
            this.#balance -= valueTransfer;
            const transfer = new Transfer(this.user, userReceive, valueTransfer, data)
            this.transfers.push(transfer)
        }
    }

    showAccount(){
        console.log("#################################################################################################");
        console.table(this.user);
        console.table(this.#balance);
        console.table(this.transfers);
        console.table(this.deposits);
        console.table(this.loans);
        console.log("#################################################################################################");
    }
}