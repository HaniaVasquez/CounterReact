import {heroes, owners} from '../data/heros';

// console.log(heroes);

export const getHeroById =(id)=> heroes.find ((hero)=>hero.id===id)

// console.log(getHeroById(2));

export const getHerosByOwner=(owner)=>heroes.filter((hero)=> hero.owner ===owner)

// console.log(getHerosByOwner("Marvel"));