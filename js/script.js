// Botón agregar Inputs, URL de redes sociales
document.getElementById("agregarInput").addEventListener("click", function() {
  // Crear el elemento input
  const nuevoInput = document.createElement("input");
  nuevoInput.type = "text";
  nuevoInput.className = "form-control";
  // nuevoInput.id = "floatingInput";
  nuevoInput.placeholder = "URL de tu perfil.";

  // Crear el botón de eliminación
  const botonEliminar = document.createElement("button");
  const iconoEliminar = document.createElement("span");
  botonEliminar.className = "borrar-redes";
  // botonEliminar.className = "mt-2";
  iconoEliminar.textContent = "delete";
  iconoEliminar.className = "material-icons";
  botonEliminar.onclick = function() {
    this.parentElement.removeChild(this);
    nuevoInput.remove();
  };
  // botonEliminar.textContent = "Eliminar";

  // Crear un contenedor para input y botón
  const contenedorInput = document.createElement("div");
  contenedorInput.appendChild(nuevoInput);
  contenedorInput.appendChild(botonEliminar);
  botonEliminar.appendChild(iconoEliminar);

  // Añadir el contenedor al elemento donde queremos los inputs
  document.getElementById("contenedorInputs").appendChild(contenedorInput);
});
