const name = 'Hania';
const last = 'Vásquez';

// const fullName = name + ' '+last;
const fullName = `Mi nombre es ${name} ${last}`;
// console.log(fullName);

export function getSaludo(name= 'Sofia'){
    return 'Hola ' + name
}
// console.log(`Este es un texto de saludo: ${getSaludo(name)}`);