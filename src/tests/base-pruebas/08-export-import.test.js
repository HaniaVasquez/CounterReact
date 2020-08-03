import '@testing-library/jest-dom';
import { getHeroById } from '../../base-pruebas/08-export-import';
import {heroes, owners} from '../../data/heros';

describe('Pruebas en fn de heroes', () => {
    test('should return one hero by id', () => {
        //id con formato incorrecto
        const id =1;
        const hero = getHeroById(id);

        const heroData =heroes.find(h=>h.id===id);

        expect(hero).toEqual(heroData);
        //id con formato correcto pero que no exista heroe para ese ID
    })
    test('should return undefined if hero doesn´t exist', () => {
        //id con formato incorrecto
        const id =10;
        const hero = getHeroById(id);

        expect(hero).toBe(undefined)
        //id con formato correcto pero que no exista heroe para ese ID
    })
    
    
})
