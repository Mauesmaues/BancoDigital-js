module.exports = class Transfer{
    constructor(user, userReceive, value, date){
        this.user = user;
        this.userReceive = userReceive;
        this.value = value;
        this.date = date;
    }
}