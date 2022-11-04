import React from "react";
import Wrapper from "../../Components/Wrapper/Wrapper";
import MenuExample from "../../Components/MenuExample/MenuExample";
import Container from "../../Components/Container/Container";
import Led from "../../Components/Led/Led";
import Protoboard from "../../Components/Protoboard/Protoboard";

function Home() {
	return (
		<Container>
			<Protoboard>
				<Led />
				<Led />
				<Led />
			</Protoboard>
		</Container>
	);
}

export default Home;
