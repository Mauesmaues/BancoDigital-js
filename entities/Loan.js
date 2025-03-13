const Installment = require("./Installment")
module.exports = class Loan{
    static #fees;
    constructor(valueLoan, date, installments){
        this.valueLoan = valueLoan;
        this.date = date;
        let valueInstallment = (valueLoan + (valueLoan * fees) / 100) / installments;
        this.installments = new Installment(valueInstallment, installments);
    }

    static getFees(){
        return this.#fees;
    }

    static setFees(fees){
        this.#fees = fees
    }
}