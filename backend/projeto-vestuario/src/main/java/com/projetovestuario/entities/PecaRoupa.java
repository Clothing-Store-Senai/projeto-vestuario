package com.projetovestuario.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_peca_roupa")
public class PecaRoupa {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String nomePeca;
	
	
	private String tamanho;
	
	private double preco;
	
	@ManyToOne
    @JoinColumn(name = "fornecedor_id", nullable = false)
    private Fornecedor fornecedor;

    @ManyToOne
    @JoinColumn(name = "modelagem_id", nullable = false)
    private Modelagem modelagem;

    @ManyToOne
    @JoinColumn(name = "tecido_id", nullable = false)
    private Tecido tecido;

    public PecaRoupa() {
    }

    public PecaRoupa(Long id, String nomePeca, String tamanho, Double preco, Fornecedor fornecedor, Modelagem modelagem, Tecido tecido) {
        this.id = id;
        this.nomePeca = nomePeca;
        this.tamanho = tamanho;
        this.preco = preco;
        this.fornecedor = fornecedor;
        this.modelagem = modelagem;
        this.tecido = tecido;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomePeca() {
		return nomePeca;
	}

	public void setNomePeca(String nomePeca) {
		this.nomePeca = nomePeca;
	}

	public String getTamanho() {
		return tamanho;
	}

	public void setTamanho(String tamanho) {
		this.tamanho = tamanho;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public Fornecedor getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(Fornecedor fornecedor) {
		this.fornecedor = fornecedor;
	}

	public Modelagem getModelagem() {
		return modelagem;
	}

	public void setModelagem(Modelagem modelagem) {
		this.modelagem = modelagem;
	}

	public Tecido getTecido() {
		return tecido;
	}

	public void setTecido(Tecido tecido) {
		this.tecido = tecido;
	}
    
}
