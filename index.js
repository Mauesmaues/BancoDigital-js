// index.js
const User = require('./entities/User');
const Deposit = require('./entities/Deposit');
const Loan = require('./entities/Loan');
const Transfer = require("./entities/Transfer");
const App = require('./App');

// Criando novos usuários
console.log("Criando usuários...");
App.newUser('Alice', 'alice@example.com', 'password123');
App.newUser('Bob', 'bob@example.com', 'password456');

// Tentando criar um usuário com email existente
App.newUser('Alice', 'alice@example.com', 'newpassword'); // Deve mostrar que o usuário já existe

// Verificando os usuários criados
// console.log("Usuários criados:", App.#users);

// Realizando um depósito
console.log("\nRealizando depósito...");
App.newDeposit('alice@example.com', 100); // Alice deposita 100
console.log("Saldo de Alice após depósito:", App.findUser('alice@example.com').account.getBalance());

// Realizando um empréstimo
console.log("\nRealizando empréstimo...");
App.newLoan('alice@example.com', 200, 12); // Alice pega um empréstimo de 200
console.log("Saldo de Alice após empréstimo:", App.findUser('alice@example.com').account.getBalance());

// Realizando uma transferência
console.log("\nRealizando transferência...");
App.newTransfer('alice@example.com', 'bob@example.com', 50); // Alice transfere 50 para Bob
console.log("Saldo de Alice após transferência:", App.findUser('alice@example.com').account.getBalance());
console.log("Saldo de Bob após receber transferência:", App.findUser('bob@example.com').account.getBalance());

// Tentando transferir mais do que o saldo
console.log("\nTentando transferir mais do que o saldo...");
App.newTransfer('alice@example.com', 'bob@example.com', 100); // Deve mostrar saldo insuficiente

// Verificando os saldos finais
console.log("\nSaldos finais:");
console.log("Alice:", App.findUser('alice@example.com').account.getBalance());
console.log("Bob:", App.findUser('bob@example.com').account.getBalance());

