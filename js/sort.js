
window.addEventListener("load", function(event) {
    const btns = document.querySelectorAll('.btn-list__link')
    const cardContainer = document.getElementById("cards_container");
    const cards = cardContainer.getElementsByClassName("pf-card");
  
    btns.forEach(function(elem){
        elem.addEventListener('click', evt => {
            evt.preventDefault();
            const current_group = elem.dataset.group;
            console.log(current_group);
            for (i = 0; i < cards.length; i++) {
                const group = cards[i].dataset.group;
                if (current_group === group) {
                  cards[i].style.display = "";
                } else if(current_group === 'all') {
                    cards[i].style.display = "";
                }else {
                    cards[i].style.display = "none";
                }
              }
        })
    })
  });
