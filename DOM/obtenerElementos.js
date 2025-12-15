// ===============================
// OBTENER ELEMENTOS DEL HTML DESDE JAVASCRIPT (DOM)
// Tema enfocado ÚNICAMENTE en selección de elementos
// ===============================

// 1️⃣ getElementById
// Obtiene UN solo elemento por su id
// Retorna un elemento o null
const elemento = document.getElementById('contenedor1');
// console.log(elemento);


// 2️⃣ getElementsByTagName
// Obtiene una colección de elementos por etiqueta HTML
// Retorna HTMLCollection (colección viva)
const divs = document.getElementsByTagName('div');
// console.log(divs);
// console.log(divs.length);


// 3️⃣ getElementsByClassName
// Obtiene una colección de elementos por nombre de clase
// Retorna HTMLCollection
const classContenedors = document.getElementsByClassName('contenedor-principal');
// console.log(classContenedors);


// ===============================
// 🔥 MÉTODOS MÁS USADOS (querySelector)
// ===============================

// 4️⃣ querySelector
// Obtiene EL PRIMER elemento que coincida
// Usa selectores CSS (#id, .clase, etiqueta)
const contn1 = document.querySelector('#contenedor1 .caja');
console.log(contn1);


// 5️⃣ querySelectorAll
// Obtiene TODOS los elementos que coincidan
// Retorna NodeList (NO es colección viva)
const variasCajas = document.querySelectorAll('#contenedor1 .caja');
console.log(variasCajas);

// NodeList se puede recorrer con forEach
variasCajas.forEach((caja, index) => {
    console.log(`Caja ${index + 1}:`, caja);
});


// ===============================
// 6️⃣ Selectores útiles
// ===============================

// Último hijo que tenga la clase .caja
const ultimaCaja = document.querySelector('.caja:last-child');
console.log(ultimaCaja);


// ===============================
// ✅ RESUMEN DEL TEMA
// - getElementById → un elemento
// - getElementsByTagName → varios por etiqueta
// - getElementsByClassName → varios por clase
// - querySelector → primer elemento
// - querySelectorAll → todos los elementos
// ===============================