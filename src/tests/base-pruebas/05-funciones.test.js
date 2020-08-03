import '@testing-library/jest-dom';
import { getUserActive } from '../../base-pruebas/05-funciones';

describe('Pruebas en 05-funciones.js', () => {
    test('debe de retornar un objeto ', () => {
        const name='Hania';
        const userTest = {
            uid: 'abc567',
            username: name,
        }
        const user = getUserActive(name);
        expect(user).toEqual(userTest);
    })


})