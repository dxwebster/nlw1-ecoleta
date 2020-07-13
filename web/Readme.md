
# Dicionário React

- React: biblioteca para construção de interfaces em javascript
- Single-Page Applications (SPA): Só altera na tela o conteúdo, o resto fica intacto, sem carregamento
- Componentização: Peças que se repetem dentro da aplicação
- API REST: consegue compartilhar informações tanto com mobile e web 
- Comando npx: executa pacotes do node
- Live-reload: aplicação atualiza sozinha sempre que acontece uma alteração
- pasta 'src': onde realmente se encontra a aplicação
- React Native: aplicações mobile que funciona para IOS e Android com um processamento de código javascript dentro do SO.
- React é uma biblioteca pelo JS. A interface é montada pelo JS, só a partir do momento que o site já carregou.
- JSX: escrever HTML dentro do JS.
- Componentes: separa a aplicação em blocos que podem ser reutilizados. Deverão sempre ser escritos em letra maiúscula. Ex: function Header()
- Propriedade: atributos enviados para o componente
- React.FC: Function Component, um componente escrito em formato de função.
- Interface: define a tipagem de um objeto
- Chaves no HTML: insere código JS 
- Estado: armazenar uma informação apartir do componente. Ex: dados dos inputs.
- Imutabilidade: não consigo alterar a informação do estade de maneira direta. Ao invés de alterar o valor pre-existente do estado, é necessário criar um novo valor para esse estado com as modificações.
- Axios: biblioteca que permite fazer requisições para o back-end node. Permite eu ter uma base URL que se repete em todas as rotas. 
- Quanto cria um estado para um array ou objeto, precisa informar manualmente o tipo da variável



# React Tips

Criação de um componente:

    import React from 'react';

    // faz o title ser uma propriedade obrigatória do Header
    interface HeaderProps{
        title: string; 
    }

    // criação do componente
    const Header: React.FC<HeaderProps> = (props) => {
        return (
            <header>
                <h1>{props.title}</h1>
            </header>
        );
    }

    export default Header;


# Ambiente de desenvolvimento Front-End: Criação da Base do Projeto com React - Aula 01 

## [Diretorio next-level-week]
Criar o aplicativo 'web' em React com template typescript

    npx create-react-app web --template=typescript

## [Terminal]
Executar o script 'start' que tem dentro do 'package.json' (a aplicação vai abrir no browser)

    npm start
    
    
# Ambiente de desenvolvimento Back-End: Criação da Base do Projeto com NodeJS - Aula 03   

## [Diretório web]
Remover os arquivos que não vamos utilizar: Readme
Na pasta public, deixar apenas o index.html
Na pasta src, deixar apenas: App.css, App.tsx, index.tsx, react-app-en.d.ts
Passar por cada arquivo restante e ir apagando os códigos que dependiam dos arquivos que apagamos.

## [Diretório src]
Criar uma pasta pages > Home
Pasta Home > index.tsx e styles.css
Pasta assets > logo e background

## [Terminal]

    npm install react-icons
    npm install react-router-dom
    npm install @types/react-router-dom -d
    npm install leaflet react-leaflet
    npm install @types/react-leaflet -d
    npm install axios

