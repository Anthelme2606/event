close=document.querySelector('.close-btn');
close.addEventListener('click',(event)=>{
    parent=close.parentElement;
    gp=parent.parentElement;
    ggp=gp.parentElement;
    gggp=ggp.parentElement;
    gggp.classList.add('d-none');
   
})

const progresses = document.querySelectorAll('.progress');
const progresses_b = document.querySelectorAll('.progress-b');

progresses.forEach((pr,x) => {
    progresses_b.forEach((pr_b,y)=>{
        if(x==y){
            const parentPr = pr.parentElement;
            const widthP = parentPr.dataset.setProgress;
            console.log(widthP);
           
           
           pr.style.setProperty('--width-progress', `${widthP}%`);
           pr_b.style.setProperty('--width-progress', `${widthP}%`);
           
        }
    });
   
   
});
const avatarList = [
    '{{ asset("images/avatar.png") }}',
   '{{ asset("images/avatar.png") }}',
   '{{ asset("images/avatar.png") }}',
   '{{ asset("images/avatar.png") }}',
   '{{ asset("images/avatar.png") }}',
   '{{ asset("images/avatar.png") }}',
   '{{ asset("images/avatar.png") }}',
// '{{ asset("images/avatar.png") }}',
// '{{ asset("images/avatar.png") }}',
// '{{ asset("images/avatar.png") }}',
// '{{ asset("images/avatar.png") }}',
// '{{ asset("images/avatar.png") }}',
// '{{ asset("images/avatar.png") }}',
];
const avatarsContainer = document.querySelector('.avatars');
const avatars = document.querySelectorAll('.avatar');
const maxAvatars = 5;

// avatarList.forEach((src, index) => {
//     if (index < maxAvatars) {
//         const img = document.createElement('img');
//         img.src = src;
//         img.alt = `User ${index + 1}`;
//         img.className = 'avatar';
//         avatarsContainer.appendChild(img);
//     }
// });

if (avatars.length > maxAvatars) {
    const more = document.createElement('span');
    more.className = 'more';
    more.textContent = '5++';
    avatarsContainer.appendChild(more);
}

