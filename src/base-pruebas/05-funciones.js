// Funcines en JS
const sayHi = function(name){
    return `Hola, ${name}`;
}

const sayHi2 =(name)=>{
    return `Hola, ${name}`;
}

const sayHi3 =(name)=>`Hola, ${name}`;

 export const getUserActive= (name)=>{
    return{
        uid:'abc567',
        username:name
    }
}

const userActive = (name)=>({
    uid:'abc567',
    username:name
});

const usuarioActivo =userActive('Hania')
// console.log(sayHi2('Goku'));
// console.log(sayHi3('Vegeta'));
console.log(usuarioActivo);