# Dicionário NodeJS

- Express: microframework para lidar com rotas, interpreta o caminho para execução de tarefas
- Definição de Tipos: traz pro editor as opções da biblioteca (em alguns casos precisa instalar separadamente)
- package.json: contém as principais informações e dependências do projeto
- node_modules: armazena o código das dependências
- package-lock.json: arquivo de caches
- Arquivo de configuração do TypeScript para definir quais features vai ser utilizada e quais não serão
- request: obtem dados da requisição
- response: devolver resposta para aplicação
- -d : dependência de desenvolvimento
- Rota: endereço compelo ta requisição. São muito semânticas, é fácil entender o que ta escrito. NA API REST todo back-end é construído através de rotas. Ex: listagem, atualização, remoção de usuários. 
- Recurso: Entidade do sistema estamos acessando. Ex: usuários
- Insomnia: software para fazer testes de rotas. O  browser não consegue acessar nenhuma rota além da GET. Para testar as outras rotas, usamos esse software.
- Banco de dados SQLite: cria o banco de dados num arquivo, não precisa instalar nada
- Knex.JS: interface que permite trabalhar com banco de dados SQL com uma linguagem unificada para todos os bancos (Postgres, MySQL, MariaDB, SQLite, etc). Isso ocorre porque as querys são escritas em formato de javascript.
- Tabela Pivô N-N: relaciona itens de duas tabelas que tem relação de muitos para muitos
- Migrations: histórico do banco de dados, para otimizar trabalho de mais desenvolvedores.
- Seeds (knex): popula ou alimenta o banco de dados com informações nativas e padrão da aplicação.
- Arquivos estáticos: que vão ser acessados de forma direta. Ex: imagens, pdf, downloads.
- Serialização de dados: transformo os dados pra um novo formato mais acessível pra quem está requisitando as informações.
- Patterns: estrutura de pastas, Service Pattern, Repository Patter (Data Mapper)
- Padrão de métodos do controller: Index (listagem), show (exibir único registro), create/store, update, delete/destroy
- CORS: define na API quais endereços (URLs Web) externos terão acess a aplicação. 

# Requisições/Métodos HTTP:

## GET
Buscar uma ou mais informações do back-end  
_Ex: GET http://localhost:3333/users = Listar usuários_    
_Ex: GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5_ 

    //ROTA GET USERS = retorna todos os usuários

    app.get('/users', (request, response) => {
        return response.json(users);
    });

## POST
Criar uma nova informação no back-end  
_Ex: POST http://localhost:3333/users = Criar um usuário_

    //ROTA POST USER = criar um novo usuário
    app.post('/users', (request, response) => {
        const user = {
            name: 'Diego',
            email: 'diego@rocketseat.com.br'
        };    
        return response.json(user);
    });

## PUT
Atualizar uma informação existente no back-end

## DELETE
Remover uma informação do back-end

# Tipos de parâmetros das Rotas

## Request Param:
Parâmetro obrigatório na rota para identificar um único recurso (ex: atualizar informações de um único usuário) 

    const users = ['Diego', 'Cleiton', 'Robson', 'Daniel'];

    app.get('/users/:id', (request, response) => {
        const id = Number(request.params.id); 
        const user = users[id];
        return response.json(user);
    });


## Request Query:
Parâmetro geralmente opcional na rota para filtros de busca ou paginação

    const users = ['Diego', 'Cleiton', 'Robson', 'Daniel'];

    app.get('/users', (request, response) => {
        const search = String(request.query.search); 
        const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
        return response.json(filteredUsers);
    });


## Request Body
Corpo da requisição apenas para criação e atualização de informações. (ex: criação de um usuário de maneira dinâmica)

    const users = ['Diego', 'Cleiton', 'Robson', 'Daniel'];

    app.post('/users', (request, response) => {
        const data = request.body;
        const user = {
            name: data.name,
            email: data.email,
        };    
        return response.json(user);
    });


# Java Script Tips
    
## return:
Faz o processamento da requisição parar e não executar os códigos que vem em seguida.

## response:
Devolve uma resposta ao browser

## Number():
Transforma string em número

## String():
Transforma alguma coisa em string

## filter():
Recebe uma função com um usuário e uma informação para retornar True (para manter o usuário dentro dos usuários filtrados) ou False (para remover caso não satisfaça a condição)

## __dirname:
Variável global que retorna o nome do diretório que se econtra o arquivo atual

## Desestruturação do js:
| Normal                           | Desestruturado                 |
|----------------------------------|--------------------------------|
|const name = request.params.name; | const {name} = request.params; |


## split(','):
divide a informação em várias onde estiver vírgula

## map():
Percorre os dados

## trim():
Retira os espaçamentos

## Exemplos das querys em js do knex:

| SQL                                                  | JavaScript
|------------------------------------------            | --------------------------------------------------
| SELECT * FROM users WHERE name = 'Diego'             |  knmex('users').where('name', 'Diego').select('*') 
| SELECT * FROM items                                  |  knex('items')  
| JOIN point_items ON items.id = point_items.item_id   | .join('point_items', 'item.id', '=', 'point_items.items_id' 
| WHERE point_items.point_id = {id}                    | .where('point_items.point_id', id);
                                                 

# Entidades da aplicação (Tabelas)
- points (Tabela de Pontos de coleta)  
    image / name / email / whatsapp / latitude / longitude / city / uf  

- items (Tablea de Ítens de ponto de coleta)  
    title / image  

- point-items (Tabela Pivô N-N)  
    point_id / item_id   



# Ambiente de desenvolvimento Back-End: Criação da Base do Projeto com NodeJS - Aula 01   

## [Diretório raíz]
Criar uma pasta 'server'


## [Terminal]

Iniciar o NPM na pasta (cria o arquivo 'package.json')

    npm init -y

Instalar o Express (cria a pasta 'node_modules' e o arquivo 'package-lock.json')
    
    npm install Express

Instalar a definição de tipos do Express

    npm install @types/express -d


Instalar o TypeScript

    npm install typescript -d


Instalar o TypeScript Node

    npm install ts-node -d


Criar um arquivo de configuração do typescript (cria o arquivo 'tsconfig.json')

    npx tsc --init
        

Instalar um pacote para reiniciar o servidor automaticamente

    npm install ts-node-dev -d


## [package.json]

Criar um script 'dev' para encurtar o comando de execução da aplicação

    "dev": "ts-node-dev src/server.ts"


## [Diretório server]
Criar uma nova pasta 'src'
Criar um arquivo 'server.ts' dentro dessa pasta

## [server.ts]
Escrever a primeira rota de listagem de usuários

## [Terminal]
Executar a aplicação

    npm run dev




# Ambiente de desenvolvimento Back-End: Criação da Base do Projeto com NodeJS - Aula 02

## [Terminal]
Colocar em modo split para a aplicação ficar sempre rodando e instalar o knex e sqlite

    npm install knex
    npm install sqlite3

## [package.json]
Adicionar o script

    "knex:migrate": "knex migrate:latest --knexfile knexfile.ts migrate:latest"


## [VSCode]
Instalar o SQLite explorer. Ctrl + Shift + P > Sqlite: Open Database

## [Diretório src]
Criar um arquivo 'routes.ts' apenas para rotas

## [server.ts]
Importa o express, importa as rotas, armazena na variável app as definições de tipos do express, faz o express entender o formato json, faz o arquivo usar as rotas, faz o arquivo usar a porta 3333

## [Diretório src]
Criar a pasta 'database' para banco de dados e dentro dela o arquivo 'connection.ts'

## [connection.ts]
Importa o knex, importa biblioteca para lidar caminhos de diretórios, faz configurações do banco de dados, exporta a conexão 

## [Diretório database]
Criar uma pasta 'migrations' e dentro dela criar os arquivos das tabelas na ordem que respeita os relacionamentos '00_create_points.ts' / '01_create_items.ts' / '02_create_point_items.ts'.

## [Arquivos do diretório migrations]
Escrever os códigos que criam as tabelas. No 02, criar a tabela com a chave estrangeira.

## [Diretório database]
Criar uma pasta 'seeds' com o arquivo 'create_items.ts'

## [create_items.ts]
Criar informações que vão alimentar o banco de dados com informações padrão e nativas da aplicação.

## [Diretório server]
Criar um arquivo knexfile.ts e colocar as informações da conexão, migrations (tabela) e seeds (informações da tabela).

## [server.ts]
Incluir a rota para acessar as imagens.

## [Diretório src]
Criar uma pasta 'controllers' e dois aqruivos para controle de rotas 'ItemsController.ts' e 'PointsController.ts'

## [ItemsController.ts]
Importar o formato do Request e Response do express, importar a conexão com banco de dados e criar:  
- Método Controller Index: para listar os itens

## [PointsController.ts]
Importar o formato do Request e Response do express, importar a conexão com banco de dados e criar:
- Método Controller Index: para listar os pontos de coleta por filtro city/uf/items
- Método Controller Show: para exibir um ponto de coleta específico
- Método Controller Create: para criar os pontos de coleta

## [routes.ts]
Importa o express, importa as rotas do PointsController, importa as rotas do ItemsController  

## [Terminal]

    npm install cors
    npm install @types/cors -d

## [server.ts]
Faz a importação do cors




