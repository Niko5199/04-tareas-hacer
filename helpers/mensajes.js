const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {
  return new Promise(resolve => {
    console.clear();
    console.log('======================'.green);
    console.log('Seleccione una opción');
    console.log('======================\n'.green);

    console.log(`${'1.'.green} Crear una tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tareas`);
    console.log(`${'0.'.green} Salir \n`);

    // * Preparamos la interfaz para el usuario

    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Elije una opción:', ans => {
      resolve(ans);
      rl.close();
    });
  });
};

const pausa = () => {
  return new Promise(resolve => {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`\nPresione ${'ENTER'.green} para continuar...\n`, ans => {
      rl.close();
      resolve();
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
