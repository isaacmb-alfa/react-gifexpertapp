import { getGifs } from './../../helpers/getgifs';

describe('Pruebas en getGifs Fecth', () => {

    test('debe de traer 10 elementos', async () => {

        const gifs = await getGifs('One punch');

        expect(gifs.length).toBe(10);
    });
    test('debe de traer 10 elementos', async () => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });
});