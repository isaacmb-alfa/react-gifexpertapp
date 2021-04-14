
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from './../../components/AddCategory';

describe('pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    const value = 'Hola mundo';

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })


    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    })
    test('debe de llamar el SetCategories y limpiar la caja de texto', () => {
        // simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });
        // simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        //setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });

});

