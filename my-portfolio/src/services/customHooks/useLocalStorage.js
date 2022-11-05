import { useState } from "react"

function useLocalStorage ( key, initialValue ) {
    const getItem = ( valor ) => {
        return localStorage.getItem( valor );
    }
    const saveItem = ( key, value ) => {
        localStorage.setItem( key, ToObject( value ) );
        setItem( value )
    }

    const ToJSON = ( value ) => {
        const newItem = JSON.parse( value )
        return newItem;
    }

    const ToObject = ( value ) => {
        const newItem = JSON.stringify( value )
        return newItem;
    }
    const localStorageItem = getItem( key );

    let parsedItem;
    if ( !localStorageItem )
    {
        saveItem( key, initialValue )
        parsedItem = initialValue
    } else
    {
        parsedItem = ToJSON( localStorageItem );
    }

    const [item, setItem] = useState( parsedItem );


    return [item, saveItem];
}

export default useLocalStorage