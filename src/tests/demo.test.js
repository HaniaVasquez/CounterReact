describe('Pruebas en el archivo demo.test.js', ()=>{
    test('debe de ser iguales los strings', () => {
        //inicialización
        const message = 'Hello world';
    
        //Estimulo
        const message2 = `Hello world`;
    
        //Observar el comportamiento
        expect(message).toBe(message2);//===
    })
});


