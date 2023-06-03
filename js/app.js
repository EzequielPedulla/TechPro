document.addEventListener('DOMContentLoaded', function () {
  // Seleccionar los elementos de la interfaz

  const inputEmail = document.querySelector('#email');
  const formulario = document.querySelector('#formulario');
  //Asignar eventos

  inputEmail.addEventListener('blur', validar);

  function validar(e) {
    if (e.target.value.trim() === '') {
      mostrarAlerta('El Campo email es obligatorio');
      return;
    }

    if (!validarEmail(e.target.value)) {
      mostrarAlerta('El email no es valido');
      return;
    }

    limpiarAlerta();
  }

  function mostrarAlerta(mensaje) {
    //Comprueba si ya existe una alerta
    limpiarAlerta();

    //Generar alerta de HTMl

    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    //Inyectar el error al formulario

    formulario.appendChild(error);
  }

  function limpiarAlerta() {
    const alerta = document.querySelector('.error');
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }
});
