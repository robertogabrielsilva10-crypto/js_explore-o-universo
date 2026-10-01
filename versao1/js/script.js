// Selecionar todos os cards
let cards = document.querySelectorAll(".curiosidade");

/* percorrer todos os cards selecionados e para cada um (separadamente)
pegar os botoes (botao curiosidade e o botao favoritos) */
cards.forEach(function(card){
    let botaoCuriosidade = card.querySelector('.botao-curiosidades');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');
botaoCuriosidade.addEventListener("click", function(){
        
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute("aria-expanded", "true");
            botaoCuriosidade.textContent = "Ocultar curiosidades";
        
        }else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute("aria-expanded", "false");
            botaoCuriosidade.textContent = "ver curiosidades";

        }
    
    }); // fechamanto do codigo do botaoCuriosidade

    botaoFavorito.addEventListener("click", function(){
    // aplicar/remover a classe 'favoritado'
    //classe foi aplicada? true
    //classe foi removida? false
    let favoritado = card.classList.toggle('favoritado');

    // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)
    if(favoritado){
        botaoFavorito.textContent = "★ Favoritado";
    } else {
        botaoFavorito.textContent = "☆ Favorito";

    }

    }); //fechamento do botao favorito

}); //fechamento do forEach







