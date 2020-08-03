import '@testing-library/jest-dom';
import { returnArray } from '../../base-pruebas/07-desest-arreglos';

describe('Prueba de desestructuración', () => {
    test('debe retornar un string y un número ', () => {
        const [letters, numbers]= returnArray();
        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');

        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
        // expect (arr).toEqual(['ABC',123])
    })
    
})
