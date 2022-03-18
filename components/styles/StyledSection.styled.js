import styled from 'styled-components';

const StyledSection = styled.section`
	position: relative;
	max-width: 100%;
	padding-left: ${(props) => props.theme.spaces.ml};
	padding-right: ${(props) => props.theme.spaces.ml};
	overflow: hidden;
`;

export default StyledSection;
