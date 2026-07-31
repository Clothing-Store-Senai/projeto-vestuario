document.addEventListener('DOMContentLoaded', () => {
            // Script do Cadastro de Fornecedor
            const formFornecedor = document.getElementById('form-fornecedor');

            if (formFornecedor) {
                formFornecedor.addEventListener('submit', (event) => {
                    event.preventDefault();

                    const nomeEmpresa = document.getElementById('nome-empresa').value;
                    const cnpj = document.getElementById('cnpj').value;
                    const email = document.getElementById('email').value;
                    const telefone = document.getElementById('telefone').value;

                    if (!nomeEmpresa || !cnpj || !email) {
                        alert('Por favor, preencha todos os campos obrigatórios!');
                        return;
                    }

                    console.log('Fornecedor Cadastrado:', {
                        nomeEmpresa,
                        cnpj,
                        email,
                        telefone
                    });

                });
            }
        });