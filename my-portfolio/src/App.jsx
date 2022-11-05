import Home from "./Pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import Navigation from "./Pages/Navigation/Navigation";
// import Theme from "./Components/Theme/Theme";
import {ThemeProvider} from "styled-components";
import {useDarkMode} from "./services/customHooks/useDarkMode";
import {lightTheme, darkTheme, GlobalStyles} from "./Components/Theme/Theme";
import Toggler from "./Components/Buttons/Toggler/Toggler";
function App() {
	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;
	if (!mountedComponent) return <div />;
	return (
		<ThemeProvider theme={themeMode}>
			<>
				<GlobalStyles />
				<Toggler theme={theme} toggleTheme={themeToggler} />
				{/* <Routes>
					<Navigation />
					<Route path='/' element={<Home />} />
				</Routes> */}
			</>
		</ThemeProvider>
	);
}

export default App;
