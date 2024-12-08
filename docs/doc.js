export const swaggerDocument = {
    swagger: '2.0',
    info: {
        title: 'MyBank API',
        version: '1.0.0',
    },
    host: 'localhost:3030',
    tags: [
        {
            name: 'register',
            description: 'Registros bancários',
        },
        {
            name: 'report',
            description: 'Relatório dos registros bancários',
        },
    ],
    paths: {
        '/register': {
            post: {
                tags: ['register'],
                description:
                    'Endpoint responsável por criar um registro bancário',
                produces: ['application/json'],
                parameters: [
                    {
                        in: 'body',
                        name: 'body',
                        description:
                            'Parâmetros necessários para criar um registro bancário',
                        required: true,
                        schema: {
                            properties: {
                                month: {
                                    type: 'string',
                                    example: 'JAN',
                                },
                                description: {
                                    type: 'string',
                                    example: 'Mercado',
                                },
                                value: {
                                    type: 'number',
                                    example: 224.78,
                                },
                                category: {
                                    type: 'string',
                                    example: 'Alimentação',
                                },
                                type: {
                                    type: 'string',
                                    example: 'DESPESA',
                                },
                            },
                        },
                    },
                ],
                responses: {
                    201: {
                        description: 'Created',
                        schema: {
                            properties: {
                                id: {
                                    type: 'integer',
                                    example: 1,
                                },
                                month: {
                                    type: 'string',
                                    example: 'JAN',
                                },
                                description: {
                                    type: 'string',
                                    example: 'Mercado',
                                },
                                value: {
                                    type: 'number',
                                    example: 224.78,
                                },
                                category: {
                                    type: 'string',
                                    example: 'Alimentação',
                                },
                                type: {
                                    type: 'string',
                                    example: 'DESPESA',
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
            patch: {
                tags: ['register'],
                description:
                    'Endpoint responsável por atualizar um registro bancário',
                produces: ['application/json'],
                parameters: [
                    {
                        in: 'body',
                        name: 'body',
                        description:
                            'Parâmetros aceitos para atualizar um registro bancário',
                        required: true,
                        schema: {
                            properties: {
                                month: {
                                    type: 'string',
                                    example: 'JAN',
                                },
                                description: {
                                    type: 'string',
                                    example: 'Mercado',
                                },
                                value: {
                                    type: 'number',
                                    example: 224.78,
                                },
                                category: {
                                    type: 'string',
                                    example: 'Alimentação',
                                },
                                type: {
                                    type: 'string',
                                    example: 'DESPESA',
                                },
                            },
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'OK',
                        schema: {
                            properties: {
                                id: {
                                    type: 'integer',
                                    example: 1,
                                },
                                month: {
                                    type: 'string',
                                    example: 'JAN',
                                },
                                description: {
                                    type: 'string',
                                    example: 'Mercado',
                                },
                                value: {
                                    type: 'number',
                                    example: 224.78,
                                },
                                category: {
                                    type: 'string',
                                    example: 'Alimentação',
                                },
                                type: {
                                    type: 'string',
                                    example: 'DESPESA',
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
        },
        '/register/{id}': {
            get: {
                tags: ['register'],
                description:
                    'Endpoint responsável por obter um registro bancário',
                produces: ['application/json'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'ID do registro bancário',
                        required: true,
                    },
                ],
                responses: {
                    200: {
                        description: 'OK',
                        schema: {
                            properties: {
                                id: {
                                    type: 'integer',
                                    example: 1,
                                },
                                month: {
                                    type: 'string',
                                    example: 'JAN',
                                },
                                description: {
                                    type: 'string',
                                    example: 'Mercado',
                                },
                                value: {
                                    type: 'number',
                                    example: 224.78,
                                },
                                category: {
                                    type: 'string',
                                    example: 'Alimentação',
                                },
                                type: {
                                    type: 'string',
                                    example: 'DESPESA',
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
        },
        '/report': {
            get: {
                tags: ['report'],
                description:
                    'Endpoint responsável por obter um relatório dos registros bancário',
                produces: ['application/json'],
                parameters: [
                    {
                        name: 'month',
                        in: 'query',
                        description:
                            'O parâmetro month permite gerar o relatório filtrado pelos meses especificados. Caso nenhum valor seja informado, o relatório será criado com base no mês atual.',
                        required: false,
                        schema: {
                            type: 'string',
                            example: 'out,nov,dez',
                        },
                    },
                    {
                        name: 'year',
                        in: 'query',
                        description:
                            'O parâmetro year permite gerar o relatório filtrado pelos anos especificados. Caso nenhum valor seja informado, o relatório será criado com base no ano atual.',
                        required: false,
                        schema: {
                            type: 'string',
                            example: '2024',
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'OK',
                        schema: {
                            properties: {
                                ano: {
                                    type: 'array',
                                    items: { type: 'integer' },
                                    example: [2024],
                                },
                                mes: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    example: ['JAN'],
                                },
                                receita: {
                                    type: 'number',
                                    format: 'float',
                                    example: 3906.65,
                                },
                                despesa: {
                                    type: 'number',
                                    format: 'float',
                                    example: 2227.69,
                                },
                                saldo: {
                                    type: 'number',
                                    format: 'float',
                                    example: 2113.5,
                                },
                                cartao: {
                                    type: 'number',
                                    format: 'float',
                                    example: 498.44,
                                },
                                balanco: {
                                    type: 'number',
                                    format: 'float',
                                    example: 1678.96,
                                },
                                receitas: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            categoria: {
                                                type: 'string',
                                                example: 'Salário',
                                            },
                                            valor: {
                                                type: 'number',
                                                format: 'float',
                                                example: 3609.15,
                                            },
                                        },
                                    },
                                    example: [
                                        {
                                            categoria: 'Salário',
                                            valor: 3609.15,
                                        },
                                        {
                                            categoria: 'Vale Transporte',
                                            valor: 297.5,
                                        },
                                    ],
                                },
                                despesas: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            categoria: {
                                                type: 'string',
                                                example: 'Alimentação',
                                            },
                                            valor: {
                                                type: 'number',
                                                format: 'float',
                                                example: 658.78,
                                            },
                                        },
                                    },
                                    example: [
                                        {
                                            categoria: 'Alimentação',
                                            valor: 658.78,
                                        },
                                        { categoria: 'Gasolina', valor: 439.7 },
                                        {
                                            categoria: 'Convênio',
                                            valor: 271.87,
                                        },
                                        { categoria: 'Digital', valor: 242.59 },
                                        {
                                            categoria: 'Corinthians',
                                            valor: 150,
                                        },
                                        { categoria: 'Compra', valor: 135.85 },
                                        { categoria: 'Ingresso', valor: 120 },
                                        {
                                            categoria: 'Internet',
                                            valor: 119.91,
                                        },
                                        { categoria: 'Tim', valor: 53.99 },
                                        {
                                            categoria: 'Cabeleireiro',
                                            valor: 35,
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
        },
    },
    definitions: {
        register: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    example: 1,
                },
                month: {
                    type: 'string',
                    example: 'JAN',
                },
                description: {
                    type: 'string',
                    example: 'Mercado',
                },
                value: {
                    type: 'number',
                    example: 224.78,
                },
                category: {
                    type: 'string',
                    example: 'Alimentação',
                },
                type: {
                    type: 'string',
                    example: 'DESPESA',
                },
            },
        },
    },
};
