import React, {useState} from "react";
import Wrapper from "../../Components/Wrapper/Wrapper";
import MenuExample from "../../Components/MenuExample/MenuExample";
import styled from "styled-components";
import useColorMode from "../../services/customHooks/useColorMode";

const Container = styled.div`
	width: 100%;
	heigth: auto;
	background-color: ${({color}) => color.bg};
	color: ${({color}) => color.text};
`;

function Home() {
	const [color, {setColor}] = useColorMode();
	console.log("Color actual: ", color);
	console.log("Set actual: ", setColor);
	return (
		<Container color={color}>
			<button type='button' onClick={setColor}>
				Soy un boton xD
			</button>
			<p>Holaa</p>
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
