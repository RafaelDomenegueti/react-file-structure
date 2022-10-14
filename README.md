
# React File Structure

Este projeto tem o objetivo de ajudar principalmente desenvolvedores iniciantes/intermediários que desejam utilizar uma estrutura simples e poderosa em seus projetos.


## Ferramentas

- [Vite](https://github.com/vitejs/vite)
- [React](https://github.com/facebook/react)
- [Typescript](https://github.com/Microsoft/TypeScript)
- [StyledComponents](https://github.com/styled-components/styled-components)
- [axios](https://github.com/axios/axios)
- [Eslint + Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
## Estrutura

O projeto utiliza o conceito que todos os arquivos para configuração do projeto devem estar na pasta raiz, o restante dos arquivos devem estar dentro de `src`, com exceção dos arquivos compilados. 

    .
    ├── dist                    # Arquivos compilados
    ├── src                     # Source
    ├── .env                    
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitignore
    ├── package.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    └── README.md


## Source

Dentro de `src` temos as demais pastas do projeto, como podemos notar elas estão separadas conforme sua finalidade.

    .
    ├── ...
    ├── src
    │   ├── assets              # Images, Icons, Fonts ...
    │   ├── components          # Componentes
    │   ├── global              # Funções globais
    │   ├── hooks               # Chamadas do Context API
    │   ├── routes              # Rotas da aplicação
    │   ├── services            # Requisições
    │   ├── theme               # Temas
    │   └── views               # Telas
    └── ...

### Arquivos

Os arquivos possuem uma organização parecida, cada arquivo deve executar apenas uma tarefa, o `index.ts` está apenas auxiliando a importação, o `Home.tsx` é o componente principal e o `style.ts` é o responsável pela estilização dos componentes.

    .
    ├── ...
    ├── src
    │   ├── ...
    │   ├── views
    │   │   ├── Home
    │   │   │   ├── index.ts        # Auxiliador de importação
    │   │   │   ├── Home.tsx        # Componente
    │   │   │   └── style.ts        # Estilização
    │   │   └──   
    │   └── ...
    └── ...


### Context API

Os hooks possuem uma estrutura um pouco diferente das demais pastas, primeiramente podemos notar a presença da pasta com o nome de `ContextProvider`, este componente tem a finalidade de simplificar o uso dos `Providers` reduzindo-os em apenas um componente.

    .
    ├── ...
    ├── src
    │   ├── ...
    │   ├── hooks
    │   │   ├── ContextProvider             # Encapsulador de Providers
    │   │   ├── useQuotaion
    │   │   │   ├── index.ts                # Auxiliador de importação
    │   │   │   ├── QuotationContext.tsx    # Contexto
    │   │   │   ├── types.ts                # Interfaces
    │   │   │   └── useQuotation.ts         # Hook
    │   │   └── ...
    │   └── ...
    └── ...
# Análise

#### Pontos Positivos

- Simplicidade
- Usabilidade
- Manutenção

#### Pontos Negativos

- Escalabilidade
## Rodando localmente

Clone o projeto
```bash
  git clone https://github.com/RafaelDomenegueti/react-file-structure.git
```

Entre no diretório do projeto
```bash
  cd react-file-structure
```

Instale as dependências
```bash
  yarn 
```

Inicie o servidor
```bash
  yarn dev
```


## Autores

- [@RafaelDomenegueti](https://github.com/RafaelDomenegueti)
