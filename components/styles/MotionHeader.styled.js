import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

const StyledHeader = styled(motion.header)`
	width: 100%;
	max-width: 100%;
	position: relative;
	overflow: hidden;
`;

export default function MotionHeader(props) {
	const theme = useTheme();
	return (
		<StyledHeader
			role='banner'
			variants={theme.motion.pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			{...props}
		/>
	);
}
