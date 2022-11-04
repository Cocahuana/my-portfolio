import styled from "styled-components";

const Box = styled.div`
	height: 100%;
	width: 100%;
`;

const Stack = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Container(props) {
	const {children} = props;
	return (
		<Box>
			<Stack>{children}</Stack>
		</Box>
	);
}

export default Container;
