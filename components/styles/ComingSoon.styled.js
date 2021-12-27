import styled from "styled-components"; 

//CommingSoon component - the styled.section is an acutal <section> tag
const ComingSoon = styled.section`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: ${ props=>props.theme.colors.secondary };
	color: ${ props=>props.theme.colors.primary };
	text-align: center;
`;

export default ComingSoon;