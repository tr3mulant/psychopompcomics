import styled from 'styled-components';
import { motion } from 'framer-motion';
import { themeCommon } from '../themes/DefaultTheme';

const StyledHeader = styled(motion.header)`
	max-width: 100%;
`;

export default function MotionHeader(props) {
	return (
		<StyledHeader
			variants={themeCommon.motion.pageTransitionVariant}
			initial='hidden'
			animate='visible'
			exit='exit'
			{...props}
		/>
	);
}
