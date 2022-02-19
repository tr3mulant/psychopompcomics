import styled from 'styled-components';
import { DevRoutes } from "../utils/dev_routes";

const Title = styled.h1`
    text-align: center;
    color: var(--text1);
    margin: 0 0 3.2rem;
`;

export default function About() {
	return (
		<>
            <Title>Style 2</Title>
        </>
    )
};

export const getServerSideProps = DevRoutes;