const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click' ,function(){
    alert('estaba seguro de que dirias que si!!!')
})

const noBtn =document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function(){
    const ramdonX = parseInt(Math.random()*100);
    const ramdonY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',ramdonY+'%');
    noBtn.style.setProperty('left',ramdonX+'%');
    noBtn.style.setProperty('transform',`translate(-${ramdonX},${ramdonY}%)`)

})