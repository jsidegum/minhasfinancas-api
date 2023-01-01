package com.jsidegum.minhasfinancas.model.repository;

import java.util.Optional;

//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jsidegum.minhasfinancas.model.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	// Method 1
	//Optional<Usuario> findByEmail(String email);//select * from usuario where email = :email; 
	
	// Method 2
	boolean existsByEmail(String email); //select * from usuario where exist(email);
	
	Optional<Usuario> findByEmail(String email);
	
}

