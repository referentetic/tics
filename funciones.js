// Datos de la bitácora, que contienen las acciones con su respectivo mes (numerado)
const bitacora = [
   {  
      titulo: "Relevamiento tecnológico integral de la Escuela",
      tema: "Evaluación tecnológica",
      descripcion: "Se evaluó el estado y rendimiento de los recursos tecnológicos, incluyendo el funcionamiento del servidor, la conectividad de la red y el estado general de los dispositivos. También se revisó el estado del aula digital móvil, verificando su infraestructura y condiciones para el uso educativo.", 
      mes: 1, 
      año: 2025 
   },
   { 
      titulo: "Limpieza y mantenimiento del Servidor",
      tema: "Servidor escolar",
      descripcion: "Desarmado y limpieza física del servidor escolar para mantener el correcto funcionamiento.",
      mes: 2,
      año: 2025 
   },
   { 
      titulo: "Reparación de netbooks",
      tema: "Parque de reservas",
      descripcion: "Recuperación y restauración de 5 nuevos equipos para el parque de reserva.",
      mes: 2,
      año: 2025 
   },
   { 
      titulo: "Reasignación de netbooks",
      tema: "Parque de reservas",
      descripcion: "Se reasignaron 2 netbook a 2 preceptores del turno tarde para tareas administrativas de preceptoría.",
      mes: 2,
      año: 2025 
   },
   { 
      titulo: "Implementación de entornos virtuales de Aprendizaje",
      tema: "Equipamiento",
      descripcion: "Se inicia el acompañamiento para la propuesta de los EVA (Entornos Virtuales de Aprendizaje) junto a los docentes.",
      mes: 2,
      año: 2025 
   },
      { 
      titulo: "Lo nuevo editado desde Github Pages",
      tema: "Este es un tema interesante",
      descripcion: "Sin más creo que ya esta verificado el funcionamiento de este interesante script.",
      mes: 2,
      año: 2025 
   }
];

// Función para obtener el nombre del mes basado en el número del mes
const obtenerNombreMes = (mes) => {
   const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
   return meses[mes - 1];
};

// Función para renderizar la bitácora con la separación de meses
const listarBitacora = () => {
   const contenido = bitacora.reverse().map((p, index, arr) => {
       // Detectar si el mes ha cambiado para agregar la separación
       const mesAnterior = index === 0 ? null : arr[index - 1].mes;
       const mostrarMes = mesAnterior !== p.mes; // Mostrar mes solo si cambia

       // Condicional para agregar el separador de mes
       let mesSeparadorHTML = '';
       if (mostrarMes) {
           const nombreMes = obtenerNombreMes(p.mes);
           const mesYAnio = `${nombreMes} ${p.año}`;
           mesSeparadorHTML = `
               <li class="month-separator">
                   <span>${mesYAnio}</span>
               </li>
           `;
       }

       // Crear la estructura de cada bitácora
       const clase = index % 2 === 0 ? 'indexExtension1-right' : 'indexExtension1-badge';

       return `
           ${mesSeparadorHTML}  <!-- Mostrar el mes si corresponde -->
           <li class="${clase}">
               <div class="indexExtension1-badge"><i class="fa fa-user"></i></div>
               <div class="indexExtension1-panel">
                   <div class="indexExtension1-heading">
                       <h4 class="indexExtension1-title">${p.titulo}</h4>
                       <p class="indexExtension1-date">${p.tema}</p>
                   </div>
                   <div class="indexExtension1-body">
                       <p>${p.descripcion}</p>
                   </div>
               </div>
           </li>
       `;
   }).join('');

   // Insertar el contenido en el contenedor correspondiente
   document.querySelector("#indexExtension1").innerHTML = contenido;
};

// Llamada inicial para renderizar la bitácora
listarBitacora();
