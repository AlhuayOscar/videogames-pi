import React from 'react';
import { useDispatch} from 'react-redux';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddVideogame from '../AddVideogame/AddVideogame';

configure({adapter: new Adapter()});
const dispatch = useDispatch()
describe('<AddVideogame />',() => {

  describe('Estructura', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<AddVideogame />);
    })
    it('Renderiza un <form>', () => {
      expect(wrapper.find('form')).toHaveLength(1)
    })

    it('Renderiza un label con el texto igual a "Description:"', () => {
      expect(wrapper.find('label').at(0).text()).toEqual('Description:');
    })

    it('Renderiza una textarea con la propiedad "name" igual a "description"', () => {
      expect(wrapper.find('textarea[name="description"]')).toHaveLength(1);
    })

    it('Renderiza un label con el texto igual a "Game Name:"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find('label').at(1).text()).toEqual('Game Name:');
    })

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('input[name="title"]')).toHaveLength(1);
    })

    it('Renderiza un label con el texto igual a "Released date:"', () => {
       expect(wrapper.find('label').at(2).text()).toEqual('reldate');
    })
  
    it('Renderiza un boton con el "type" "submit"', () => {
       expect(wrapper.find('button[type="submit"]')).toHaveLength(1)
    })
  })
});