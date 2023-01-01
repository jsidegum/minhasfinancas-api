package com.jsidegum.minhasfinancas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jsidegum.minhasfinancas.model.entity.Lancamento;

public interface LancamentoRepository extends JpaRepository<Lancamento, Long>{

}
