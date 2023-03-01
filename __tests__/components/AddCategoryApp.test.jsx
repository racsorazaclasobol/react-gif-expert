import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategoryApp } from "../../src/components/AddCategoryApp"


describe( 'Tests on <AddCategory />', () => {

    test('should change the value of the text box', () => { 

        render( <AddCategoryApp onNewCategory={ () => {} } /> )
        const input = screen.getByRole('textbox');

        //Ejecutador de eventos
        fireEvent.input( input, { target: { value: 'Luffy'} } );

        expect( input.value ).toBe('Luffy');

        // screen.debug();

     })

     test('should call onNewCategory if input have a value', () => { 

        const inputValue = 'Luffy';
        //Jest fn es un Mock, y un Mock es una simulación de una funcion
        const onNewCategory = jest.fn();

        render( <AddCategoryApp onNewCategory={ onNewCategory } /> )
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Ejecuto el evento de escribir en en el textbox a traves del input
        fireEvent.input( input, { target: { value: inputValue } } );

        //Ejecuto el evento del submit dentro de mi formulario
        fireEvent.submit( form );

        expect( input.value ).toBe('')
        // screen.debug();

        //toHaveBeenCalled verifica si una funcion fue llamada
        expect( onNewCategory ).toHaveBeenCalled();
        // toHaveBeenCalledTimes verifica el numero de llamadas a una funcion
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        //toHaveBeenCalledWith verifica si la funcion fue llamada con el valor especificado en los parentesis
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )

      })

      test('should not call the onNewCategory if the imput its null', () => { 

        const inputValue = 'Luffy';

        const onNewCategory = jest.fn();

        render( <AddCategoryApp onNewCategory = { onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: null } } );
        fireEvent.submit( form );

        //Valido que no se haya ejecutado la funcion onNewCategory debido
        //a que el input va vacio
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        //Otra manera de hacer lo de arriba
        expect( onNewCategory ).not.toHaveBeenCalled();

       })
 
} )