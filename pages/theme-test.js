import styled from 'styled-components';
import LinkPrimary, {
	LinkPrimarySm,
	LinkPrimaryLg,
	LinkPrimaryOutline,
	LinkPrimaryOutlineSm,
	LinkPrimaryOutlineLg,
} from '../components/styles/StyledButton.styled';
import { motion } from 'framer-motion';
import MotionLogo from '../components/styles/AnimatedLogo.styles';
import MotionMain from '../components/styles/MotionMain.styled';

const StyledMain = styled(MotionMain)`
	margin-top: ${(props) => props.theme.spaces.xxl};
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	align-content: center;
	justify-content: center;
	gap: 10vmax 10vmin;
`;

const StyledSection = styled.section`
	display: grid;
	gap: 2.5vh;
`;

const SurfaceSamples = styled(motion.div)`
	display: grid;
	--size: 20ch;
	grid-template-columns: var(--size) var(--size);
	grid-auto-rows: var(--size);
	gap: 2ch;

	@media (width <= 480px) {
		& {
			--size: 40vw;
		}
	}

	& > * {
		border: 0.1rem solid hsl(var(--brand-hue) 10% 50% / 15%);
		border-radius: 1rem;
		display: grid;
		place-content: center;
		font-size: 3rem;
		font-weight: 200;
	}
`;

const TextSamples = styled.div`
	display: grid;
	gap: 1.5ch;

	& > h1 {
		display: inline-flex;
		align-items: center;
		gap: 1ch;
	}
`;

const Swatch = styled.span`
	display: inline-block;
	flex-shrink: 0;
	inline-size: 1.5ch;
	block-size: 1.5ch;
	border-radius: 50%;
`;

const BrandSwatch = styled(Swatch)`
	color: var(--brand);
	background-color: var(--brand);
`;

const Text1Swatch = styled(Swatch)`
	color: var(--text1);
	background-color: var(--text1);
`;

const Text2Swatch = styled(Swatch)`
	color: var(--text2);
	background-color: var(--text2);
`;

const TextOnBrandSwatch = styled(Swatch)`
	color: var(--text-on-brand);
	background-color: var(--text-on-brand);
`;

const Surface = styled(motion.div)`
	box-shadow: var(--box-shadow-md);
`;

const Surface1 = styled(Surface)`
	background-color: var(--surface1);
	color: var(--text2);
`;

const Surface2 = styled(Surface)`
	background-color: var(--surface2);
	color: var(--text2);
`;

const Surface3 = styled(Surface)`
	background-color: var(--surface3);
	color: var(--text1);
`;

const Surface4 = styled(Surface)`
	background-color: var(--surface4);
	color: var(--text1);
`;

const TextBrand = styled.h1`
	color: var(--brand);
`;

const Text1H1 = styled.h1`
	color: var(--text1);
`;

const Text2H1 = styled.h1`
	color: var(--text2);
`;

const TextOnBrandH1 = styled.h1`
	color: var(--text-on-brand);
	background-color: var(--brand);
`;

const BreakpointTest = styled.div`
  width: 50px;
  height 50px;
  background-color: white;
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    background-color: yellow;
    // font-size: 60%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    background-color: blue;
    // font-size: 55%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    background-color: red;
    // font-size: 50%;
  }

`;

const surfaceVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
};

const childrenSurfaceVariants = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.2,
			ease: 'easeInOut',
		},
	},
};

export default function ThemeTest() {
	return (
		<StyledMain>
			<StyledSection>
				<SurfaceSamples
					initial='hidden'
					animate='visible'
					variants={surfaceVariants}
				>
					<Surface1 variants={childrenSurfaceVariants}>1</Surface1>
					<Surface2 variants={childrenSurfaceVariants}>2</Surface2>
					<Surface3 variants={childrenSurfaceVariants}>3</Surface3>
					<Surface4 variants={childrenSurfaceVariants}>4</Surface4>
				</SurfaceSamples>
			</StyledSection>
			<StyledSection>
				<TextSamples>
					<TextBrand>
						<BrandSwatch />
						Brand
					</TextBrand>
					<Text1H1>
						<Text1Swatch />
						Text Color 1
					</Text1H1>
					<Text2H1>
						<Text2Swatch />
						Text Color 2
					</Text2H1>
					<TextOnBrandH1>
						<TextOnBrandSwatch />
						Text On Brand
					</TextOnBrandH1>
				</TextSamples>
			</StyledSection>
			<section>
				<BreakpointTest>Text</BreakpointTest>
				<LinkPrimarySm href='/'>
					<a>Small</a>
				</LinkPrimarySm>
				<LinkPrimary href='/'>
					<a>Primary</a>
				</LinkPrimary>
				<LinkPrimaryLg href='/'>
					<a>Large</a>
				</LinkPrimaryLg>
				<LinkPrimaryOutlineSm href='/'>
					<a>Small</a>
				</LinkPrimaryOutlineSm>
				<LinkPrimaryOutline href='/'>
					<a>Large</a>
				</LinkPrimaryOutline>
				<LinkPrimaryOutlineLg href='/'>
					<a>Large</a>
				</LinkPrimaryOutlineLg>
				<MotionLogo />
			</section>
		</StyledMain>
	);
}
