// ===============================
// OBTENER Y MODIFICAR CONTENIDO DEL DOM
// ===============================

// Obtener el primer elemento con la clase .caja
const caja1 = document.querySelector('.caja');

// 1️⃣ OBTENER CONTENIDO
// innerHTML → obtiene el contenido HTML interno
console.log(caja1.innerHTML);

// textContent → obtiene SOLO texto (más seguro)
console.log(caja1.textContent);


// ===============================
// 2️⃣ MODIFICAR CONTENIDO
// ===============================

// Modificar el contenido HTML
caja1.innerHTML = 'HOLAAA';

// Modificar solo texto
caja1.textContent = 'Hola desde JavaScript';


// ===============================
// 3️⃣ MODIFICAR ATRIBUTOS
// ===============================

// Cambiar el id (los atributos se manejan como propiedades)
caja1.id = 'nuevo_id';

// Cambiar otros atributos
caja1.setAttribute('title', 'Caja modificada');
caja1.setAttribute('data-estado', 'activo');

// Obtener un atributo
console.log(caja1.getAttribute('data-estado'));


// ===============================
// 4️⃣ MODIFICAR ESTILOS CSS
// ===============================

// style es un OBJETO
// Las propiedades CSS se escriben en camelCase

caja1.style.backgroundColor = 'lightblue';   // background-color
caja1.style.color = 'black';                 // color del texto
caja1.style.padding = '10px';                // padding
caja1.style.borderRadius = '8px';            // border-radius
caja1.style.textTransform = 'uppercase';     // text-transform
caja1.style.fontSize = '18px';               // font-size
caja1.style.fontWeight = 'bold';             // font-weight


// ❌ OJO: esto está mal y no se necesita
// caja1.querySelector('.caja').style
// porque caja1 YA ES .caja


// ===============================
// ✅ RESUMEN RÁPIDO
// ===============================
// innerHTML → HTML interno
// textContent → solo texto
// setAttribute / getAttribute → atributos
// style.propiedad → estilos CSS (camelCase)
