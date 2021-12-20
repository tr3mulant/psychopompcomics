import styled from "styled-components"; 
import img from '../../images/deer.svg';

//CommingSoon component - the styled.section is an acutal <section> tag
const ComingSoon = styled.section`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	background-color: ${ props=>props.theme.colors.secondary };
	background-image: url(${ img.src });
	background-size: cover;
	background-position: center;
	color: ${ props=>props.theme.colors.primary };
`;

export default ComingSoon;