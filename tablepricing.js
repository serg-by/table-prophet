
document.addEventListener('DOMContentLoaded', () => {

    const moreBtns = document.querySelectorAll('.btn-tablepricing');
        const tablepricing = document.querySelectorAll('.info-table');
    
        moreBtns.forEach(el => {
            el.addEventListener('click', (e) => {
                let currentBtn = e.currentTarget;
                let tablepricing = currentBtn.closest('.pricing__card__item').querySelector('.info-table');
                tablepricing.classList.toggle('info-table--active');
                currentBtn.classList.toggle('btn-tablepricing--active');
            });
        });
    
    });

    (function(){
        filTer = document.querySelectorAll('.filter-pricing');
        
        filTer.forEach(button => {
          button.addEventListener('click', (e) =>{
              filTer.forEach(el=>{ el.classList.remove('filter-pricing--active'); });
              button.classList.add('filter-pricing--active');
            
              const filter = event.target.dataset.filter;
              let priCing = document.querySelectorAll('.card__pricing__price');
            
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

const headerMain = document.querySelector('.header-main');
const headerTop = document.querySelector('.header-top');
const headerAll = document.querySelector('.header');
window.addEventListener('scroll', function() {  
  if (window.scrollY > 100) {
    headerAll.classList.add('fixed');
    headerMain.classList.add('scrolled');
    headerTop.classList.add('scrolled');
    // logo.src = 'assets/images/logo-orange-text.png';
  } else {
    headerAll.classList.remove('fixed');
    headerMain.classList.remove('scrolled');
    headerTop.classList.remove('scrolled');
    // logo.src = 'assets/images/logo-white-text.png';
  }
});