const caracters = ['Goku', 'Vegeta', 'Trunks'];

const [ , ,p3]=caracters;

console.log(p3);

export const returnArray =()=>{
    return ['ABC', 123];
}

const[leters, numbers]=returnArray();
console.log(leters, numbers);

//Tarea

const useState =(valor)=>{
    return [valor, ()=>{
        console.log('hola mundo');
    }];
}
const [name,setName] = useState( 'Goku');
console.log(name);
setName();