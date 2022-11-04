import styled from "styled-components";

const Head = styled.div`
	height: 50px;
	width: 25px;
	background-color: red;
	border-bottom: 10px solid grey;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
`;

const LeftFoot = styled.div`
	height: 50px;
	width: 5px;
	background-color: grey;
	position: absolute;
	left: 0;
`;

const RightFoot = styled.div`
	height: 50px;
	width: 5px;
	background-color: grey;
	position: absolute;
	right: 0;
`;

const Wrapper = styled.div`
	position: relative;
	width: 25px;
`;

function Led() {
	return (
		<>
			<Wrapper>
				<Head />
				<LeftFoot />
				<RightFoot />
			</Wrapper>
		</>
	);
}

export default Led;
