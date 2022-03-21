import { retornaArreglo } from '../../base/07-deses-arr'

describe('Pruebas en desestructuración', () => {

  test('Debe de retornar un string y un number  ', () => {
    // const arr = retornaArreglo()
    // expect(arr).toEqual(['ABC', 123])
    const [ letras, numeros ] = retornaArreglo()
    console.log(typeof number)

    expect( letras ).toBe( 'ABC' )
    expect( typeof letras ).toBe( 'string' )

    expect( numeros ).toBe( 123 )
    expect( typeof numeros ).toBe( 'number' )
    
  })
  
  
})
