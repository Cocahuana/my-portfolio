import { useState } from "react"
import { useTheme } from "styled-components";
function useColorMode ( initialState = false ) {
    const theme = useTheme();
    const dark = theme.colors.black_800;
    const light = theme.colors.white_800;
    const [state, setState] = useState( initialState );
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
        setState( !state );
        return state === false ? setColor( darkMode ) : setColor( lightMode )
    }
    return [
        color,
        {
            setColor: handleColorToggle,
        }
    ]
}

export default useColorMode