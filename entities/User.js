const Account = require("./Account");

module.exports = class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.account = new Account(0, email);
    }
}