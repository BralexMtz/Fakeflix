
(function() {
  setTimeout(() => {  
    $('.Banner__content--title').innerHTML="Las aventuras de Liz y Brayan"
    $('.Banner__content--description').innerHTML="Cuando dos personas se quieren con el corazón es inevitable su reencuentro. Revive la historia de estos dos intrepidos enamorados."
    $('header.Banner').style='background-image: url("https://i.pinimg.com/564x/f5/bd/0c/f5bd0c23d97d8fa6f9c2a0395bf0a8eb.jpg"); opacity: 1; will-change: opacity, transform';

    let button=$('a.Banner__button')
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        e.stopPropagation();
        window.location.href="https://vimeo.com/675923315";
    })
    console.log("World!"); 
  }, 10000);
  

})();