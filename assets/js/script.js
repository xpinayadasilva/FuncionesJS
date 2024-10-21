const colorFondoInicial='green';
const ele = document.getElementById('ele1'); 
const colorTexto='black';
const divUno = document.getElementById('txtUno'); 
const divDos = document.getElementById('txtDos'); 
const divTres = document.getElementById('txtTres'); 
const divCuatro = document.getElementById('txtCuatro'); 
let colorA = 'pink';
let colorS = 'orange';
let colorD = 'cyan';
var divKey = document.getElementById('key');

/* si existe ele (pintar.html) */
if (ele) {
  ele.style.backgroundColor = colorFondoInicial;
}

/*Funcion que recibe la id del elemento y el color para pintar */
const cambiarColorFondo = (id,ColorPintar) => {  
  if (document.getElementById(id).style.backgroundColor==colorFondoInicial) {
      document.getElementById(id).style.backgroundColor = ColorPintar; 
  } else {
    document.getElementById(id).style.backgroundColor = colorFondoInicial; 
  }      
}

/* si existe divUno (4_colores.html) cambia el color del texto */
if (divUno) {  
  divUno.addEventListener("click", () => {divUno.style.color = colorTexto; })
}
/* si existe divDos (4_colores.html) cambia el color del texto */
if (divDos) { 
  divDos.addEventListener("click", () => {divDos.style.color = colorTexto; })
}
/* si existe divUno (4_colores.html) cambia el color del texto */
if (divTres) {   
  divTres.addEventListener("click", () => {divTres.style.color = colorTexto; })
}
/* si existe divUno (4_colores.html) cambia el color del texto */
if (divCuatro) {   
  divCuatro.addEventListener("click", () => {divCuatro.style.color = colorTexto;  })
}

/*Funcion que recibe la id del elemento y el color para pintar el texto*/
function cambiarColorTexto (id,colorPintar)  {  
  if (document.getElementById(id)) {  //si existe el elemento      
    document.getElementById(id).style.color = colorPintar; 
  }    
}

/* si existe 'key' (index.html)  cambia el color del texto dependiendo de la tecla presionada */
if (divKey){   
  document.addEventListener('keydown', (event) =>{   
    if (event.key.toLowerCase() === 'a') {
        cambiarColorTexto('key',colorA);        
      } else if (event.key.toLowerCase() === 'd') {
        cambiarColorTexto('key',colorD); 
      } else if (event.key.toLowerCase() === 's') {
        cambiarColorTexto('key',colorS);  
      } 
    }
  )
}


    
