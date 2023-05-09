const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu-navegacion');
const modal = document.querySelector('.modal');
const imagen_1 = document.querySelector('.img-1');
const imagen_2 = document.querySelector('.img-2');
const imagen_3 = document.querySelector('.img-3');
 
const btn_cerrar = document.querySelector('.icono');
const imagen_modal = document.querySelector('.imagen_modal');

//console.log(menu)
//console.log(hamburguesa)

 // Muestra el valor de la alineación(align) del elemento con id="div1"

hamburguesa.addEventListener ('click',()=>{
    menu.classList.toggle("spread")
})
btn_cerrar.addEventListener ('click',()=>{
    modal.classList.add("ocultar");
})
imagen_1.addEventListener ('click',()=>{
    var url = imagen_1.getAttribute("src");
    imagen_modal.setAttribute("src", url);
    //Titulo del modal
    let text = "Clásico entre los clásicos";
    //Agrega el titulo
    document.getElementById("modal_titulo").innerHTML = text; 
    //Parrafo del modal
    let text_p =  `Es conocido por su preparación, gracias a la cafetera exprés, que tiene su origen en la revolución industrial, durante el siglo XIX. Desde entonces, el espresso ha gozado de la virtud del sabor y la textura concentradas.
    Por algo, en italiano, se describe al espresso como caffè all’italiana. Por la sencilla razón de que se trata de un invento que Italia ha regalado al mundo entero: en especial, a los muy cafeteros.`;
    //Agregar parrafo
    document.getElementById("modal_parrafo").innerHTML = text_p; 
    modal.classList.toggle("ocultar")
})
imagen_2.addEventListener ('click',()=>{
    var url = imagen_2.getAttribute("src");
    imagen_modal.setAttribute("src", url);
    //Titulo del modal
    let text = "Cappuccinos";
    //Agrega el titulo
    document.getElementById("modal_titulo").innerHTML = text; 
    //Parrafo del modal
    let text_p =  `Bebida a base de café espresso con espuma de leche.
    Disfrútalo en sabor tradicional, almendra, canela, vainilla e irlandés .`;
    //Agregar parrafo
    document.getElementById("modal_parrafo").innerHTML = text_p; 
    modal.classList.toggle("ocultar")
})
imagen_3.addEventListener ('click',()=>{
    var url = imagen_3.getAttribute("src");
    imagen_modal.setAttribute("src", url);
    //Titulo del modal
    let text = "Café Americano";
    //Agrega el titulo
    document.getElementById("modal_titulo").innerHTML = text; 
    //Parrafo del modal
    let text_p =  `El café americano es derivado del espresso, se caracteriza por añadir una cantidad de agua hirviendo mucho mayor, dando como resultado un café con un sabor menos potente y algo más diluido, por cual  lo hace menos amargo y facilita un sabor dulce.`;
    //Agregar parrafo
    document.getElementById("modal_parrafo").innerHTML = text_p; 
    modal.classList.toggle("ocultar")
})

window.addEventListener('click ',e=>{
    if(menu.classList.contains(' spread') && e.target !=menu && e.target!= hamburguesa){

            menu.classList.toggle("spread")

        }    

})