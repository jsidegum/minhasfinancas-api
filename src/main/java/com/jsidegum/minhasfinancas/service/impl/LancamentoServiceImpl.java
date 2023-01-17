package com.jsidegum.minhasfinancas.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jsidegum.minhasfinancas.model.entity.Lancamento;
import com.jsidegum.minhasfinancas.model.enums.StatusLancamento;
import com.jsidegum.minhasfinancas.model.repository.LancamentoRepository;
import com.jsidegum.minhasfinancas.model.repository.UsuarioRepository;
import com.jsidegum.minhasfinancas.service.LancamentoService;

@Service
public class LancamentoServiceImpl implements LancamentoService{

	private LancamentoRepository repository;
	
	public LancamentoServiceImpl(LancamentoRepository repository) {
		this.repository = repository;
	}
	
	@Override
	public Lancamento salvar(Lancamento lancamento) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Lancamento atualizar(Lancamento lancamento) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deletar(Lancamento lancamento) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Lancamento> buscar(Lancamento lancamento) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void atualizarStatus(Lancamento lancamento, StatusLancamento status) {
		// TODO Auto-generated method stub
		
	}
	
}
