import { render, screen } from '@testing-library/react';
import { GifGridApp } from '../../src/components/GifGridApp'
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Test on <GifGridApp />', () => { 

    const category = "One Piece"

    test('should show the loading on the init', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })


        render( <GifGridApp category = { category } /> );
        expect( screen.getByText('Cargando...') ).toBeTruthy();
        expect( screen.getByText( category ) )
        // screen.debug();

     })

     test('should show the items when the images are loaded on useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Luffy',
                url: 'https://localhost/luffy.png'
            },
            {
                id: 'ABD',
                title: 'Zoro',
                url: 'https://localhost/zoro.png'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGridApp category = {category} /> )
        expect(screen.getAllByRole('img').length).toBe(2)

        // screen.debug();

     })

 })