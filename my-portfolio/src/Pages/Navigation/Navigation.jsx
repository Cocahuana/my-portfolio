import styled from "styled-components";
import Toggler from "../../Components/Buttons/Toggler/Toggler";
const Container = styled.div`
	width: 100%;
	heigth: 100vh;
	background-color: ${({theme}) => theme.background};
	color: ${({theme}) => theme.text};
`;

function Navigation({theme, toggleTheme}) {
	// const [color, {setColor}] = useColorMode();

	return (
		<Container>
			<Toggler theme={theme} toggleTheme={toggleTheme} />
		</Container>
	);
}

export default Navigation;
