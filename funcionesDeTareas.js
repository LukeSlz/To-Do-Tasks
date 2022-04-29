const fs = require('fs');
var archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
}
function escribirJSON(unArray){
    fs.writeFileSync('tareas.JSON',JSON.stringify(unArray));
}

function guardarTarea(objeto){
    let arrayDeTareas = archivoTareas.leerArchivo();
    arrayDeTareas.push(objeto);
    escribirJSON(arrayDeTareas);
};

function leerPorEstado(estadoBuscado){
    let arrayDeTareas = archivoTareas.leerArchivo();
    let filtrarPorEstado = arrayDeTareas.filter(estado==estadoBuscado)
    
    return filtrarPorEstado;
}
module.exports = {
    archivoTareas,
    leerPorEstado,
    guardarTarea
};
