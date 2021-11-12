import styled from "styled-components";
import img from '../images/deer.svg';

const ComingSoon = styled.section`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	background-color: #2c2c2c;
	background-image: url(${img.src});
	background-size: cover;
	background-position: center;
	color: #b8b8b8;
`;

export default ComingSoon;