

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
