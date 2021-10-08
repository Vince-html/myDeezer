# Projeto MyDeezer

  

![logo](./src/assets/logomydeezer.png)

  

## Sobre:



O projeto consistia em fazer uma aplicação que consumisse a API do deezer, puxando a listagem das top musicas, tendo a opção de procura por 3 tipos de filtros(Artista, Música e Álbum), além claro de poder salvar nos favoritos. 



Infelizmente por ser uma aplicação somente de front-end, o deezer não aceita muito bem o consumo da api deles, tendo assim problemas com CORS, na breve pesquisa que fiz, percebi que teria que ter um back-end consumindo a api e me repassando os dados. Porém, dei uma contornada com um proxy, para pode fazer toda a estrutura. Inclusive ela esta disponivel na vercel. 


Iniciei a aplicação usando o Redux puro, mas percebi que seria melhor usar o reduxToolkit, o que hoje seria mais moderno. Optei também em usar o redux-saga para as chamas na api, por ja ter mais familiaridade com ele. 

[Link Vercel](https://my-deezer.vercel.app/)


## Tecnologias

 - React 
 - Styled-Components 
 - axios 
 - Redux
 - ReduxToolKit 
 - Redux-Saga


### Para a instalação 
Copie o repositório com o git clone #url;
Apos isso execute **yarn** para instalação das dependências;
E então de um **yarn start** para a aplicação rodar no seu Navegador;

