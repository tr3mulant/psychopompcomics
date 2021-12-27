import styled from "styled-components"; 

//CommingSoon component - the styled.section is an acutal <section> tag
const ComingSoon = styled.section`
	max-width: 100%;
	padding: 48px 16px;
	color: ${ props=>props.theme.colors.primary };
	text-align: center;
`;

export default ComingSoon;