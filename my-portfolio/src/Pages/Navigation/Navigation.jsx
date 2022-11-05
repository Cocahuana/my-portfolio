import React, {useState} from "react";
import styled from "styled-components";
import useColorMode from "../../services/customHooks/useColorMode";

const Container = styled.div`
	width: 100%;
	heigth: 100vh;
	background-color: ${({color}) => color.bg};
	color: ${({color}) => color.text};
`;

function Navigation() {
	const [color, {setColor}] = useColorMode();

	return (
		<Container color={color}>
			<button type='button' onClick={setColor}>
				Soy un boton xD
			</button>
			<p>Holaa</p>
		</Container>
	);
}

export default Navigation;
