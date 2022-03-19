import StyledSection from '../components/styles/StyledSection.styled';
import SectionContainer from '../components/styles/SectionContainer.styled';
import LogoTextImage from '../components/LogoTextImage';
import MotionMain from '../components/styles/MotionMain.styled';
import MotionHeader from '../components/styles/MotionHeader.styled';
import MotionFooter from '../components/Footer';
import styled from 'styled-components';
import Image from 'next/image';
import { DevRoutes } from '../utils/dev_routes';
import { motion } from 'framer-motion';

const AboutHeader = styled(MotionHeader)`
	text-align: center;
	padding: ${(props) => props.theme.spaces.xxl}
		${(props) => props.theme.spaces.lg} ${(props) => props.theme.spaces.xl};
`;

const AboutMain = styled(MotionMain)`
	display: flex;
	flex-direction: column;
`;

const TwoUpContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const TwoUp = styled.article`
	width: 100%;
	padding-left: ${(props) => props.theme.spaces.xl};
	padding-right: ${(props) => props.theme.spaces.xl};
	margin-bottom: ${(props) => props.theme.spaces.xxl};

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		width: 50%;

		&:first-child {
			margin-bottom: initial;
			border-right: 0.1rem solid var(--surface4);
		}
	}
`;

const CoreTeamContainer = styled(motion.div)`
	margin-top: ${(props) => props.theme.spaces.ml};
	display: grid;
	grid-template-areas:
		'card'
		'card'
		'card'
		'card';
	gap: ${(props) => props.theme.spaces.ml};
	grid-template-rows: 1fr;
	grid-template-columns: 1fr;
	width: 100%;
	max-width: 22rem;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: ${(props) => props.theme.breakpoints.xs}) {
		grid-template-areas:
			'card card'
			'card card';
		gap: ${(props) => props.theme.spaces.ml};
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 1fr;
		max-width: 42rem;
	}
`;

const CoreTeamMember = styled(motion.section)`
	background-color: var(--surface1);
	border: 0.1rem solid hsl(var(--brand-hue) 10% 50% / 15%);
	border-radius: 1rem;
	padding: ${(props) => props.theme.spaces.ml};
	box-shadow: var(--box-shadow-md);
	h4 + h4 {
		margin-top: ${(props) => props.theme.spaces.xs};
	}
`;

const CoreTeamMemberImage = styled.div`
	display: flex;
	justify-content: center;
`;

const coreTeamVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.1,
		},
	},
};

const childrenTCoreTeamVariants = {
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

export default function About() {
	return (
		<>
			<AboutHeader role='banner'>
				<LogoTextImage />
			</AboutHeader>
			<AboutMain>
				<StyledSection>
					<SectionContainer>
						<TwoUpContainer>
							<TwoUp>
								<h3>{'Spirit Guide to Another Realm. . .'}</h3>
								<p>
									{
										'We are your psychopomp—your spirit guide—to an amazing Web 3.0 future infused with the culture of comic books and collectibles.  We’re creating new worlds with incredible stories and insane art, and making it free and accessible for all.'
									}
								</p>
								<p>
									{
										'NFT technology makes it possible for a comic book company to succeed alongside the artists that help bring stories to life, not at their expense.  This is the embodiment of WAGMI – the mantra popularized by NFT enthusiasts that expresses the idea that, together, “We’re All Going to Make It.”'
									}
								</p>
								<h3>{'How is Psychopomp comics Different?'}</h3>
								<ol>
									<li>
										<p>{'Free digital comics for all'}</p>
									</li>
									<li>
										<p>{'Funded by limited edition NFTs'}</p>
									</li>
									<li>
										<p>{'Generous airdrops to our beloved NFT holders'}</p>
									</li>
									<li>
										<p>
											{
												'A commitment to growing the business so our NFTs gain value alongside it.'
											}
										</p>
									</li>
								</ol>
							</TwoUp>
							<TwoUp>
								<h3 className='text-center'>{'Core Team'}</h3>
								<CoreTeamContainer
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									variants={coreTeamVariants}
								>
									<CoreTeamMember variants={childrenTCoreTeamVariants}>
										<CoreTeamMemberImage>
											<Image
												width='75'
												height='75'
												src='https://via.placeholder.com/150?text=temp'
												alt='Ian'
											/>
										</CoreTeamMemberImage>
										<h4>Ian</h4>
										<h4>Chief Wagmi Officer</h4>
										<h4>@RoninRosewater</h4>
									</CoreTeamMember>
									<CoreTeamMember variants={childrenTCoreTeamVariants}>
										<CoreTeamMemberImage>
											<Image
												width='75'
												height='75'
												src='https://via.placeholder.com/150?text=temp'
												alt='Caleb'
											/>
										</CoreTeamMemberImage>
										<h4>Caleb</h4>
										<h4>Developer</h4>
										<h4>@4l4RIC_1</h4>
									</CoreTeamMember>
									<CoreTeamMember variants={childrenTCoreTeamVariants}>
										<CoreTeamMemberImage>
											<Image
												width='75'
												height='75'
												src='https://via.placeholder.com/150?text=temp'
												alt='Spencer'
											/>
										</CoreTeamMemberImage>
										<h4>Spencer</h4>
										<h4>Director of Lore</h4>
										<h4>@The_NFTer</h4>
									</CoreTeamMember>
									<CoreTeamMember variants={childrenTCoreTeamVariants}>
										<CoreTeamMemberImage>
											<Image
												width='75'
												height='75'
												src='https://via.placeholder.com/150?text=temp'
												alt='Scott'
											/>
										</CoreTeamMemberImage>
										<h4>Scott</h4>
										<h4>Developer</h4>
										<h4>@__tr3mulant__</h4>
									</CoreTeamMember>
								</CoreTeamContainer>
							</TwoUp>
						</TwoUpContainer>
					</SectionContainer>
				</StyledSection>
			</AboutMain>
			<MotionFooter />
		</>
	);
}

export const getServerSideProps = DevRoutes;
