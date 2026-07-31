document.getElementById('form-modelagem').addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome-modelagem').value;
            const tecido = document.getElementById('tecido-usado').value;
            const obs = document.getElementById('observacoes').value || 'Sem observações.';

            const container = document.getElementById('container-modelagens');
            const novoCard = document.createElement('div');
            novoCard.className = 'card-modulo';
            novoCard.innerHTML = `
                <h3 class="card-titulo">${nome}</h3>
                <p class="card-detalhe"><strong>Tecido Recomendado:</strong> ${tecido}</p>
                <div class="card-obs">"${obs}"</div>
                <button class="btn-excluir" onclick="removerCard(this)">Remover</button>
            `;
            container.prepend(novoCard);
            document.getElementById('form-modelagem').reset();
        });

        function removerCard(btn) { btn.parentElement.remove(); }