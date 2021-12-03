(function () {
    var e = document.querySelector(".header");
   

    window.onscroll = function () {
      return e.classList.toggle("header--blur", window.pageYOffset > 100);
    };
  })();




document.addEventListener('DOMContentLoaded', () => {

const moreBtns = document.querySelectorAll('.more-toggle');
	const informs = document.querySelectorAll('.info-table');

	moreBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let informs = currentBtn.closest('.pricing-item-horizontal').querySelector('.info-table');
			informs.classList.toggle('info-table--active');
			currentBtn.classList.toggle('more-toggle--active');
		});
	});

});

/* const moreBtns = document.querySelectorAll('.more-toggle');
const informs = document.querySelectorAll('.info-table');

const prTable = document.querySelector('.pricing-item-horizontal');
prTable.addEventListener("click", function(e) {
	let targetItem = e.target;
	if (targetItem.classList.closest('.more-toggle')){
		targetItem.closest('.more-toggle').classList.toggle('more-toggle-active');
		let informs = currentBtn.closest('.pricing-item-horizontal').querySelector('.info-table');
			informs.classList.toggle('info-table--active');
	}
}); */

/* 
const toggleBtn = document.querySelector(".more-toggle");
    const info = document.querySelector(".info-table");

toggleBtn.addEventListener("click", function () {
  
    if(this.classList.contains("active")){
        this.classList.toggle("active");
        info.classList.toggle("opens");
    }
    ;
}); */





document.querySelectorAll('.tabs__btn').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const id = e.target.getAttribute('href').replace('#', '');
        const targetTabContent = document.getElementById(id);
        const tabs = document.querySelectorAll('.tabs__btn');
        const content = document.querySelectorAll('.tabs__cena');

        tabs.forEach((child) => child.classList.remove('tabs__btn--active'));
        content.forEach((child) =>
            child.classList.remove('tabs__cena--active')
        );

        item.classList.add('tabs__btn--active');
        targetTabContent.classList.add('tabs__cena--active');
    })
);

document.querySelector('.tabs__btn').click();
    


/* 
const sectionButtons = document.querySelectorAll('.section__button');
sectionButtons.forEach(sectionButtons => {
	sectionButtons.addEventListener("click", function(e) {
		sectionButtons.classList.add('done');
		sectionButtons.innerHTML = "Okes";
	});
});


const section = document.querySelector('.section');
section.addEventListener("click", function(e) {
	let targetItem = e.target;
	if (targetItem.classList.closest('.section__button')){
		targetItem.closest('.section__button').classList.add('done');
		targetItem.innerHTML = "Okes";
	}
}); */


function check() {
	var checkBox = document.getElementById("checbox");
	var text1 = document.getElementsByClassName("pricing-person");
	var text2 = document.getElementsByClassName("pricing-banket");
	var person = document.getElementsByClassName("point-person");
	var banket = document.getElementsByClassName("point-banket");

	for (var i = 0; i < text1.length; i++) {
	  if (checkBox.checked == true) {
		text1[i].style.display = "none";
		text2[i].style.display = "block";
		/* person[i].style.opacity = 0.5;
		banket[i].style.opacity = 1; */

	  } else if (checkBox.checked == false) {
		text1[i].style.display = "block";
		text2[i].style.display = "none";
		//person[i].style.opacity = 1;
		//banket[i].style.opacity = 0.5;
	  }
	}
  }
  check();

 