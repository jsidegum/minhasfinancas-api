package com.jsidegum.minhasfinancas.service;

import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.jsidegum.minhasfinancas.exception.ErroAutenticacao;
import com.jsidegum.minhasfinancas.exception.RegraNegocioException;
import com.jsidegum.minhasfinancas.model.entity.Usuario;
import com.jsidegum.minhasfinancas.model.repository.UsuarioRepository;
import com.jsidegum.minhasfinancas.service.impl.UsuarioServiceImpl;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
public class UsuarioServiceTest {

	@SpyBean
	UsuarioServiceImpl service;
	
	@MockBean
	UsuarioRepository repository;
	
	// TESTES DO METODO validarEmail DE UsuarioService.java - UsuarioServiceImpl.java
	// Quando valida e o email não existe na base de dados
	@Test(expected = Test.None.class)//Espera que não lance exception
	public void deveValidarEmail() {
		Mockito.when(repository.existsByEmail(Mockito.anyString())).thenReturn(false);
		service.validarEmail("johndoe@email.com");
	}
	
	// Quando valida e o email já existe na base de dados
	@Test(expected = RegraNegocioException.class)//Espera que lance a exception de Regra de Negocio
	public void deveLancarErroAoValidarEmailQuandoExistirEmailCadastrado() {
		Mockito.when(repository.existsByEmail(Mockito.anyString())).thenReturn(true);
		service.validarEmail("johndoe@email.com");	
	}
	
	// TESTES DO METODO autenticar DE UsuarioService.java - UsuarioServiceImpl.java
	@Test(expected = Test.None.class)
	public void deveAutenticarUmUsuarioComSucesso() {
		String email = "johndoe@email.com";
		String senha = "password123";
		
		Usuario usuario = Usuario.builder().email(email).senha(senha).id(1l).build();
		Mockito.when(repository.findByEmail(email)).thenReturn(Optional.of(usuario));
		
		Usuario result = service.autenticar(email,senha);
		
		Assertions.assertThat(result).isNotNull();
	}
	
	@Test
	public void deveLancarErroQuandoNaoEncontrarUsuarioCadastradoComOEmailInformado() {
		Mockito.when(repository.findByEmail(Mockito.anyString())).thenReturn(Optional.empty());
				
		Throwable exception = Assertions.catchThrowable(() -> service.autenticar("johndoe@email.com", "password123") );
		
		Assertions.assertThat(exception).isInstanceOf(ErroAutenticacao.class).hasMessage("Usuário não encontrado para o email informado.");
	}
	
	@Test
	public void deveLancarErroQuandoSenhaNaoBater() {
		String senha = "password123";
		Usuario usuario = Usuario.builder().email("johndoe@email.com").senha(senha).build();
		
		Mockito.when(repository.findByEmail(Mockito.anyString())).thenReturn(Optional.of(usuario));
		
		Throwable exception = Assertions.catchThrowable(() -> service.autenticar("johndoe@email.com", "PassErr") );
		Assertions.assertThat(exception).isInstanceOf(ErroAutenticacao.class).hasMessage("Senha inválida.");
	}
	
	// TESTES DO METODO salvarUsuario DE UsuarioService.java - UsuarioServiceImpl.java
	@Test(expected = Test.None.class)
	public void deveSalvarUmUsuario() {
		Mockito.doNothing().when(service).validarEmail(Mockito.anyString());
		Usuario usuario = Usuario.builder()
				.id(1l)
				.nome("John Doe")
				.email("johndoe@email.com")
				.senha("password123")
				.build();
		Mockito.when(repository.save(Mockito.any(Usuario.class))).thenReturn(usuario);
		
		Usuario usuarioSalvo = service.salvarUsuario(new Usuario());
		
		Assertions.assertThat(usuarioSalvo).isNotNull();
		Assertions.assertThat(usuarioSalvo.getId()).isEqualTo(1l);
		Assertions.assertThat(usuarioSalvo.getNome()).isEqualTo("John Doe");
		Assertions.assertThat(usuarioSalvo.getEmail()).isEqualTo("johndoe@email.com");
		Assertions.assertThat(usuarioSalvo.getSenha()).isEqualTo("password123");
	}
	
	@Test(expected = RegraNegocioException.class)
	public void naoDeveSalvarUsuarioComEmailJaCadastrado() {
		String email = "johndoe@email.com";
		Usuario usuario = Usuario.builder().email(email).build();
		Mockito.doThrow(RegraNegocioException.class).when(service).validarEmail(email);
		
		service.salvarUsuario(usuario);
		
		Mockito.verify(repository, Mockito.never()).save(usuario);
	}
	
}
