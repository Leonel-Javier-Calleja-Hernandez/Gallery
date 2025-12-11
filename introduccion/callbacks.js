/* ============================================================
   ¿QUÉ ES UN CALLBACK?
   ------------------------------------------------------------
Una función se convierte en callback cuando se usa como argumento de otra función.
   ============================================================ */


/* ============================================================
   1. ESTRUCTURA BÁSICA DE UN CALLBACK
   ============================================================ */

function hacerAlgo(callback) {
    console.log("Estoy haciendo algo...");

    // Ejecutamos el callback
    callback();
}

// Llamamos la función y le pasamos un callback
hacerAlgo(() => {
    console.log("Este es el callback ejecutándose.");
});


/* ============================================================
   2. CALLBACK EN setTimeout (muy común)
   ------------------------------------------------------------
   setTimeout recibe un callback que se ejecuta después del tiempo.
   ============================================================ */

setTimeout(() => {
    console.log("Han pasado 2 segundos (callback de setTimeout)");
}, 2000);


/* ============================================================
   3. CALLBACKS EN MÉTODOS DE ARRAYS
   ------------------------------------------------------------
   Los arrays tienen métodos que SIEMPRE usan callbacks.
   ============================================================ */

const numeros = [1, 2, 3, 4];

// forEach: ejecuta el callback para cada elemento
numeros.forEach((num) => {
    console.log("forEach →", num);
});

// map: transforma cada elemento
const dobles = numeros.map((n) => {
    return n * 2;
});
console.log("map →", dobles);

// filter: filtra elementos según condición
const mayores = numeros.filter((n) => {
    return n > 2;
});
console.log("filter →", mayores);

// find: encuentra el primero que cumpla algo
const encontrado = numeros.find((n) => n === 3);
console.log("find →", encontrado);


/* ============================================================
   4. CALLBACK PERSONALIZADO
   ------------------------------------------------------------
   Tú puedes crear funciones que reciban un callback.
   ============================================================ */

function procesarUsuario(nombre, callback) {
    console.log(`Procesando usuario ${nombre}...`);

    // ejecutamos el callback
    callback(nombre);
}

procesarUsuario("Leonel", (n) => {
    console.log(`Callback: usuario procesado → ${n}`);
});


/* ============================================================
   5. CALLBACK EN CADENA → importante para entender JS
   ============================================================ */

function paso1(cb) {
    console.log("Paso 1 completado.");
    cb();
}

function paso2(cb) {
    console.log("Paso 2 completado.");
    cb();
}

function paso3() {
    console.log("Paso 3 completado.");
}

paso1(() => {
    paso2(() => {
        paso3();
    });
});

/* ============================================================
   ¿CUÁNDO USAR CALLBACKS?
   ------------------------------------------------------------
   ✔ Cuando quieres ejecutar código DESPUÉS de otro
   ✔ Cuando trabajas con TIEMPOS (setTimeout, setInterval)
   ✔ Cuando usas métodos de ARRAY (forEach, map, filter...)
   ✔ Cuando quieres hacer funciones REUTILIZABLES
   ✔ Cuando necesitas controlar el ORDEN de ejecución

   ❌ Pero OJO: si haces muchos callbacks anidados → "callback hell"
   (por eso existe async/await, pero eso es después 😉)
   ============================================================ */


   //crear
   
