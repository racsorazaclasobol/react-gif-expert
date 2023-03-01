import { useState } from "react";
//Esta importación se puede hacer gracias a los llamados archivos de 
//barril, estos son un index dentro de cada carpeta en el cual agregamos
//los exports de todos los componentes dentro de dicha carpeta, para así
//lograr hacer todas las importaciones necesarias en una sola linea 
import { AddCategoryApp, GifGridApp } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Piece' ]);

    const onAddNewCategory = (newCategory) => {

      if (categories.includes(newCategory) ) return;
      
      setCategories(categories => [newCategory, ...categories])
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategoryApp 
          onNewCategory = {(value) => onAddNewCategory(value) }/>

        {/* Listado de Gifs */}
          { categories.map( category => (
          <GifGridApp 
              key = {category} 
              category={ category }/>
          )
          ) }

    </>
  )
}
