import React from "react";
import {ThemeProvider} from "styled-components";

const theme = {
	colors: {
		black_800: "#222222",
		white_800: "#dddddd",
	},
	background: {
		base_dark_mode: "#222222",
		base_light_mode: "#dddddd",
	},
	text: {
		base_dark_mode: "#dddddd",
		base_light_mode: "#222222",
	},
	fonts: ["sans-serif", "Roboto"],
	fontSizes: {
		small: "1em",
		medium: "2em",
		large: "3em",
	},
};
const Theme = ({children}) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
