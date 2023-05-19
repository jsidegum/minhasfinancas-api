# Postgres
Password: postgres
Port: 5432

C:\Program Files\PostgreSQL\9.4\data
C:\Program Files\PostgreSQL\9.4\bin
C:\Program Files\PostgreSQL\9.4\bin\pgAdmin3.exe

# Annotations
@Autowired
Do Spring Boot, Injeta as instancias

@Transactional
Do Spring Boot, cria na base de dados uma transação, executa e commita;

@Transactional(readOnly = true)
Do Spring Boot, "readOnly = true" transação apenas de leitura, dessa forma o Spring Boot consegue otimizar nossa consulta.

@DataJpaTest 
Cria uma instancia do banco de dados em memória e ao finalizar os testes a instancia é deletada da memória.
Alem disso, abre uma transação para cada teste e ao final ocorre o Rollback.	

@AutoConfigureTestDatabase(replace = Replace.NONE)
Não cria uma instancia própria e sim utiliza o que esta nos properties, no nosso caso, o @ActiveProfiles("test")
Ou seja, segue o que esta em "application-test.properties".

@Before
Do JUnit, Roda antes de cada chamada de qualquer outro metodo @Test da classe;

@WebMvcTest
org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
SUbir o contexto REST para teste

# Classes nativas
TestEntityManager
Responsavel por persistir os dados, utilizado para Test

# Dependencias (pom.xml)

spring-boot-devtools 
Hot deploy, nao precisa parar e rodar novamente apos alguma mudança no fonte.


