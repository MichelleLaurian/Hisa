// //  seleccionamos los dos elementos que serán clickables

// const toggleButton = document.getElementById("button-menu")
// const navWrapper = document.getElementById("nav")
// const menudisplay = document.getElementById("container_body")
// const menuFixed = document.getElementById("menu-fixed")

// /*
//   cada ves que se haga click en el botón
//   agrega y quita las clases necesarias
//   para que el menú se muestre.
// */
// toggleButton.addEventListener("click", () => {
//   toggleButton.classList.toggle("close")
//   navWrapper.classList.toggle("show")
//   menudisplay.classList.toggle("ocultar")
// })

// /*
//   Cuándo se haga click fuera del contenedor de enlaces
//   el menú debe esconderse.
// */

// navWrapper.addEventListener("click", (e) => {
//   if (e.target.id === "nav") {
//     navWrapper.classList.remove("show")
//     toggleButton.classList.remove("close")
//   }
// })

// // document.body.onscroll = () =>{
// //   menuFixed.classList.add("menuFixes")
// // }

const toggleMenuElement = document.getElementById("toggle-menu")
const mainMenuElement = document.getElementById("main-menu")

toggleMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.toggle("main-menu--show")
})
