import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

const StyledMain = styled(motion.main)`
	height: 100%;
	max-width: 100%;
	width: 100%;
	overflow: hidden;
`;

export default function MotionMain(props) {
	const theme = useTheme();
	return (
		<StyledMain
			variants={theme.motion.pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			{...props}
		/>
	);
}
