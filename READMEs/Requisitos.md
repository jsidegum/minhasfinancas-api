# REQUISITOS

### Tela de Login

- Caso já tenha registro no sistema, usuário deverá informar email e senha.
- Caso contrário, o sistema deve disponibilizar um formulario para registrar o usuário.

### Formulario de registro de usuário

- Campos obrigátorios: nome, email e senha;
- Email unique;


### Consultar e Registrar Receitas e Despesas (core)

- Tipo (RECEITA ou DESPESA), valor e descrição;
- O registro, ficará PENDENTE, onde o usuário poderá CANCELAR ou EFETIVAR.
- Se for efetivado, o registro é adicionado ao saldo.
- Filtros na consulta: ano, mes, descrição e tipo (RECEITA ou DESPESA).

### Diagram UML
Usuario
Registrar usuario > Login > Register receitas e despesas