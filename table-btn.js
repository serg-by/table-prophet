(function(){
    filTer = document.querySelectorAll('.filter-pricing');
    
    filTer.forEach(button => {
      button.addEventListener('click', (e) =>{
          filTer.forEach(el=>{ el.classList.remove('btn--active'); });
          button.classList.add('btn--active');
        
          const filter = event.target.dataset.filter;
          let priCing = document.querySelectorAll('.pricing-card-price');
        
        priCing.forEach(cena => {
          if(filter === 'all'){
             cena.style.display = "inline-block";
          }else if(cena.dataset.category === filter){
            cena.style.display = "inline-block";
          }else{
            cena.style.display = "none";
          }
        });
                              
      });
    });
    
   
  })();