const btn=document.querySelector(".toggle-btn");
const sidebar=document.querySelector('.my-side');
btn.addEventListener('click',()=>{
   const side= document.querySelector('.my-side');
  
   side.classList.toggle('open');
});
document.addEventListener('click', (event) => {
    // Vérifie si la sidebar a la classe 'open'
    if (sidebar.classList.contains('open')) {
        // Si le clic est en dehors de la sidebar et n'est ni le menu, retire la classe 'open'
        if (!sidebar.contains(event.target)&& !btn.contains(event.target)) {
            sidebar.classList.remove('open');
        }
    }
});


// const togglers=document.querySelectorAll('.toggler');
// console.log(btn);
// let isClicked=false;
// btn.addEventListener('click',()=>{
//     isClicked=!isClicked;
 
//     togglers.forEach((tg,index)=>{
//         // console.log(tg);
//         if(isClicked==true){
//             console.log(isClicked);
//             tg.classList.remove('d-none');
//             tg.classList.add('d-none');

//         }else{
//             tg.classList.remove('d-none');
//             tg.classList.add('d-block'); 
//         }
       
//       });
// });

