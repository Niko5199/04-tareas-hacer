const inquirer = require('inquirer');
require('colors');

const menuOpts = [
  {
    type: 'list',
    name: 'opt',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: '1. Crear tarea',
      },
      {
        value: '2',
        name: '2. Listar tareas',
      },
      {
        value: '3',
        name: '3. Listar tareas completas',
      },
      {
        value: '4',
        name: '4. Listar tareas pendientes',
      },
      {
        value: '5',
        name: '5. Completar tarea(s)',
      },
      {
        value: '6',
        name: '6. Borrar tareas',
      },
      {
        value: '0',
        name: '0. Salir',
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log('======================'.green);
  console.log('Seleccione una opción');
  console.log('======================\n'.green);

  const { opt } = await inquirer.prompt(menuOpts);

  return opt;
};

const pausa = async () => {
  console.log('\n');
  await inquirer.prompt({
    name: 'key',
    type: 'input',
    message: `Presione ${'ENTER'.green} para continuar...`,
  });
};

module.exports = {
  inquirerMenu,
  pausa,
};
