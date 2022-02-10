

//ileas faq
// window.onload =function(){
// $('.q').each(function(){
//     this.onclick = function() {
//         if($(this).hasClass('active')){
//             $(this).removeClass('active');
//             $(this).children('i').toggle();
//             $(this).next(".a").slideToggle();
//         }else{
//             $(".q.active").children('i').toggle();
//             $(".q.active").next(".a").slideToggle();
//             $(".q.active").removeClass('active');
//             $(this).children('i').toggle();
//             $(this).next(".a").slideToggle();
//             $(this).addClass('active');
//         }
//     }
// });
// }

const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){  
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');    
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
