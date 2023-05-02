--POSTGREE
-----------------------------------------------------
--Rodar em postgree on postgre@localhost:5432
-----------------------------------------------------
--Create Database
CREATE DATABASE minhasfinancas;

-----------------------------------------------------
-- Rodar em minhasfinancas on postgre@localhost:5432
-----------------------------------------------------
--Schema
CREATE SCHEMA financas;

--Tables
CREATE TABLE financas.usuario
(
  id bigserial NOT NULL PRIMARY KEY,
  nome character varying(150),
  email character varying(100),
  senha character varying(20),
  data_cadastro date default now()
);

CREATE TABLE financas.lancamento
(
  id bigserial NOT NULL PRIMARY KEY ,
  descricao character varying(100) NOT NULL,
  mes integer NOT NULL,
  ano integer NOT NULL,
  valor numeric(16,2),
  tipo character varying(20) CHECK (tipo in ('RECEITA', 'DESPESA')) NOT NULL,
  status character varying(20) CHECK (status in ('PENDENTE', 'CANCELADO', 'EFETIVADO')) NOT NULL,
  id_usuario bigint REFERENCES financas.usuario (id) NOT NULL,
  data_cadastro date default now()
);

alter table financas.usuario 
alter column senha type varchar(255);


