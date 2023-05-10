# MyBank-api

## Crud MyBank API armazena informações de uma conta de um banco

### Funcionalidades

Criar uma conta<br>
POST (http://localhost:3030/account)

Fechar uma conta<br>
DELETE (http://localhost:3030/account/{id})

Consultar o saldo de todas as contas<br>
GET (http://localhost:3030/account)

Consultar o saldo da conta<br>
GET (http://localhost:3030/account/{id})

Atualizar o cadastro da conta<br>
PUT (http://localhost:3030/account)

Fazer o depósito e saque na conta<br>
PATCH (http://localhost:3030/account/updateBalance)

---

### Documentação swagger da API

(http://localhost:3030/docs)

---

### Como usar a API

Instale as Dependências
```bash
npm install
```

Iniciar a API
```bash
nodemon index.js
```

---

### FrameWorks Usados
- cors
- express
- nodemon
- express-graphql
- graphql
- swagger-ui-express
- winston

---

### Funcionamento do Bando de Dados
Usamos o arquivo car-list.json como banco<br>
- Um array de objetos com as seguintes propriedades brand (marca) e models (modelos)
- a propriedade models possuí um array dos modelos
