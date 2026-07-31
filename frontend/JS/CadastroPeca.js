document.addEventListener('DOMContentLoaded', () => {
            const formPecaFornecedor = document.getElementById('form-peca-fornecedor');

            if (formPecaFornecedor) {
                formPecaFornecedor.addEventListener('submit', (event) => {
                    event.preventDefault();

                    const fornecedorId = document.getElementById('select-fornecedor').value;
                    const itemNome = document.getElementById('item-nome').value;
                    const precoCusto = parseFloat(document.getElementById('preco-custo').value);

                    if (!fornecedorId || !itemNome || isNaN(precoCusto)) {
                        alert('Por favor, preencha todos os campos corretamente!');
                        return;
                    }

                    
                });
            }
        });