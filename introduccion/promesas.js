/* ============================================================
   ARCHIVO COMPLETO: CALLBACKS, PROMESAS, ASYNC/AWAIT
   ------------------------------------------------------------
   Explicado de forma simple y con ejemplos claros.
   ============================================================ */

/* ============================================================
   1. FUNCIONES Y CALLBACKS
   ------------------------------------------------------------
   Un callback es una función que se pasa como argumento a otra.
   ============================================================ */

function hacerAlgo(callback) {
    console.log("Haciendo algo...");
    callback(); // se ejecuta después
}

hacerAlgo(() => {
    console.log("Este es el callback ejecutándose.");
});


/* ============================================================
   2. CALLBACKS EN setTimeout
   ============================================================ */

setTimeout(() => {
    console.log("Callback de setTimeout → pasó 1 segundo");
}, 1000);


/* ============================================================
   3. CALLBACKS EN MÉTODOS DE ARRAY
   ============================================================ */

const numeros = [1, 2, 3, 4];

// forEach → ejecuta algo por cada elemento
numeros.forEach((n) => {
    console.log("forEach →", n);
});

// map → transforma cada elemento
const dobles = numeros.map((n) => n * 2);
console.log("map →", dobles);

// filter → filtra elementos
const mayores = numeros.filter((n) => n > 2);
console.log("filter →", mayores);

// find → encuentra un elemento
const encontrado = numeros.find((n) => n === 3);
console.log("find →", encontrado);


/* ============================================================
   4. PROMESAS (Promise)
   ------------------------------------------------------------
   Una promesa representa algo que pasará en el futuro.
   resolve = operación exitosa
   reject  = operación fallida
   ============================================================ */

function tareaLenta() {
    return new Promise((resolve, reject) => {
        console.log("Procesando promesa...");

        setTimeout(() => {
            const ok = true; // cambia a false para probar errores

            if (ok) {
                resolve("La tarea terminó bien!");
            } else {
                reject("La tarea falló :(");
            }
        }, 1500);
    });
}

// Usando then y catch

tareaLenta()
    .then((res) => console.log("THEN →", res))
    .catch((err) => console.log("CATCH →", err));


/* ============================================================
   5. ASYNC y AWAIT
   ------------------------------------------------------------
   async → convierte la función en asíncrona
   await → espera a que termine una promesa
   try/catch → manejo de errores más limpio
   ============================================================ */

async function ejecutar() {
    try {
        console.log("Esperando con await...");

        const resultado = await tareaLenta();

        console.log("Resultado con await →", resultado);

    } catch (error) {
        console.log("Error con await →", error);
    }
}

ejecutar();


/* ============================================================
   FIN DEL ARCHIVO
   ============================================================ */
