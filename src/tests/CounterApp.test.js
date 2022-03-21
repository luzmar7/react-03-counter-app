import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';


describe('Pruebas en <CounterApp />', () => {
  // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
  //   const saludo = 'Hola, soy Goku'
  //   const { getByText } = render(<PrimeraApp saludo={ saludo }/>)
  //   expect( getByText(saludo) ).toBeInTheDocument()    
  // })
  let wrapper = shallow( <CounterApp />)


  beforeEach(() =>{
    wrapper = shallow( <CounterApp />)
  })


  test('debe mostrar <ConuterApp /> correctamente', () => {
    const value = 10
    const wrapper = shallow( <CounterApp value = { value }/>)
    expect( wrapper ).toMatchSnapshot();
    
  })

  test('debe de mostrar el subtitulo enviado por props', () => {
    const value = 100
    const wrapper = shallow(
    
      <CounterApp
        value = { value }
      />
      )
      const counterText = wrapper.find('h2').text().trim()
      console.log(`xxxxx${counterText}xxxxxx`)
      expect( counterText ).toBe('100')
      // document.querySelector()
  })
  
  test('debe de incrementar con el boton +1', () => {
     wrapper.find('button').at(0).simulate('click');
     const counterText = wrapper.find('h2').text().trim()
     expect( counterText ).toBe('11')
  })

  test('debe de decrementar con el boton -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim()
    expect( counterText ).toBe('9')
 })

  test('debe de colocar el valor por defecto con el btn reset', () => {

    const wrapper = shallow( <CounterApp value = { 105 }/> )
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text().trim()
    console.log(counterText)

    expect( counterText ).toBe( '105' )

    
  })
  

  
  
})
