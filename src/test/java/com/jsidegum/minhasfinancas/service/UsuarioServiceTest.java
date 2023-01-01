package com.jsidegum.minhasfinancas.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.jsidegum.minhasfinancas.exception.RegraNegocioException;
import com.jsidegum.minhasfinancas.model.entity.Usuario;
import com.jsidegum.minhasfinancas.model.repository.UsuarioRepository;

@SpringBootTest
@RunWith(SpringRunner.class)
@ActiveProfiles("test")
public class UsuarioServiceTest {

	@Autowired
	UsuarioService service;
	
	@Autowired
	UsuarioRepository repository;

	// TESTES DO METODO validarEmail DE UsuarioService.java
	// Quando valida e o email não existe na base de dados
	@Test(expected = Test.None.class)//Espera que não lance exception
	public void deveValidarEmail() {
		repository.deleteAll();
		service.validarEmail("johndoe@email.com");
	}
	// Quando valida e o email já existe na base de dados
	@Test(expected = RegraNegocioException.class)//Espera que lance a exception de Regra de Negocio
	public void deveLancarErroAoValidarEmailQuandoExistirEmailCadastrado() {
		Usuario usuario = Usuario.builder().nome("John Doe").email("johndoe@email.com").build();
		repository.save(usuario);
		service.validarEmail("johndoe@email.com");	
	}
}
