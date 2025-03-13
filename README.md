# BancoDigital-js
FinancialApp é um sistema de gerenciamento financeiro que permite aos usuários realizarem operações bancárias como depósitos, transferências e empréstimos. O sistema também inclui a funcionalidade de gerenciamento de parcelas de empréstimos e o controle de usuários.

# FinancialApp

## Descrição
FinancialApp é um sistema de gerenciamento financeiro que permite aos usuários realizarem operações bancárias como depósitos, transferências e empréstimos. O sistema também inclui a funcionalidade de gerenciamento de parcelas de empréstimos e o controle de usuários.

## Funcionalidades
### Deposit
- Possui um atributo para o valor do depósito.
- Possui um atributo para a data de criação do depósito.

### Transfer
- Possui atributos para:
  - Usuário que enviou a transferência.
  - Usuário que recebeu a transferência.
  - Valor transferido.
  - Data de criação da transferência.

### Loan
- Possui um atributo estático privado para a taxa de juros.
- Possui um getter estático para ler o atributo da taxa de juros.
- Possui um setter estático para definir uma nova taxa de juros a partir de uma porcentagem.
- Possui atributos para:
  - Valor do empréstimo.
  - Data de criação.
  - Parcelas do empréstimo.
- O construtor recebe o número de parcelas e calcula as parcelas (instâncias de `Installment`), armazenando-as.

### Installment
- Possui atributos para:
  - Valor da parcela.
  - Número da parcela.
  - Situação da parcela (paga ou pendente).

### Account
- Possui atributos para:
  - Saldo (privado e somente leitura, podendo ser modificado apenas por depósitos, transferências e empréstimos).
  - Lista de depósitos realizados.
  - Lista de empréstimos adquiridos.
  - Lista de transferências realizadas.
  - Dono da conta.
- Possui métodos para:
  - Fazer um novo depósito (acrescenta valor ao saldo e adiciona um `Deposit` ao array de depósitos).
  - Fazer um novo empréstimo (acrescenta valor ao saldo e adiciona um `Loan` ao array de empréstimos).
  - Realizar transferências:
    - Se recebida pelo dono da conta, o valor é acrescentado ao saldo.
    - Se enviada pelo dono da conta, o valor é descontado do saldo.
    - A transferência é salva no array de transferências.

### User
- Possui atributos para:
  - Nome completo.
  - Email.
  - Conta bancária (`Account`).

### App
- Possui um atributo estático privado para armazenar a lista de usuários.
- Possui métodos estáticos para:
  - Criar um novo usuário (um e-mail só pode ser usado uma vez).
  - Encontrar um usuário a partir de seu e-mail.
  - Realizar operações de:
    - Depósito.
    - Transferência.
    - Empréstimo.
  - Alterar a taxa de juros dos empréstimos.

## Tecnologias Utilizadas
- Linguagem de programação: JavaScript

## Como Executar o Projeto
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/financialapp.git
   ```
2. Execute a aplicação:
   ```sh
   node index.js
   ```

## Contribuição
Sinta-se à vontade para contribuir com melhorias para o projeto! Para isso:
1. Faça um fork do repositório.
2. Crie uma nova branch para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie para o repositório (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.


