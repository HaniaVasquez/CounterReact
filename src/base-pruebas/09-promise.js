import { getHeroById } from '../bases/08-export-import'

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         const hero= getHeroById(2)
//         console.log(hero);
//         resolve(hero);
//         reject('No se pudo encontrar el heroe')
//     }, 2000);
// });

// promise.then((hero)=>{
//     console.log('Then de la promesa', hero);
// })
// .catch( err=> console.warn(err))

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            // console.log(hero);
            if (hero) {
                resolve(hero);
            } else {
                reject('No se pudo encontrar el heroe')
            }
        }, 2000);
    });
}

getHeroByIdAsync(5)
    .then(console.log)
    .catch( console.warn)
