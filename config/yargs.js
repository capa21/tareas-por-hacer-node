const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const optCrear = {
    descripcion
}
const optActualizar = {
    descripcion,
    completado
}
const optBorrar = {
    descripcion
}
const comandosToDo = require('yargs')
    .command('crear', 'Crear una tarea por hacer', optCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optActualizar)
    .command('borrar', 'Borra la tarea indicada', optBorrar)
    .help()
    .argv;

module.exports = {
    comandosToDo
}