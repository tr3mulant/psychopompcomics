import styled from 'styled-components';

const StyledSection = styled.section`
	position: relative;
	max-width: 100%;
	padding-left: ${(props) => props.theme.spaces.md};
	padding-right: ${(props) => props.theme.spaces.md};
`;

export default StyledSection;
