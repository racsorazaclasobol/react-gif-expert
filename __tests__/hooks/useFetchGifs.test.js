import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Test on the hook useFetchGifs', () => { 
    
    test('should return the state initial', () => { 
        
        const { result } = renderHook( () => useFetchGifs('One Piece') )
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0)
        expect( isLoading ).toBeTruthy();
     })

     test('should return one array of images and isLoading on false', async() => { 
        
        const { result } = renderHook( () => useFetchGifs('One Piece') )
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        )

        const { images, isLoading } = result.current;

        
        expect( images.length ).toBeGreaterThan(0)
        expect( isLoading ).toBeFalsy();
     })

 })