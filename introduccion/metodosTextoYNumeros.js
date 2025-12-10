// Métodos básicos de TEXTO y NÚMEROS en JavaScript

// =====================
// 📌 MÉTODOS PARA TEXTO
// =====================

// 1. length (cuenta caracteres)
console.log("Hola".length); // 4

// 2. toUpperCase() (mayúsculas)
console.log("leonel".toUpperCase()); // "LEONEL"

// 3. toLowerCase() (minúsculas)
console.log("HOLA".toLowerCase()); // "hola"

// 4. includes() (verifica si contiene algo)
console.log("javascript".includes("script")); // true

// 5. indexOf() (posición de texto)
console.log("Hola mundo".indexOf("mundo")); // 5

// 6. slice() (recortar texto)
console.log("JavaScript".slice(0,4)); // "Java"

// 7. replace() (reemplazar)
console.log("Hola mundo".replace("mundo", "JS")); // "Hola JS"

// 8. trim() (quitar espacios)
console.log("   hola   ".trim()); // "hola"


// =====================
// 🔢 MÉTODOS PARA NÚMEROS
// =====================

// 1. Number() (texto → número)
console.log(Number("20")); // 20

// 2. parseInt() (entero)
console.log(parseInt("25.7")); // 25

// 3. parseFloat() (decimal)
console.log(parseFloat("25.7")); // 25.7

// 4. toFixed() (decimales)
console.log((3.1416).toFixed(2)); // "3.14"

// 5. Math.round() (redondeo normal)
console.log(Math.round(4.6)); // 5

// 6. Math.floor() (abajo)
console.log(Math.floor(4.9)); // 4

// 7. Math.ceil() (arriba)
console.log(Math.ceil(4.1)); // 5

// 8. Math.random() (número aleatorio entre 0 y 1)
console.log(Math.random());


//Numero de el 1 a 100
console.log(Math.round(Math.random() * 100))
