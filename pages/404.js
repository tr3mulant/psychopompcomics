import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';
import portal from '../images/portal.svg';
import Image from 'next/image';
import { LinkPrimaryOutline } from '../components/styles/StyledButton.styled';

const MotionContainer = styled(motion.div)``;

const FourZeroFourContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
`;

const Title = styled.h1`
	text-align: center;
	color: var(--text1);
	position: absolute;
	top: 50%;
	left: 49.5%;
	transform: translate(-50%, -50%);
	z-index: 10;
`;

const FourZeroFourMain = styled(motion.main)`
	height: 100%;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	overflow: hidden;
	p {
		padding: ${(props) => props.theme.spaces.md};
	}
`;

const MotionImageContainer = styled(motion.div)`
	position: relative;
	max-width: 60rem;
	width: 100%;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
		max-width: 34rem;
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		max-width: 26rem;
	}
`;

export default function FourZeroFour() {
	const theme = useTheme();

	const svgVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<FourZeroFourMain
			variants={theme.motion.pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<MotionContainer
				variants={svgVariants}
				animate='visible'
				initial='hidden'
			>
				<FourZeroFourContainer>
					<Title>404</Title>
					<MotionImageContainer
						animate={{ rotate: -360 }}
						transition={{ ease: 'linear', repeat: Infinity, duration: 60 }}
					>
						<Image src={portal} alt='404' />
					</MotionImageContainer>
				</FourZeroFourContainer>
				<p>{`Wondering astray, looking for what can't be found`}</p>
				<LinkPrimaryOutline href='/'>
					<a>Let us guide you back</a>
				</LinkPrimaryOutline>
			</MotionContainer>
		</FourZeroFourMain>
	);
}
