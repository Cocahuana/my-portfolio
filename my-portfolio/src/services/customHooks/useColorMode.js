import { useState } from "react"
import { useTheme } from "styled-components";
import useLocalStorage from "./useLocalStorage";
function useColorMode ( initialState = false ) {
    const theme = useTheme();
    const dark = theme.colors.black_800;
    const light = theme.colors.white_800;

    const [state, setState] = useState( initialState );
    const [item, saveItem] = useLocalStorage( "colorModePortfolio", dark )
    // storage.setItem( keyName, keyValue );

    const darkMode = {
        bg: dark,
        text: light,
    }
    const lightMode = {
        bg: light,
        text: dark,
    }
    const [color, setColor] = useState( darkMode );

    const handleColorToggle = () => {
        let currentColor;
        setState( !state );
        if ( state === false )
        {
            currentColor = handleLocalStorageColor( darkMode );
            return setColor( currentColor )
        }
        currentColor = handleLocalStorageColor( lightMode );
        return setColor( currentColor )
    }

    const handleLocalStorageColor = ( colorMode ) => {
        // let existColor = localStorage.getItem( 'colorModePortfolio' );
        // if ( !existColor ) localStorage.setItem( "colorModePortfolio", JSON.stringify( darkMode ) )
        // else localStorage.setItem( "colorModePortfolio", JSON.stringify( colorMode ) )
        saveItem( "colorModePortfolio", colorMode );
        return item;
        // console.log( "colorMode: ", colorMode );
        // console.log( "localStorage: ", item );
    }
    return [
        color,
        {
            setColor: handleColorToggle,
        }
    ]
}

export default useColorMode