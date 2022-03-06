import styled from 'styled-components';
import { motion } from 'framer-motion';
import { themeCommon } from '../themes/DefaultTheme';

const StyledMain = styled(motion.main)`
	height: 100%;
	max-width: 100%;
`;

export default function MotionMain(props) {
	return (
		<StyledMain
			variants={themeCommon.motion.pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			{...props}
		/>
	);
}
