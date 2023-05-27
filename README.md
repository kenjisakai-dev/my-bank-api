# MyBank-api

## Crud MyBank API manipula informações de uma conta bancária

### Funcionalidades

Criar conta<br>
POST (http://localhost:3030/account)

```json
{
  "name": "Kenji",
  "balance": 586.34
}
```

Atualizar o cadastro da conta<br>
PUT (http://localhost:3030/account)

```json
{
  "id": 1,
  "name": "Kenji Sakai",
  "balance": 586.34
}
```

Fazer o depósito ou saque na conta<br>
PATCH (http://localhost:3030/account/updateBalance)

```json
{
  "id": 1,
  "balance": 758.54
}
```

Encerrar conta<br>
DELETE (http://localhost:3030/account/{id})

Consultar o saldo de todas as contas<br>
GET (http://localhost:3030/account)

Consultar o saldo da conta<br>
GET (http://localhost:3030/account/{id})

### Também podemos usar o GraphQL (http://localhost:3030/graphql)

Criar conta

```bash
mutation {
  createAccount(account: {
    name: "Kenji"
    balance: 586.34
  }) {
    id
    name
    balance
  }
}
```

Atualizar o cadastro da conta<br>

```bash
mutation {
  updateAccount(account: {
    id: 1
    name: "Kenji Sakai"
    balance: 586.34
  }) {
    id
    name
    balance
  }
}
```

Fazer o depósito ou saque na conta

```bash
mutation {
  updateBalance(account: {
    id: 1
    balance: 758.54
  }) {
    id
    name
    balance
  }
}
```

Encerrar conta

```bash
mutation {
  deleteAccount(id: 2)
}
```

Consultar o saldo de todas as contas

```bash
{
  getAccounts {
    id
    name
    balance
  }
}
```

Consultar o saldo da conta

```bash
{
  getAccount(id: 1) {
    id
    name
    balance
  }
}
```

---

### Como usar a API

Instale as Dependências

```bash
npm install
```

Iniciar a API

```bash
npm run dev
```

Pronto, agora podemos usar a API

---

### Documentação swagger da API

(http://localhost:3030/swagger)

---

### FrameWorks Usados

- express
- nodemon
- winston
- cors
- swagger-ui-express
- graphql
- express-graphql

---

### Funcionamento do Bando de Dados

Formato do arquivo accounts.json

```json
{
  "nextId": 2,
  "accounts": [
    {
      "id": 1,
      "name": "Kenji Sakai",
      "balance": 758.54
    }
  ]
}
```
