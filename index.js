const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Feliz día de los inocentes mi compañero de redes 🤣. Por un momento te habias asustado, ya estabas pensando en el meme "Oh genial le gusto a la loca" jajaja')
    alert('Reciclando programas de HTML para un mejor uso con Mónica. Si te interesa el código ya sabes 1€ ;)')
    alert('Ha sido usted hackeado');
    location.href = 'https://youtu.be/mCdA4bJAGGk';
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})