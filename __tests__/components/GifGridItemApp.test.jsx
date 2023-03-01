import { render, screen } from "@testing-library/react"
import { GifGridItemApp } from "../../src/components/GifGridItemApp"

describe('Pruebas en <GifGridItemApp />', () => {

    const title = "Luffy";
    const url = "https://luffy.com/luffy.jpg"

    test('should be do match with snapshot', () => { 
        
        const { container } = render( <GifGridItemApp title = {title} url = {url}/> )

        expect( container ).toMatchSnapshot()

     })

     test('should show the image with the url and title indicated ', () => { 

        render( <GifGridItemApp title = {title} url = {url}/> )
        //screen.debug();
        //console.log(screen.getByRole('img').src)
        //expect( screen.getByRole('img').src ).toBe( url );

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( title );

      })

      test('should show the title on the component', () => { 
        
        render( <GifGridItemApp title = {title} url = {url}/> )

        expect( screen.getByText( title ) ).toBeTruthy();

       })


} )