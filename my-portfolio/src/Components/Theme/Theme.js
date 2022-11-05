import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useDarkMode } from "../../services/customHooks/useDarkMode";
// const theme = {
// 	colors: {
// 		black_800: "#222222",
// 		white_800: "#dddddd",
// 	},
// 	background: {
// 		base_dark_mode: "#222222",
// 		base_light_mode: "#dddddd",
// 	},
// 	text: {
// 		base_dark_mode: "#dddddd",
// 		base_light_mode: "#222222",
// 	},
// 	fonts: ["sans-serif", "Roboto"],
// 	fontSizes: {
// 		small: "1em",
// 		medium: "2em",
// 		large: "3em",
// 	},
// };
export const GlobalStyles = createGlobalStyle`
body {
    background: ${ ( { theme } ) => theme.body };
    color: ${ ( { theme } ) => theme.text };
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
};
export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
};
// function Theme({children}) {
// 	const [theme, themeToggler, mountedComponent] = useDarkMode();
// 	const themeMode = theme === "light" ? lightTheme : darkTheme;

// 	return (
// 		<ThemeProvider theme={themeMode}>
// 			<GlobalStyles />
// 			{children}
// 		</ThemeProvider>
// 	);
// }

// export default Theme;
