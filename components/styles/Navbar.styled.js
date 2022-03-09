import styled from 'styled-components';

const StyledNavbar = styled.nav`
    position: sticky;
    top 0;
    z-index: 100;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--surface1);
    * {
        background-color: var(--surface1);
    }
    margin: 0 0 ${(props) => props.theme.spaces.lg} 0;
    @media only screen and (max-width: ${(props) =>
			props.theme.breakpoints.sm}) {
        margin: 0;
        padding-bottom: ${(props) => props.theme.spaces.lg};
    }
    @media only screen and (max-width: ${(props) =>
			props.theme.breakpoints.xxs}) {
        padding-bottom: 0;
    }
`;

export const StyledNavbar_1 = styled(StyledNavbar)``;

export const StyledNavbar_2 = styled(StyledNavbar)`
	background-color: var(--surface2);
	* {
		background-color: var(--surface2);
	}
`;

export const StyledNavbar_3 = styled(StyledNavbar)`
	background-color: var(--surface3);
	* {
		background-color: var(--surface3);
	}
`;

export const StyledNavbar_4 = styled(StyledNavbar)`
	background-color: var(--surface4);
	* {
		background-color: var(--surface4);
	}
`;

export const StyledNavbar_5 = styled(StyledNavbar)`
	background-color: var(--surface1);
	* {
		background-color: var(--surface1);
	}
`;

export const StyledNavbar_6 = styled(StyledNavbar)`
	background-color: var(--surface1);
	* {
		background-color: var(--surface1);
	}
`;

export const StyledNavbar_7 = styled(StyledNavbar)`
	background-color: var(--surface1);
	* {
		background-color: var(--surface1);
	}
`;
