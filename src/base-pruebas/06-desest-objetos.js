//Desestructuración
//Asignación desestructurante

const person = {
    name : 'Tony',
    age: 45,
    key:'Ironman'
};

const {name, age, key}= person;
console.log(name, age, key);

const useContext = ({key,age, name, range ='(capitan)'})=>{
    return{
        keyName:key,
        years:age,
        latlng:{
            lat:14.1,
            lng:-12.5
        }
    }
}

const { keyName, years, latlng,}= useContext(person);
console.log(keyName,years, latlng);