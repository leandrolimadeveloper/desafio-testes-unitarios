<p align="center">
  <img alt="Rocketseat Education" src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width="100px" />
</p>

## 💻 Sobre
Resolução do desafio sobre testes unitários solicitado na triha Ignite Node, da empresa de educação Rocketseat. Os testes são criados com base numa API já criada chamada FinAPI.

## ✨ Tecnologias

-   [Node.js](https://nodejs.org/en/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Jest](https://jestjs.io/pt-BR/)

## ✅ Testes unitários
### Suíte de testes
- Criação de usuário
- Autenticação de usuário
- Mostrar o perfil de um usuário específico

### Testes
- Permite a criação de um usuário
- Não permite a criação de um usuário já existente<br><br>

- Permite a autenticação de um usuário
- Não permite a autenticação de um usuário se o e-mail ou password estiver errado.<br><br>

- Permite exibir o perfil de um usuário específico a partir de seu ID
- Não permite exibir o perfil de um usuário específico se seu ID estiver incorreto.

![image](https://github.com/leandrolimadeveloper/desafio-1-testes-unitarios/assets/76854209/5a07247c-ef2e-4663-ba38-bf9c61ed8d28)

<h2 id="instalacao">🚀 Instalação e uso</h2>
> Este guia assume que você já tenha o Node.js instalado

### Obter repositório
```bash
$ git clone https://github.com/leandrolimadeveloper/desafio-testes-unitarios/
$ cd desafio-testes-unitarios
```

### Instalação das dependências e execução
```bash
$ npm i
## Instala as dependências

$ npm run test
## Executa os testes com o Jest
```

## Banco de dados
Se você quiser testar a aplicação usando o Insomnia para ver o funcionamento até mesmo como auxílio para criar os testes unitários, é importante que você confira os dados de autenticação do banco no arquivo `ormconfig.json` e, se necessário, altere. 

Além disso você precisa criar uma database com o nome `fin_api` de acordo com o que está no arquivo de configurações do TypeORM.

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Rocketseat&message=Education&color=8257e5&labelColor=202024" alt="Rocketseat Project" />
</p>
