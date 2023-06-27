# Sobre o Projeto

MinhasFinancasApi é uma api para gerenciamento de finanças pessoais, desenvolvida durante as aulas do curso "Spring Boot + React JS: Desenvolva Aplicações Web Completas" da Uddemy.

App: <https://github.com/jsidegum/minhasfinancas-app>

## Técnlogias Utilizadas

- Java
- Spring Boot
- Lombok
- JUnit
- Postgress
- Json web token

## Executando o projeto back-end localmente

### Pré-requisitos

- JDK 8 instalado e variáveis de ambiente configuradas.
- Git instalado.
- Eclipse (ou outra IDE de sua preferência) instalado
- PostgreSQL e pgAdmin instalados
- Insomnia instalado.

### Configurar o Banco de dados

- No pgAdmin criar database, schema e tabelas conforme "create.sql"

### Executar Aplicação

- Clone o repositório do minhasfinancasapi: git clone <https://github.com/jsidegum/minhasfinancas-api>
- Abra o Eclipse (ou sua IDE) e importe o projeto Maven existente.
- Instale o plug-in "Lombok" no Eclipse e reinicie, se necessário
- Configure o JRE instalado para utilizar o JDK 8.
- Execute o "MinhasfinancasAplication.java" em "Run As > Java Application".
- Para testes de requisição importar "minhasfinancas.yaml" no Insomnia.
- Para executar o projeto frontend siga o Readme de "<https://github.com/jsidegum/minhasfinancas-app>"
