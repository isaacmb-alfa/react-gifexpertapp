import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';

describe('Prueba que <GifGridItem/> corra correctamente', () => {
        const title = 'Un titulo';
        const url = 'https://localhost/algo.jpg';
        const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe de mostrar <GifGridItem/> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props());

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener  animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        // console.log(div.html().includes('animate__fadeIn'));
        console.log(div.prop('className'));

        // expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
        expect(className.includes('animate__fadeIn')).toBe(true);

    });

});