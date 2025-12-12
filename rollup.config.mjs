export default {
  input: 'modelos/main.js',   // archivo donde escribirás tu JS
  output: {
    file: 'dist/bundle.js',   // archivo generado por Rollup
    format: 'iife',           // formato para navegador
    sourcemap: true
  }
};
