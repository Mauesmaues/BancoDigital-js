module.exports = class installments{
    constructor(valueInstallments, numberInstallments, situation ){
        this.valueInstallments = valueInstallments;
        this.numberInstallments = numberInstallments;
        this.situation = [];
        for(let i = 0; i < numberInstallments; i++){
            this.situation[i] = false;
        }
    }
}