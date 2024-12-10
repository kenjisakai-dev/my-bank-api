# MyBank-API

O MyBank API foi desenvolvido para gerenciar registros bancários oferecendo como funcionalidade a geração de relatórios detalhados com informações sobre receitas, despesas, cartões, saldo disponível e calcular o balanço mensal dentro de um intervalo de tempo especificado.

## Base de Dados

Este projeto utiliza um arquivo `.json` como banco de dados. Essa abordagem é chamada de `JSON-based database (banco de dados baseado em JSON)` ou `file-based database (banco de dados baseado em arquivo)`, sendo útil para projetos simples ou protótipos.

O banco de dados é representado como um array de objetos JSON. Cada objeto contém informações sobre registros bancários. Veja abaixo um exemplo do formato utilizado:

```json
{
    "nextId": 6,
    "registers": [
        {
            "id": 1,
            "year": 2024,
            "month": "JAN",
            "description": "Salário",
            "value": 3609.15,
            "category": "Salário",
            "type": "RECEITA"
        },
        {
            "id": 2,
            "year": 2024,
            "month": "JAN",
            "description": "VT",
            "value": 87.5,
            "category": "Vale Transporte",
            "type": "RECEITA"
        },
        {
            "id": 3,
            "year": 2024,
            "month": "JAN",
            "description": "VT",
            "value": 105,
            "category": "Vale Transporte",
            "type": "RECEITA"
        },
        {
            "id": 4,
            "year": 2024,
            "month": "JAN",
            "description": "VT",
            "value": 105,
            "category": "Vale Transporte",
            "type": "RECEITA"
        },
        {
            "id": 5,
            "year": 2024,
            "month": "JAN",
            "description": "Mercado",
            "value": 875.79,
            "category": "Alimentação",
            "type": "DESPESA"
        }
    ]
}
```

## 🚀 Tecnologias Utilizadas

-   **`express`**  
    É um framework para Node.js utilizado para facilitar a criação da API

-   **`cors`**  
    Utilizado para controlar quais páginas web podem fazer requisições para a API

-   **`winston`**  
    Utilizado para gerenciar e personalizar o log da API

-   **`nodemon`**  
    Utilizado para ajudar no desenvolvimento da API pois reinicia automaticamente a aplicação sempre que detecta uma alteração no código-fonte

-   **`express-graphql`**  
    A biblioteca é um middleware que permite a integração do GraphQL com o Express permitindo a criação da API com GraphQL

-   **`graphql`**
    Utilizado para criar API com o GraphQL oferecendo uma maneira eficiente, flexível e poderosa de consumir APIs

-   **`swagger-ui-express`**
    Utilizado para integrar uma interface gráfica do Swagger com os endpoints documentados facilitando os testes na API

## 🛠️ Como executar o projeto

1. Instale as dependências do projeto

    ```sh
    npm install
    ```

2. Inicie o projeto Localmente

    ```sh
    npm run start
    ```

3. Podemos consultar os endpoints de 3 formas diferentes

    1. Consultar via requisição HTTP padrão `http://localhost:3030/<endpoint>`

    2. Consultar via GraphQL acessando `http://localhost:3030/graphQL`

    3. Consultar via documentação swagger acessando `http://localhost:3030/swagger`

## Metadados para filtragem da geração do relatório

Os metadados definidos no arquivo `metadata.json` são utilizados na filtragem dos dados para calcular os valores de receita, despesa e calcular o balanço mensal dentro de um intervalo de tempo especificado.

-   O campo `receita` define o filtro utilizado para calcular o valor total da receita
-   O campo `despesa` define o filtro utilizado para calcular o valor total da despesa
-   O campo `cartao` define o filtro utilizado para calcular o valor do cartão

## 🔛 Como consultar os endpoints

### Registros e Relatórios (Requisição HTTP padrão)

<details>
  <summary>POST /register - Endpoint responsável por criar um registro bancário</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**                  | **Obrigatório** |
| -------- | ------------- | ------------------------------ | --------------- |
| body     | `year`        | Ano do registro bancário       | Sim             |
| body     | `month`       | Mês do registro bancário       | Sim             |
| body     | `description` | Descrição do registro bancário | Sim             |
| body     | `value`       | Valor do registro bancário     | Sim             |
| body     | `category`    | Categoria do registro bancário | Sim             |
| body     | `type`        | Tipo do registro bancário      | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                            |
| ---------- | ----------- | ---------------------------------------- |
| 201        | Created     | Registro bancário criado com sucesso     |
| 400        | Bad Request | Houve um erro ao criar registro bancário |

#### **Resposta 201 do endpoint**

```json
{
    "id": 1,
    "year": 2024,
    "month": "JAN",
    "description": "Salário",
    "value": 3609.15,
    "category": "Salário",
    "type": "RECEITA"
}
```

</details>

<details>
  <summary>PATCH /register - Endpoint responsável por atualizar um registro bancário</summary>

#### **Parâmetros da Requisição**

| **Tipo**          | **Parâmetro** | **Descrição**                  | **Obrigatório** |
| ----------------- | ------------- | ------------------------------ | --------------- |
| parâmetro de rota | `id`          | Ano do registro bancário       | Sim             |
| body              | `year`        | Ano do registro bancário       | Não             |
| body              | `month`       | Mês do registro bancário       | Não             |
| body              | `description` | Descrição do registro bancário | Não             |
| body              | `value`       | Valor do registro bancário     | Não             |
| body              | `category`    | Categoria do registro bancário | Não             |
| body              | `type`        | Tipo do registro bancário      | Não             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                                  |
| ---------- | ----------- | ---------------------------------------------- |
| 200        | OK          | Registro bancário atualizado com sucesso       |
| 400        | Bad Request | Houve um erro ao atualizar o registro bancário |

#### **Resposta 200 do endpoint**

```json
{
    "id": 1,
    "year": 2024,
    "month": "JAN",
    "description": "Salário",
    "value": 3609.15,
    "category": "Salário",
    "type": "RECEITA"
}
```

</details>

<details>
  <summary>GET /register/:id - Endpoint responsável por obter um registro bancário</summary>

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                              |
| ---------- | ----------- | ------------------------------------------ |
| 200        | OK          | Registro bancário obtido com sucesso       |
| 400        | Bad Request | Houve um erro ao obter o registro bancário |

#### **Resposta 200 do endpoint**

```json
{
    "id": 1,
    "year": 2024,
    "month": "JAN",
    "description": "Salário",
    "value": 3609.15,
    "category": "Salário",
    "type": "RECEITA"
}
```

</details>

<details>
  <summary>GET /report - Endpoint responsável por fornecer um relatório financeiro, agrupando os registros bancários em receitas, despesas, saldo disponível e calcular o balanço mensal dentro de um intervalo de tempo especificado</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**                        | **Obrigatório** |
| -------- | ------------- | ------------------------------------ | --------------- |
| query    | `month`       | Mês utilizado para criar o relatório | Não             |
| query    | `year`        | Ano utilizado para criar o relatório | Não             |

#### **Exemplos de uso dos parâmetros**

Mês

-   Caso o mês não seja fornecido o relatório será criado baseado no mês atual
-   Fornecer `*` no mês o relatório será criado baseado em todos os meses
-   Fornecer vários meses `jan,fev,mar` o relatório será criado baseado nesses meses

Ano

-   Caso o ano não seja fornecido o relatório será criado baseado no ano atual
-   Fornecer `*` no ano o relatório será criado baseado em todos os anos desde 2020
-   Fornecer vários anos `2023,2024` o relatório será criado baseado nesses anos

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                      |
| ---------- | ----------- | ---------------------------------- |
| 200        | OK          | Relatório gerado com sucesso       |
| 400        | Bad Request | Houve um erro ao gerar o relatório |

#### **Resposta 200 do endpoint**

```json
{
    "ano": [2024],
    "mes": ["JAN"],
    "receita": 3906.65,
    "despesa": 2519.7,
    "saldo": 1386.95,
    "cartao": 498.44,
    "receitas": [
        {
            "categoria": "Salário",
            "valor": 3609.15
        },
        {
            "categoria": "Vale Transporte",
            "valor": 297.5
        }
    ],
    "despesas": [
        {
            "categoria": "Alimentação",
            "valor": 875.79
        },
        {
            "categoria": "Gasolina",
            "valor": 664.7
        },
        {
            "categoria": "Convênio",
            "valor": 271.87
        },
        {
            "categoria": "Digital",
            "valor": 242.59
        },
        {
            "categoria": "Compra",
            "valor": 135.85
        },
        {
            "categoria": "Ingresso",
            "valor": 120
        },
        {
            "categoria": "Internet",
            "valor": 119.91
        },
        {
            "categoria": "Tim",
            "valor": 53.99
        },
        {
            "categoria": "Cabeleireiro",
            "valor": 35
        }
    ]
}
```

</details>

### Registros e Relatórios (Consulta GraphQL)

<details>
  <summary>getRegister - Consulta responsável por obter um registro bancário</summary>

#### **Consulta GraphQL**

```
{
  getRegister(id: 1) {
    id
    year
    month
    description
    value
    category
    type
  }
}
```

#### **Resposta da Consulta**

```json
{
    "data": {
        "getRegister": {
            "id": 1,
            "year": 2024,
            "month": "JAN",
            "description": "Salário",
            "value": 3609.15,
            "category": "Salário",
            "type": "RECEITA"
        }
    }
}
```

</details>

<details>
  <summary>getReport - Consulta responsável por fornecer um relatório financeiro, agrupando os registros bancários em receitas, despesas, saldo disponível e calcular o balanço mensal dentro de um intervalo de tempo especificado</summary>

#### **Exemplos de uso dos parâmetros**

Mês

-   Caso o mês não seja fornecido o relatório será criado baseado no mês atual
-   Fornecer `*` no mês o relatório será criado baseado em todos os meses
-   Fornecer vários meses `jan,fev,mar` o relatório será criado baseado nesses meses

Ano

-   Caso o ano não seja fornecido o relatório será criado baseado no ano atual
-   Fornecer `*` no ano o relatório será criado baseado em todos os anos desde 2020
-   Fornecer vários anos `2023,2024` o relatório será criado baseado nesses anos

#### **Consulta GraphQL**

```
{
  getReport(month: "nov", year: "2024") {
    ano
    mes
    receita
    despesa
    saldo
    cartao
    balanco
    receitas {
      categoria
      valor
    }
    despesas {
      categoria
      valor
    }
  }
}
```

#### **Resposta da Consulta**

```json
{
    "data": {
        "getRegister": {
            "ano": [2024],
            "mes": ["JAN"],
            "receita": 3906.65,
            "despesa": 2519.7,
            "saldo": 1386.95,
            "cartao": 498.44,
            "receitas": [
                {
                    "categoria": "Salário",
                    "valor": 3609.15
                },
                {
                    "categoria": "Vale Transporte",
                    "valor": 297.5
                }
            ],
            "despesas": [
                {
                    "categoria": "Alimentação",
                    "valor": 875.79
                },
                {
                    "categoria": "Gasolina",
                    "valor": 664.7
                },
                {
                    "categoria": "Convênio",
                    "valor": 271.87
                },
                {
                    "categoria": "Digital",
                    "valor": 242.59
                },
                {
                    "categoria": "Compra",
                    "valor": 135.85
                },
                {
                    "categoria": "Ingresso",
                    "valor": 120
                },
                {
                    "categoria": "Internet",
                    "valor": 119.91
                },
                {
                    "categoria": "Tim",
                    "valor": 53.99
                },
                {
                    "categoria": "Cabeleireiro",
                    "valor": 35
                }
            ]
        }
    }
}
```
