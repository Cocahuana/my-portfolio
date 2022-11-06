import React, {useState} from "react";
import styled from "styled-components";
import Toggler from "../../Components/Buttons/Toggler/Toggler";
const Container = styled.div`
	width: 100%;
	heigth: auto;
	background-color: ${({theme}) => theme.background};
	color: ${({theme}) => theme.text};
`;

function Home({theme, toggleTheme}) {
	return (
		<Container>
			<Toggler theme={theme} toggleTheme={toggleTheme} />
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
