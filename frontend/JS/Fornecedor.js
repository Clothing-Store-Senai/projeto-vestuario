
        function removerCard(btn) {
            if (confirm("Deseja realmente excluir este fornecedor?")) {
                btn.parentElement.remove();
            }
        }
