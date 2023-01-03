package com.jsidegum.minhasfinancas.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.jsidegum.minhasfinancas.exception.RegraNegocioException;
import com.jsidegum.minhasfinancas.model.repository.UsuarioRepository;
import com.jsidegum.minhasfinancas.service.impl.UsuarioServiceImpl;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
public class UsuarioServiceTest {

	UsuarioService service;
	
	@MockBean
	UsuarioRepository repository;
	
	@Before
	public void setUp() {
		service = new UsuarioServiceImpl(repository);
	}
	
	// TESTES DO METODO validarEmail DE UsuarioService.java
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
}
