const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, x) {
    for (let i = 0; i < param.length; i++) {
        if (param[i] === x) {
            true;
            let position = param.indexOf(x);
            return position;
        }
    }
  }


  let buscar = finderName(nameFinder, "Tony");
  console.log(buscar); 