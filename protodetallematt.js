const imagenes = [
  "img-pn/longines-conquest 1.jpg",
  "img-pn/longines-conquest 2.jpg",
  "img-pn/longines-grande-classique.jpg"
];
let indice = 0;
function mostrarImagen() {
  const img = document.getElementById("imagen-nov");
  img.src = imagenes[indice];
}
function siguiente (){
   indice = (indice + 1) % imagenes.length;
   mostrarImagen()
}
function anterior() {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
}
const imagenes2 = [
  "img-pn/traje 1.jpg",
  "img-pn/traje 2.jpg",
  "img-pn/traje 3.jpg"
];
let indice2 = 0;
function mostrarImagen2() {
  const img = document.getElementById("imagen-nov2");
  img.src = imagenes2[indice2];
}
function siguiente2 (){
   indice2 = (indice2 + 1) % imagenes2.length;
   mostrarImagen2()
}
function anterior2() {
  indice2 = (indice2 - 1 + imagenes2.length) % imagenes2.length;
  mostrarImagen2();
}
const boton1 = document.getElementById('boton1');
    const loginForm = document.getElementById('loginForm');
    const backdrop = document.getElementById('backdrop');

    boton1.addEventListener('click', () => {
      const rect = boton1.getBoundingClientRect();

      loginForm.style.top = `${rect.bottom + window.scrollY + 5}px`;
      loginForm.style.right = `${rect.right + window }px`;

      loginForm.style.display = 'block';
      backdrop.style.display = 'block';
    });

    backdrop.addEventListener('click', () => {
      loginForm.style.display = 'none';
      backdrop.style.display = 'none';
    });
    
 function validarFormulario() {
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const errorMensaje = document.getElementById("errorMensaje");

      if (password !== confirmPassword) {
        errorMensaje.textContent = "Las contraseñas no coinciden.";
        return false;
      }

      errorMensaje.textContent = "";
      alert("Registro exitoso (simulado)");
      return true;
    }
  document.getElementById("ir").addEventListener("click", function () {
    window.location.href = "pagina.html";
  });
