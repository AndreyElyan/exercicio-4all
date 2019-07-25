# Instalação do sistema

- Requisitos para rodar o projeto nodeJS >= 8, para instalar o banco de dados docker >= 12. (opcional)

## Instalação banco de dados (opcional)

- Instalação do banco de dados postgres, se tiver o docker instalado na máquina é necessário que
  a porta 5432 esteja liberada e que o comando "docker run --name postgresDB -p 5432:5432 -d -t kartoza/postgis"
  seja rodado e finalizado corretamente. (opcional) - Obs: Essa imagem vem com o usuário e senha: docker.
- Logo após instalar o banco de dados, é necessário criar um banco com nome que você desejar
  no meu caso foi teste-4all.

## Para rodar o backend

- Entrar na pasta raiz (exercicio-4all/backend) e rodar o comando yarn ou npm install, para instalar
  as dependências.
- Configurar o arquivo .env com as informações de acordo com a conexão do Banco de dados.
- Após a configuração do arquivo .env na raiz (exercicio-4all/backend), rodar o comando "npx sequelize db:migrate".
- Na raiz (exercicio-4all/backend) rodar o comando yarn start ou npm run start.

## Para rodar o frontend.

- Entrar na pasta raiz (exercicio-4all/front-end) e rodar o comando yarn ou npm install, para instalar
  as dependências.
- Na raiz (exercicio-4all/front-end) rodar o comando yarn start ou npm run start.

Andrey Elyan

## Tela de Login

![image](https://user-images.githubusercontent.com/46023665/61836607-57352800-ae57-11e9-8cff-655f4888f126.png)

## Poderá fazer transferências, atualizar saldo, etc..

![image](https://user-images.githubusercontent.com/46023665/61836624-6916cb00-ae57-11e9-87b9-62f8a7fc1830.png)

## Lead de contatos

![image](https://user-images.githubusercontent.com/46023665/61836661-9794a600-ae57-11e9-818c-5e204b48b1ad.png)

## Transferências

![image](https://user-images.githubusercontent.com/46023665/61836679-ab400c80-ae57-11e9-81c6-f1372248bed3.png)

## Consulta de saldo

![image](https://user-images.githubusercontent.com/46023665/61836691-b98e2880-ae57-11e9-9158-95235a465082.png)

Andrey Elyan
