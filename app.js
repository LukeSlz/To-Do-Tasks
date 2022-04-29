let modulos = require('./funcionesDeTareas');
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log();
        console.log('--------------------------------------------------------------------');
        console.log('Listado de tareas');
        let tareas = modulos.archivoTareas.leerArchivo();
        tareas.forEach((element,index) => {
            console.log((index+1)+'. '+element.titulo+' - ' + element.estado);
        });
        console.log('--------------------------------------------------------------------');

        break;
    case 'crear':
        let nombreTarea = process.argv.slice(3).join(' ');
        let nuevoObjeto = {
            'titulo': nombreTarea,
            'estado': 'Pendiente'
            };
        modulos.guardarTarea(nuevoObjeto);
        break;
        case 'eliminar':
            let tareaAEliminar = process.argv[3];
            modulos.eliminarTarea(tareaAEliminar-1);
            break;
    case 'filtrar':
        let estadoBuscado = process.argv.slice(3).join(' ');
        let arrayFiltrado = modulos.filtrarPorEstado(estadoBuscado);
        arrayFiltrado.map(objeto => console.log('La tarea '+objeto.titulo+' se encuentra en estado: '+objeto.estado));
        break;
    case undefined:
        console.log();    
        console.log('--------------------------------------------------------------------');
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('                              crear "Nombre de tarea"');
        console.log('                              filtrar "Estado requerido"');
        console.log('                              eliminar "Numero de tarea a eliminar"');
        console.log('--------------------------------------------------------------------');
        break;

    default:
        console.log('--------------------------------------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('                              crear "Nombre de tarea"');
        console.log('                              filtrar "Estado requerido"');
        console.log('                              eliminar "Numero de tarea a eliminar"');
        console.log('--------------------------------------------------------------------');
        break;
}
