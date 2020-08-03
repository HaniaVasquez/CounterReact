import '@testing-library/jest-dom'; 
import { getSaludo } from '../../base-pruebas/02-temple-string';

describe('Pruebas en 02-template-string.js', ()=>{
    test('getSaludo - debe retornar Hola Hania ', () => {
        const name = 'Hania';
        const greeting = getSaludo(name);
        expect(greeting).toBe('Hola ' + name);
    }) 
    test('getSaludo - debe retornar Hola Sofia si no hay argumento en nombre ', () => {
        const greeting = getSaludo();
        expect(greeting).toBe('Hola Sofia');
    })
    
})