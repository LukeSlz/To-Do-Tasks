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
function eliminarTarea(Startingindex){
    let arrayDeTareas = archivoTareas.leerArchivo();
    arrayDeTareas.splice(Startingindex,1);
    escribirJSON(arrayDeTareas);
}
function filtrarPorEstado(estadoBuscado){
    let arrayDeTareas = archivoTareas.leerArchivo();
    let arrayFiltrado = arrayDeTareas.filter(function(value){
        if(value.estado==estadoBuscado){
            return value;
        }
    });
    return arrayFiltrado;
}
module.exports = {
    archivoTareas,
    filtrarPorEstado,
    guardarTarea,
    eliminarTarea
    };
