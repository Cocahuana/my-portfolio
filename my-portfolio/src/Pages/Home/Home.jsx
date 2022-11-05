import React, {useState} from "react";
import Wrapper from "../../Components/Wrapper/Wrapper";
import MenuExample from "../../Components/MenuExample/MenuExample";
import styled from "styled-components";
import useColorMode from "../../services/customHooks/useColorMode";
import Toggler from "../../Components/Buttons/Toggler/Toggler";
import {useDarkMode} from "../../services/customHooks/useDarkMode";
const Container = styled.div`
	width: 100%;
	heigth: auto;
	background-color: ${({theme}) => theme.background};
	color: ${({theme}) => theme.text};
`;

function Home() {
	const [theme, themeToggler, mountedComponent] = useDarkMode();
	// const [color, {setColor}] = useColorMode();
	console.log(themeToggler);
	return (
		<Container theme={theme}>
			<Toggler theme={theme} toggleTheme={themeToggler} />
		</Container>
	);
}

export default Home;

// import Container from "../../Components/Container/Container";
// import Led from "../../Components/Led/Led";
// import Protoboard from "../../Components/Protoboard/Protoboard";
// 	<Container>
// 		<Protoboard>
// 			<Led />
// 			<Led />
// 			<Led />
// 		</Protoboard>
// 	</Container>
