import styled from "styled-components";
const Scene = styled.div`
	perspective: 500px;
	position: relative;
	border: 1px solid #ccc;
`;
const Board = styled.div`
	width: 600px;
	height: 300px;
	background-color: green;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 3px;
	grid-auto-rows: minmax(100px, auto);

	position: relative;
	transition: 1s all ease-out;
	transform-style: preserve-3d;
	:hover {
		height: 300px;
		transform: rotate3d(1, 0, -1, 135deg);
	}
`;

const Hole = styled.div`
	width: 30px;
	height: 30px;
	background-color: yellow;
	list-style: none;
`;

function Protoboard(props) {
	let holes = [];
	for (let i = 0; i < 36; i++) {
		holes.push(i);
	}

	return (
		<Scene>
			<Board>
				{/* {holes.map((e) => (
				<Hole>{e}</Hole>
			))} */}
				{props.children}
			</Board>
		</Scene>
	);
}

export default Protoboard;
