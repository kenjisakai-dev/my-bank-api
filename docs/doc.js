export const swaggerDocument = {
  swagger: '2.0',
  info: {
    title: 'MyBank API',
    description: 'CRUD MyBank API',
    version: '1.0.0',
  },
  host: 'localhost:3030',
  tags: [
    {
      name: 'conta',
      description: 'gerenciamento de contas',
    },
  ],
  paths: {
    '/account': {
      post: {
        tags: ['conta'],
        summary: 'Criar conta',
        description: 'Crie uma nova conta com os parâmetros recebidos',
        consumes: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description:
              'Devemos passar os seguintes parâmetros para criar uma conta',
            required: true,
            schema: {
              properties: {
                name: {
                  type: 'string',
                  example: 'Kenji',
                },
                balance: {
                  type: 'number',
                  example: 586.34,
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'Conta criada',
            schema: {
              properties: {
                id: {
                  type: 'integer',
                  example: 1,
                },
                name: {
                  type: 'string',
                  example: 'Kenji',
                },
                balance: {
                  type: 'number',
                  example: 586.34,
                },
              },
            },
          },
          400: {
            description: 'Erro ocorrido',
          },
        },
      },
      get: {
        tags: ['conta'],
        summary: 'Obter contas existentes',
        description: 'Obtenha a descrição das contas existentes',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Contas obtidas com sucesso',
            schema: {
              type: 'array',
              items: {
                properties: {
                  id: {
                    type: 'integer',
                    example: 1,
                  },
                  name: {
                    type: 'string',
                    example: 'Kenji',
                  },
                  balance: {
                    type: 'number',
                    example: 586.34,
                  },
                },
              },
            },
          },
          400: {
            description: 'Erro ocorrido',
          },
        },
      },
      put: {
        tags: ['conta'],
        summary: 'Atualizar conta existente',
        description: 'Atualize a conta com os parâmetros recebidos',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description:
              'Devemos passar os seguintes parâmetros para atualizar uma conta',
            required: true,
            schema: {
              properties: {
                id: {
                  type: 'integer',
                  example: 1,
                },
                name: {
                  type: 'string',
                  example: 'Kenji Sakai',
                },
                balance: {
                  type: 'number',
                  example: 586.34,
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'conta atualizada com sucesso',
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer',
                  example: 1,
                },
                name: {
                  type: 'string',
                  example: 'Kenji Sakai',
                },
                balance: {
                  type: 'number',
                  example: 586.34,
                },
              },
            },
          },
          400: {
            description: 'Erro ocorrido',
          },
        },
      },
    },
    '/account/updateBalance': {
      patch: {
        tags: ['conta'],
        summary: 'Atualize o saldo da conta existente',
        description: 'Atualize o saldo da conta com os parâmetros recebidos',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description:
              'Devemos passar os seguintes parâmetros para atualizar o balanço da conta',
            required: true,
            schema: {
              properties: {
                id: {
                  type: 'integer',
                  example: 1,
                },
                balance: {
                  type: 'number',
                  example: 758.54,
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'Balanço atualizado com sucesso',
            schema: {
              properties: {
                id: {
                  type: 'integer',
                  example: 1,
                },
                balance: {
                  type: 'number',
                  example: 758.54,
                },
              },
            },
          },
          400: {
            description: 'Erro ocorrido',
          },
        },
      },
    },
    '/account/{id}': {
      get: {
        tags: ['conta'],
        summary: 'Obter conta existente',
        description: 'Obter descrição da conta existente',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Devemos passar o parâmetro ID para obter conta',
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'Conta obtida com sucesso',
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer',
                  example: 1,
                },
                name: {
                  type: 'string',
                  example: 'Kenji Sakai',
                },
                balance: {
                  type: 'number',
                  example: 758.74,
                },
              },
            },
          },
          400: {
            description: 'Erro ocorrido',
          },
        },
      },
      delete: {
        tags: ['conta'],
        summary: 'Excluir conta existente',
        description: 'Devemos passar o parâmetro ID para excluir conta',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Devemos passar o parâmetro ID para excluir conta',
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'Conta excluída com sucesso',
            schema: {
              type: 'string',
              example: 'A conta do ID 1 foi deletada com sucesso.',
            },
          },
          400: {
            description: 'Erro ocorrido',
          },
        },
      },
    },
  },
  definitions: {
    Account: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          example: 1,
        },
        name: {
          type: 'string',
          example: 'Kenji Sakai',
        },
        balance: {
          type: 'number',
          example: 758.74,
        },
      },
    },
  },
};
