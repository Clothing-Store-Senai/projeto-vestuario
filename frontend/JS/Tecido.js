document.addEventListener('DOMContentLoaded', () => {
            const formTecido = document.getElementById('form-tecido');

            if (formTecido) {
                formTecido.addEventListener('submit', (event) => {
                    event.preventDefault();

                    const nomeTecido = document.getElementById('nome-tecido').value;
                    const composicao = document.getElementById('composicao').value;
                    const metragem = parseFloat(document.getElementById('metragem').value);

                    if (metragem < 0 || isNaN(metragem)) {
                        alert('Por favor, introduza uma metragem válida!');
                        return;
                    }

                    
                });
            }
        });