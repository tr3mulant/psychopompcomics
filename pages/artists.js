import styled from 'styled-components';
import { m } from 'framer-motion';
import MotionFooter from '../components/Footer';
import MotionHeader from '../components/styles/MotionHeader.styled';
import MotionMain from '../components/styles/MotionMain.styled';
import { TwoUpContainer, TwoUp } from '../components/styles/TwoUp.styled';
import StyledSection from '../components/styles/StyledSection.styled';
import SectionContainer from '../components/styles/SectionContainer.styled';
import Image from 'next/image';
import { DevRoutes } from '../utils/dev_routes';

//this will move to getServerSideProps when an actual backend is needed
const artists = require('../data/artists.json');

const ArtistsHeader = styled(MotionHeader)`
	padding: ${({ theme }) => theme.spaces.xxxl} ${({ theme }) => theme.spaces.lg};
	text-align: center;
	height: 40vh;
	margin-bottom: ${({ theme }) => theme.spaces.xxxl};
`;

const Title = styled.h1`
	color: var(--text1);
	z-index: 2;
	position: relative;
	display: block;
	width: 100%;
	max-width: 58rem;
	margin-left: auto;
	margin-right: auto;
`;

const ArtistsTwoUpContainer = styled(TwoUpContainer)`
	margin-bottom: ${({ theme }) => theme.spaces.xxxl};
`;

const ArtistsDescTwoUp = styled(TwoUp)`
	padding: ${({ theme }) => theme.spaces.xl};
	&.flipped {
		order:1;
	}
`;

const ArtistsTwoUp = styled(TwoUp)``;

const ArtistContainer = styled(m.div)`
	display: grid;
	grid-template-areas:
		'area area area'
		'area area area';
	padding: 0 ${({ theme }) => theme.spaces.xl};
	background-color: var(--surface1);
	border: 0.1rem solid hsl(var(--brand-hue) 10% 50% / 15%);
	border-radius: 1rem;
	padding: ${({ theme }) => theme.spaces.ml};
	box-shadow: var(--box-shadow-md);
	& + & {
		margin-top: ${({ theme }) => theme.spaces.xxxl};
	}
`;

const ArtistImageContainer = styled.div``;

const ArtistRoleContainer = styled.div`
	grid-column-start: 2;
	grid-column-end: 4;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: ${({ theme }) => theme.spaces.md} ${({ theme }) => theme.spaces.lg};
	padding-left: ${({ theme }) => theme.spaces.lg};
	h4 + h4 {
		margin-top: ${({ theme }) => theme.spaces.sm};
	}
`;

const ArtistBioContainer = styled.div`
	grid-column-start: 1;
	grid-column-end: 4;
	grid-row-start: 2;
	padding: ${({ theme }) => theme.spaces.xl} 0;
`;

const artistsVariants = {
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

export default function Artists() {
	return (
		<>
			<ArtistsHeader>
				<Title>Artists</Title>
				<Image
					src='https://via.placeholder.com/3840x2160.png?text=artists'
					alt='Artists Placeholder Banner'
					layout='fill'
					objectFit='cover'
					objectPosition='bottom'
				/>
			</ArtistsHeader>
			<MotionMain>
				{ artists.map((details, idx) => {
					return (
						<StyledSection key={ idx }>
							<SectionContainer>
								<ArtistsTwoUpContainer divided>
									<ArtistsDescTwoUp className={ idx % 2 ? "flipped" : "" }>
										<h2>{ details.artistGroupTitle }</h2>
										<p>{ details.artistGroupIntro }</p>
										<p>{ details.artistGroupDesc }</p>
									</ArtistsDescTwoUp>
									<ArtistsTwoUp>
										{ details.artists.map((artist, iidx) => {
											return (
												<ArtistContainer
													key={ iidx }
													initial='hidden'
													whileInView='visible'
													viewport={{ once: true }}
													variants={ artistsVariants }
												>
													<ArtistImageContainer>
														<Image
															width='128'
															height='128'
															src={ artist.imgSrc }
															alt={ artist.imgAlt }
														/>
													</ArtistImageContainer>
													<ArtistRoleContainer>
														<h4>{ artist.name }</h4>
														<h4><a href={ `https://twitter.com/${ artist.handle.replace('@','') }` }>{ artist.handle }</a></h4>
														<h4>{ artist.title }</h4>
													</ArtistRoleContainer>
													<ArtistBioContainer>
														<p dangerouslySetInnerHTML={{ __html: artist.bioIntro }} />
														<p dangerouslySetInnerHTML={{ __html: artist.bio }} />
													</ArtistBioContainer>
												</ArtistContainer>
											)
										})}
									</ArtistsTwoUp>
								</ArtistsTwoUpContainer>
							</SectionContainer>
						</StyledSection>	
					)
				})}
			</MotionMain>
			<MotionFooter />
		</>
	);
}

export const getServerSideProps = DevRoutes;
