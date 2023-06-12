var categoryButton = document.getElementsByClassName("c_button");

for(i=0;i<categoryButton.length;i++){
    categoryButton[i].addEventListener("click",function(){
        removeClassBtn();
        this.classList.toggle('c_padd');
    });
}

function removeClassBtn(){
    var categoryButton = document.getElementsByClassName("c_button");
    for(i=0;i<categoryButton.length;i++){
        categoryButton[i].classList.remove("c_padd");
    }
}


const checkpoint = 150;
const checkpoint2 = 1000;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll <= checkpoint) {
    document.querySelector("#hr_1").style.width = 10 + '%'
  } else {
    document.querySelector("#hr_1").style.width = 90 + '%'
    document.querySelector("#hr_1").style.transition = 'all 2s'
  }

  if(currentScroll <= checkpoint2){
    document.querySelector("#hr_2").style.width = 10 + '%'
  }else{
    document.querySelector("#hr_2").style.width = 90 + '%'
  document.querySelector("#hr_2").style.transition = 'all 2s'
  }
  
});


/*******************************************************
 *  WEB COMPONENTS - SHADOW DOM con Custom Elements - Se aplica a cambiar texto de suscripción 
 *******************************************************/

//funcion que nos permite llamar al shadow dom por medio de un boton 
function modificarTxt(){
  const elemento = document.createElement('div');
  const shadowRoot = elemento.attachShadow({mode: 'open'});
  /*Shadow DOM sirve para el encapsulamiento. Le permite a un componente tener su propio árbol DOM oculto, 
  que no puede ser accedido por accidente desde el documento principal, puede tener reglas de estilo locales, y más.
  */
  document.getElementById("cambiar").innerHTML = "Gracias, Por la suscripción !!";
 
}