import { getUser, getUsuarioActivo } from '../../base/05-funciones'
import '@testing-library/jest-dom'

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto ', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    
    const user = getUser()

    expect( user ).toEqual( userTest )
  })

  // getUsuarioActivo debe de retornar un objeto 

  test('getUsuarioActivo debe de retornar un objeto ', () => {
    const userActivoTest = {
      uid: 'ABC567',
      username: 'Mariluz'
    }
    const userActivo = getUsuarioActivo('Mariluz')
    expect( userActivo ).toEqual( userActivoTest )

    
    
  })
  
  
  
})
