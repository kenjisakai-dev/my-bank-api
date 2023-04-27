### Como usar a API My Bank

Instale as dependências:

- express
- nodemon
- winston
- cors
- swagger-ui-express

```bash
npm install
```

Inicie a API:

```bash
nodemon index.js
```

Pronto, irá criar o arquivo accounts.json e já podemos usar os endpoints:<br>
-POST req.body: http://localhost:3000/account - criar conta<br>
-DELETE req.params.id: http://localhost:3000/account/{id} - excluir conta<br>
-GET http://localhost:3000/account - consultar todas as contas<br>
-GET req.params.id: http://localhost:3000/account/{id} - consultar uma conta<br>
-PATCH req.body: http://localhost:3000/account - depósito<br>
-PATCH req.body: http://localhost:3000/account - saque<br>

Podemos acessar a documentação e usar os endpoints
link: http://localhost:3000/docs
