package com.jsidegum.minhasfinancas.service;

import org.springframework.beans.factory.annotation.Value;

import com.jsidegum.minhasfinancas.model.entity.Usuario;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;

public interface JwtService {
	
	@Value("${}")
	private String expiracao;
	private String chaveAssinatura;
	
	String gerarToken(Usuario usuario);
	
	Claims obterClaims(String token) throws ExpiredJwtException;
	
	boolean isTokenValido(String token);
	
	String obterLoginUsuario(String token);
	
}
