import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

const StyledHeader = styled(motion.header)`
	max-width: 100%;
	text-align: center;
`;

export default function MotionHeader(props) {
	const theme = useTheme();
	return (
		<StyledHeader
			variants={theme.motion.pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			{...props}
		/>
	);
}
