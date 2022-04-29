let modulos = require('./funcionesDeTareas');
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = modulos.archivoTareas.leerArchivo();
        tareas.forEach((element,index) => {
            console.log((index+1)+'. '+element.titulo+' - ' + element.estado);
        });
        break;
    case 'crear':
        let nombreTarea = process.argv[3];
        let nuevoObjeto = {
            'titulo': nombreTarea,
            'estado': 'pendiente'
            };
        modulos.guardarTarea(nuevoObjeto);
        break;
    case 'filtrar':
        let estadoBuscado = process.argv[3];
        let arrayFiltrado = modulos.leerPorEstado(estadoBuscado);
        arrayFiltrado.map(console.log('La tarea ' +arrayFiltrado.titulo+ ' se encuentra en estado: '+arrayFiltrado.estado));
    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar - crear');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar - crear');
        console.log('------------------------------------');
        break;
}
