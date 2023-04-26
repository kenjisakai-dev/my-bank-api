### Como usar a API My Bank

Instale as dependências:

- express
- nodemon

```bash
npm install
```

Inicie a API:

```bash
nodemon index.js
```

Agora basta usar a API usando os endpoints:<br>
-POST req.body: http://localhost:3000/accounts - criar conta<br>
-DELETE req.params.id: http://localhost:3000/accounts/{idConta} - excluir conta<br>
-GET req.params.id: http://localhost:3000/accounts/{idConta} - consultar saldo<br>
-PATCH req.params.id: http://localhost:3000/accounts/{idConta} - depósito<br>
-PATCH req.params.id: http://localhost:3000/accounts/{idConta} - saque<br>
