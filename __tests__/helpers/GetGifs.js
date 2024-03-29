import { string } from "prop-types";
import { getGifs } from "../../src/helpers/GetGifs"

describe( 'Prueba en GetGifs()', () => {

    test('should return one array of gifs', async() => { 

        const gifs = await getGifs('One Piece');
        // console.log(gifs)

        expect( gifs.length ).toBeGreaterThan( 0 );

        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });

     })

} )