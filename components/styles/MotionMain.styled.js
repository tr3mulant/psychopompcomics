import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../themes/DefaultTheme';

const StyledMain = styled(motion.main)`
	height: 100%;
	max-width: 100%;
`;

export default function MotionMain(props) {
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
