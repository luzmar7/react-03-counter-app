import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('Pruebas en funciones de Heroes', () => {

  test('debe de retornar un heroe por id', () => {
    const id = 1
    const heroe = getHeroeById( id )
 

    const heroeData = heroes.find( h => h.id === 1 )

    expect( heroe ).toEqual( heroeData )
    
  })

  test('debe retornar un undefined si Heroe no existe', () => {
    const id = 10
    const heroe = getHeroeById( id )
    console.log(heroe)

    expect( heroe ).toBe( undefined)
    
  })
  // debe de retornar un arreglo con los heroes de DC
  // ownser
  // toEqual al arreglo filtrado

  test('debe de retornar un arreglo con los heros de DC', () => {
    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)
    const heroeData = heroes.filter( h => h.owner === owner)
    console.log(heroeData)
    expect(heroes).toEqual(heroeData)
    
  })
  

  // debe de rotornar un arreglo con los heroes de Marvel
  // length =2 // toBe

  test('debe de retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel'
    const heroesData = getHeroesByOwner(owner).length
    const tamanio = heroes.filter( h => h.owner == owner).length

    console.log('sasuke pruebas ', heroesData, tamanio)

    expect(heroesData).toBe( tamanio )
    
  })
  

  
  
})
