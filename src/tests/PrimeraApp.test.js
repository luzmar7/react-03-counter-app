import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp'


describe('Pruebas en <PrimeraApp />', () => {
  // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
  //   const saludo = 'Hola, soy Goku'
  //   const { getByText } = render(<PrimeraApp saludo={ saludo }/>)
  //   expect( getByText(saludo) ).toBeInTheDocument()    
  // })
  test('debe mostrar <PrimerApp /> correctamente', () => {
    const saludo = 'Hola soy goku'
    const wrapper = shallow( <PrimeraApp saludo = { saludo }/>)
    expect( wrapper ).toMatchSnapshot();
    
  })

  test('debe de mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola soy goku'
    const subtitulo = 'Soy un subtitulo'
    const wrapper = shallow(
    
      <PrimeraApp 
        saludo = { saludo }
        subtitulo = { subtitulo }
      />
      )
      const textoParrafo = wrapper.find('p').text()
      console.log('HOLAA SASUKE', textoParrafo)
      
      // document.querySelector()

    
  })
  
  
  
})
