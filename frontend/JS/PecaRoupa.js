document.getElementById('form-peca-roupa').addEventListener('submit', (e) => {
            e.preventDefault();
            const titulo = document.getElementById('titulo-peca').value;
            const categoria = document.getElementById('categoria').value;
            const tamanho = document.getElementById('tamanho').value || 'N/A';
            const preco = parseFloat(document.getElementById('preco-venda').value).toFixed(2);

            const container = document.getElementById('container-pecas');
            const novoCard = document.createElement('div');
            novoCard.className = 'card-modulo';
            novoCard.innerHTML = `
                <span class="card-tag">${categoria}</span>
                <h3 class="card-titulo">${titulo}</h3>
                <p class="card-detalhe"><strong>Tamanho:</strong> ${tamanho}</p>
                <div class="card-preco">R$ ${preco}</div>
                <button class="btn-excluir" onclick="removerCard(this)">Remover</button>
            `;
            container.prepend(novoCard);
            document.getElementById('form-peca-roupa').reset();
        });

        function removerCard(btn) {
            btn.parentElement.remove();
        }