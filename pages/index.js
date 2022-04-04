import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';
import MotionHeader from '../components/styles/MotionHeader.styled';
import MotionMain from '../components/styles/MotionMain.styled';
import MotionFooter from '../components/Footer';
import StyledSection from '../components/styles/StyledSection.styled';
import SectionContainer from '../components/styles/SectionContainer.styled';
import Image from 'next/image';
import SoCBanner from '../images/seed-of-cain/banner.jpg';
import SoCPillar from '../images/seed-of-cain/pillar.jpg';
import SoCLogo from '../images/seed-of-cain/logo.png';
import {
	RobotIconHexagon,
	BlockchainIconHexagon,
	MicrochipIconHexagon,
} from '../components/HexagonIcons';
import LogoWithText from '../components/LogoWithText';

const SoCBannerContainer = styled.div`
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: none;
	}
`;

const SoCPillarContainer = styled.div`
	display: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: block;
	}
`;

const SoCLogoContainer = styled(motion.div)`
	position: absolute;
	bottom: 25%;
	right: 5%;
	width: 33.3%;
	z-idex: 2;

	@media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
		bottom: 10%;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 25rem;
	}
`;

const PsychoDescriptionContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: var(--space-xl);
	max-width: 72rem;
	margin-left: auto;
	margin-right: auto;

	& > div + div {
		margin-left: var(--space-lg);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
		flex-wrap: wrap;
		max-width: 27rem;
	}
`;

const PsychoDescriptionImage = styled(motion.div)`
	width: 20rem;
	flex-shrink: 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
		width: 100%;
		flex-shrink: initial;
	}
`;

const PsychoDescriptionText = styled.div`
	flex-shrink: 1;

	@media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
		width: 100%;
		flex-shrink: initial;
		margin-top: var(--space-xl);
	}
`;

const ThreeUpContainer = styled.div`
	margin-top: var(--space-xxl);
	max-width: 90rem;
	margin-left: auto;
	margin-right: auto;
	display: grid;
	grid-gap: var(--space-xl);
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-areas: 'item item item';

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		max-width: 27rem;
		grid-template-columns: 1fr;
		grid-template-areas:
			'item'
			'item'
			'item';
	}
`;

const ThreeUpItem = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ThreeUpImageContainer = styled.div`
	width: 15rem;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
`;

export default function Home() {
	const theme = useTheme();
	return (
		<>
			<MotionHeader>
				<SoCBannerContainer>
					<Image
						src={SoCBanner}
						alt='Seed of Cain Promo Banner showing Colonel Frost standing in rubble with a city behind him'
						width={6075}
						height={3417}
						layout='responsive'
						placeholder={'blur'}
					/>
				</SoCBannerContainer>
				<SoCPillarContainer>
					<Image
						src={SoCPillar}
						alt='Seed of Cain Promo Banner showing Colonel Frost standing in rubble with a Cog and the city behind him'
						width={2700}
						height={3600}
						layout='responsive'
						placeholder={'blur'}
					/>
				</SoCPillarContainer>
				<SoCLogoContainer
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1,
						duration: 1,
					}}
				>
					<Image
						src={SoCLogo}
						alt='Seed of Cain Logo'
						layout='responsive'
						width={3076}
						height={1649}
						sizes={`(max-width: ${theme.breakpoints.sm}) 25rem, 33.3%`}
					/>
				</SoCLogoContainer>
			</MotionHeader>
			<MotionMain>
				<StyledSection>
					<SectionContainer>
						<PsychoDescriptionContainer>
							<PsychoDescriptionImage>
								<LogoWithText
									sizes={`(max-width: ${theme.breakpoints.xs}) 27rem, 20rem`}
								/>
							</PsychoDescriptionImage>
							<PsychoDescriptionText>
								<h2>A New Kind of Comic Studio</h2>
								<hr />
								<p>
									{
										'Psychopomp Comics will guide you into another realm. We are digitally native, NFT-powered and artist-centric. We use these values to disrupt the industry and provide unique experiene that bridges the legacy and digital world'
									}
								</p>
							</PsychoDescriptionText>
						</PsychoDescriptionContainer>
						<ThreeUpContainer>
							<ThreeUpItem>
								<ThreeUpImageContainer>
									<MicrochipIconHexagon sizes='15rem' />
								</ThreeUpImageContainer>
								<h2>Digitally Native</h2>
								<p>
									Our comics are free to read on our website, and we will
									continue to experiment with online story consumption
								</p>
							</ThreeUpItem>
							<ThreeUpItem>
								<ThreeUpImageContainer>
									<BlockchainIconHexagon sizes='15rem' />
								</ThreeUpImageContainer>
								<h2>NFT-Powered</h2>
								<p>
									Since our content is free, our main revenue stream is through
									digital collectibles on the Solana blockchain
								</p>
							</ThreeUpItem>
							<ThreeUpItem>
								<ThreeUpImageContainer>
									<RobotIconHexagon sizes='15rem' />
								</ThreeUpImageContainer>
								<h2>Artist-Centric</h2>
								<p>
									With smart contract technology we are able to share profits
									and royalties with the artists that helped create our stories
									and IP
								</p>
							</ThreeUpItem>
						</ThreeUpContainer>
					</SectionContainer>
				</StyledSection>
			</MotionMain>
			<MotionFooter />
		</>
	);
}
