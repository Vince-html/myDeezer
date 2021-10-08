# Projeto MyDeezer

  

![logo](./src/assets/logomydeezer.png)

  

## Sobre:

O projeto consiste em fazer uma aplicação que utiliza a API do deezer e puxa a listagem das top musicas da plataforma. Seguindo o briefing, a orientação solicitava que houvesse as seguintes opções de filtros: Artista, Música e Álbum. Além dos filtros, o projeto pedia que uma lista de favoritos também fosse projetada.

Infelizmente, por ser uma aplicação somente de front-end, a plataforma deezer apresenta alguns problemas de CORS.

Na breve pesquisa que fiz, pude perceber que teria que ter um back-end consumindo a API e me repassando os dados. Com o conhecimento adquirido dos meus estudos, a solução encontrada foi pelo proxy, para assim, poder fazer toda a estrutura. Inclusive ela esta disponível na vercel

[Link Vercel](https://my-deezer.vercel.app/)

O caminho trilhado para a aplicação inicou usando o Redux puro, mas, ao longo da jornada, percebi que seria mais interessante usar o reduxToolkit, o que hoje seria mais atual. Optei também em usar o redux-saga para as chamas na API, por ja ter mais familiaridade com ele.

Sigo trilhando por busca de mais conhecimento e todo feedback é bem-vindo.




## Tecnologias

 - React 
 - Styled-Components 
 - axios 
 - Redux
 - ReduxToolKit 
 - Redux-Saga


### Para a instalação 
Copie o repositório com o git clone #url;<br>
Apos isso execute **yarn** ou **npm** para instalação das dependências; <br>
E então de um **yarn** ou **npm start** para a aplicação rodar no seu Navegador;

