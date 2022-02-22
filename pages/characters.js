import styled from 'styled-components';
import { DevRoutes } from "../utils/dev_routes";

const Title = styled.h1`
    text-align: center;
    color: var(--text1);
    margin: 0 0 3.2rem;
`;

export default function Characters() {
	return (
		<>
            <Title>Characters</Title>
        </>
    )
};

export const getServerSideProps = DevRoutes;