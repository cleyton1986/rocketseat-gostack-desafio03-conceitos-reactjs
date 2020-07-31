<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h1 align="center">
  GoStack 11 - Rocketseat
</h1>

<h3 align="center">
  Desafio 03: Conceitos do React.js
</h3>

<blockquote align="center">“A imaginação é mais importante que a ciência, porque a ciência é limitada, ao passo que a imaginação abrange o mundo inteiro. - Albert Einstein”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/cleyton1986/rocketseat-gostack-desafio03-conceitos-reactjs?color=%2304D361">

  <a href="https://www.linkedin.com/in/cleytonalves">
    <img alt="Made by Cleyton" src="https://img.shields.io/badge/Made%20by-Cleyton_Alves-Alves%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/cleyton1986/rocketseat-gostack-desafio03-conceitos-reactjs/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/cleyton1986/rocketseat-gostack-desafio03-conceitos-reactjs?style=social">
  </a>
</p>

<p align="center">
  <a href="#tecnologias-e-recursos">Tecnologias e Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#funcionalidades-da-aplicação">Funcionalidades da aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#específicação-dos-testes">Especificação de testes</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação-e-execução">Instalação e execução</a> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
  <a href="#calendar-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## Tecnologias e recursos

- [React.js](https://github.com/facebook/react)
- [React-dom](https://github.com/facebook/react/tree/master/packages/react-dom)
- [React-scripts](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts)
- [Axios](https://github.com/axios/axios)
- [Axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter)
- [Node.js](https://nodejs.org/) (api do servidor)
- [JEST](https://github.com/facebook/jest)


## Sobre o desafio

Agora você deve continuar desenvolvendo a aplicação que irá armazenar repositórios do seu portfólio, que você já desenvolveu o backend no último desafio utilizando o Node.js.

<p align="center">
  <img  src="./assets/reactjs-example.png">
</p>

## Funcionalidades da aplicação

- **`Listar os repositórios da sua API`**: Deve ser capaz de criar uma lista com o campo **title** de todos os repositórios que estão cadastrados na sua API.

- **`Adicionar um repositório a sua API`**: Deve ser capaz de adicionar um novo item na sua API através de um botão com o texto **Adicionar** e, após a criação, deve ser capaz de exibir o nome dele após o cadastro.

- **`Remover um repositório da sua API`**: Para cada item da sua lista, deve possuir um botão com o texto **Remover** que, ao clicar, irá chamar uma função para remover esse item da lista do seu frontend e da sua API.

## Específicação dos testes

Para esse desafio temos os seguintes testes:

- **`should be able to add new repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório seja adicionado ao seu backend e listado no seu frontend dentro de uma `LI`.

- **`should be able to remove repository`**: Para que esse teste passe, sua aplicação deve permitir que ao clicar no botão de remover que vai estar dentro da `LI` do repositório adicionado, o item seja removido da listagem.


## :calendar: Entrega

Esse desafio foi entregue na plataforma Skylab - Rocketseat.

<p align="center">
  <img  src="./assets/resultTeste.png">
</p>

## Instalação e execução

OBS: Antes de executar este projeto é preciso clonar e executar o projeto back-end em node.js através do link abaixo (entre e siga as intruções de "Instalação e execução"):
## [PROJETO NODE.JS](https://github.com/cleyton1986/rocketseat-gostack-desafio02-conceitos-nodejs)

```bash
# Clone esse repositório
$ git clone https://github.com/cleyton1986/rocketseat-gostack-desafio03-conceitos-reactjs

# Entre no diretório
$ cd rocketseat-gostack-desafio03-conceitos-reactjs

# Instale as dependências
$ yarn

# Rode a aplicação
$ yarn start

# Rode os testes
$ yarn test
```


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

 implementado por 👨🏽‍💻 Cleyton Alves e desenvolvido 💜 by Rocketseat.
