const hbs = require('hbs')

hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (palabra)=>{
    
    let arreglo = palabra.split(' ');

    arreglo.forEach((arreglos, index) => {
        arreglo[index] = arreglos.charAt(0).toUpperCase() + arreglos.slice(1).toLowerCase();
    });
    return arreglo.join(' ');
})