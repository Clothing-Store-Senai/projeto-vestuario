package com.projetovestuario.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.projetovestuario.entities.Modelagem;
import com.projetovestuario.repository.ModelagemRepository;

@RestController
@RequestMapping("/api/modelagens")
public class ModelagemController {

	@Autowired
	private ModelagemRepository modelagemRepository;
	
	@GetMapping
	public List<Modelagem>listar(){
		return modelagemRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Modelagem buscarPorId(@PathVariable Long id) {
	    return modelagemRepository.findById(id)
	        .orElseThrow(() -> new ResourceNotFoundException("Modelagem não encontrada com ID: " + id));
	}

	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Modelagem cadastrar(@RequestBody Modelagem modelagem) {
		return modelagemRepository.save(modelagem);
	}
	
}


