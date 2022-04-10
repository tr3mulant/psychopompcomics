import styled from 'styled-components';
import { motion } from 'framer-motion';
import MotionFooter from '../components/Footer';
import MotionHeader from '../components/styles/MotionHeader.styled';
import MotionMain from '../components/styles/MotionMain.styled';
import { TwoUpContainer, TwoUp } from '../components/styles/TwoUp.styled';
import StyledSection from '../components/styles/StyledSection.styled';
import SectionContainer from '../components/styles/SectionContainer.styled';
import Image from 'next/image';
import nfterPic from '../images/core-members/The_NFTer.jpg';
import loganPic from '../images/artists/logan_twitter_pfp.png';
import jamesPic from '../images/artists/james_twitter_pfp.jpg';
import { DevRoutes } from '../utils/dev_routes';

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
`;

const ArtistsTwoUp = styled(TwoUp)``;

const ArtistContainer = styled(motion.div)`
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

const ArtistDetails = [
	{
		artistGroupTitle:'Masters of Lore',
		artistGroupIntro: `Sit ea est est sit velit do id ut esse incididunt ex ea. Sint et minim laboris nisi. Aliquip aliquip ad tempor eiusmod nisi cillum occaecat ad voluptate commodo. Quis officia anim ea id.`,
		artistGroupDesc: `Occaecat commodo ad pariatur cillum excepteur officia nulla nostrud sint cillum reprehenderit eu consectetur tempor. Cillum occaecat eu excepteur laborum dolor laborum cillum in aliqua proident ut. Dolor quis sint enim magna Lorem minim cupidatat. Mollit Lorem anim ipsum esse laborum qui sit ex officia tempor labore mollit eu. Dolore in officia aute incididunt in aliquip aliqua reprehenderit aliqua fugiat pariatur duis minim.`,
		artists: [
			{
				imgSrc: nfterPic,
				imgAlt: 'The_NFTer',
				name: 'Spencer Kope',
				handle: 'The_NFTer',
				title: 'Lore Master, Writer, Editor',
				bioIntro: `Est tempor labore veniam pariatur voluptate ad ad laborum quis cillum elit est consequat esse. Officia aute dolore voluptate nisi irure duis irure nisi id non. Incididunt adipisicing laboris sint aliquip eiusmod. Nisi nostrud ut enim incididunt voluptate excepteur culpa nostrud nostrud dolore exercitation deserunt enim tempor. Ipsum ex tempor deserunt aliqua qui tempor. Pariatur anim officia ad pariatur cillum eu minim aute.`,
				bio: `Est consectetur dolore minim nostrud est cillum. Eu consequat magna voluptate nostrud nisi duis sit ad aute aliqua dolore labore veniam fugiat. Eiusmod elit irure commodo adipisicing enim non est sint. Cupidatat cupidatat occaecat consectetur irure laboris in velit labore. Nisi eu voluptate exercitation enim occaecat tempor excepteur eiusmod qui aliquip pariatur. Exercitation non esse magna veniam proident.`
			}
		]
	},
	{
		artistGroupTitle:'Conjurers of Shape and Pigment',
		artistGroupIntro: `Sit ea est est sit velit do id ut esse incididunt ex ea. Sint et minim laboris nisi. Aliquip aliquip ad tempor eiusmod nisi cillum occaecat ad voluptate commodo. Quis officia anim ea id.`,
		artistGroupDesc: `Occaecat commodo ad pariatur cillum excepteur officia nulla nostrud sint cillum reprehenderit eu consectetur tempor. Cillum occaecat eu excepteur laborum dolor laborum cillum in aliqua proident ut. Dolor quis sint enim magna Lorem minim cupidatat. Mollit Lorem anim ipsum esse laborum qui sit ex officia tempor labore mollit eu. Dolore in officia aute incididunt in aliquip aliqua reprehenderit aliqua fugiat pariatur duis minim.`,
		artists: [
			{
				imgSrc: loganPic,
				imgAlt: 'Logan Carrol',
				name: 'Logna Carrol',
				handle: '@LoganCarrol',
				title: 'Artist, Colorist',
				bioIntro: `Est tempor labore veniam pariatur voluptate ad ad laborum quis cillum elit est consequat esse. Officia aute dolore voluptate nisi irure duis irure nisi id non. Incididunt adipisicing laboris sint aliquip eiusmod. Nisi nostrud ut enim incididunt voluptate excepteur culpa nostrud nostrud dolore exercitation deserunt enim tempor. Ipsum ex tempor deserunt aliqua qui tempor. Pariatur anim officia ad pariatur cillum eu minim aute.`,
				bio: `Est consectetur dolore minim nostrud est cillum. Eu consequat magna voluptate nostrud nisi duis sit ad aute aliqua dolore labore veniam fugiat. Eiusmod elit irure commodo adipisicing enim non est sint. Cupidatat cupidatat occaecat consectetur irure laboris in velit labore. Nisi eu voluptate exercitation enim occaecat tempor excepteur eiusmod qui aliquip pariatur. Exercitation non esse magna veniam proident.`
			},
			{
				imgSrc: jamesPic,
				imgAlt: `James O'Reily`,
				name:  `James O'Reily`,
				handle: `@JamesOReily`,
				title: 'Artist, Colorist',
				bioIntro: `Est tempor labore veniam pariatur voluptate ad ad laborum quis cillum elit est consequat esse. Officia aute dolore voluptate nisi irure duis irure nisi id non. Incididunt adipisicing laboris sint aliquip eiusmod. Nisi nostrud ut enim incididunt voluptate excepteur culpa nostrud nostrud dolore exercitation deserunt enim tempor. Ipsum ex tempor deserunt aliqua qui tempor. Pariatur anim officia ad pariatur cillum eu minim aute.`,
				bio: `Est consectetur dolore minim nostrud est cillum. Eu consequat magna voluptate nostrud nisi duis sit ad aute aliqua dolore labore veniam fugiat. Eiusmod elit irure commodo adipisicing enim non est sint. Cupidatat cupidatat occaecat consectetur irure laboris in velit labore. Nisi eu voluptate exercitation enim occaecat tempor excepteur eiusmod qui aliquip pariatur. Exercitation non esse magna veniam proident.`
			}
		]
	},
	{
		artistGroupTitle:'Pens and Brushes for Hire',
		artistGroupIntro: `Sit ea est est sit velit do id ut esse incididunt ex ea. Sint et minim laboris nisi. Aliquip aliquip ad tempor eiusmod nisi cillum occaecat ad voluptate commodo. Quis officia anim ea id.`,
		artistGroupDesc: `Occaecat commodo ad pariatur cillum excepteur officia nulla nostrud sint cillum reprehenderit eu consectetur tempor. Cillum occaecat eu excepteur laborum dolor laborum cillum in aliqua proident ut. Dolor quis sint enim magna Lorem minim cupidatat. Mollit Lorem anim ipsum esse laborum qui sit ex officia tempor labore mollit eu. Dolore in officia aute incididunt in aliquip aliqua reprehenderit aliqua fugiat pariatur duis minim.`,
		artists: [
			{
				imgSrc: 'https://placeholder.com/128',
				imgAlt: 'Issac',
				name: 'Issac',
				handle: '@Issac',
				title: 'Graphic Design',
				bioIntro: `Est tempor labore veniam pariatur voluptate ad ad laborum quis cillum elit est consequat esse. Officia aute dolore voluptate nisi irure duis irure nisi id non. Incididunt adipisicing laboris sint aliquip eiusmod. Nisi nostrud ut enim incididunt voluptate excepteur culpa nostrud nostrud dolore exercitation deserunt enim tempor. Ipsum ex tempor deserunt aliqua qui tempor. Pariatur anim officia ad pariatur cillum eu minim aute.`,
				bio: `Est consectetur dolore minim nostrud est cillum. Eu consequat magna voluptate nostrud nisi duis sit ad aute aliqua dolore labore veniam fugiat. Eiusmod elit irure commodo adipisicing enim non est sint. Cupidatat cupidatat occaecat consectetur irure laboris in velit labore. Nisi eu voluptate exercitation enim occaecat tempor excepteur eiusmod qui aliquip pariatur. Exercitation non esse magna veniam proident.`
			}
		]
	}
];

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
				{/* foreach artist section here */}
				{ArtistDetails.map((details, idx) => {
					<StyledSection key={idx}>
						<SectionContainer>
							<ArtistsTwoUpContainer divided>
								<ArtistsDescTwoUp>
									<h2>{details.artistGroupTitle}</h2>
									<p>{details.artistGroupIntro}</p>
									<p>{details.artistGroupDesc}</p>
								</ArtistsDescTwoUp>
								<ArtistsTwoUp>
									{details.artists.map((artist, iidx) => {
										<ArtistContainer
											key={iidx}
											initial='hidden'
											whileInView='visible'
											viewport={{ once: true }}
											variants={artistsVariants}
										>
											<ArtistImageContainer>
												<Image
													width='128'
													height='128'
													src={artist.imgSrc}
													alt={artist.imgAlt}
												/>
											</ArtistImageContainer>
											<ArtistRoleContainer>
												<h4>{artist.name}</h4>
												<h4>{artist.handle}</h4>
												<h4>{artist.title}</h4>
											</ArtistRoleContainer>
											<ArtistBioContainer>
												<p>
													{artist.bioIntro}
												</p>
												<p>
													{artist.bio}
												</p>
											</ArtistBioContainer>
										</ArtistContainer>
									})}
								</ArtistsTwoUp>
							</ArtistsTwoUpContainer>
						</SectionContainer>
					</StyledSection>	
				})}
				<StyledSection>
					<SectionContainer>
						<ArtistsTwoUpContainer divided>
							<ArtistsDescTwoUp>
								<h2>Masters of Lore</h2>
								<p>
									{`Sit ea est est sit velit do id ut esse incididunt ex ea. Sint et minim laboris nisi. Aliquip aliquip ad tempor eiusmod nisi cillum occaecat ad voluptate commodo. Quis officia anim ea id.`}
								</p>
								<p>
									{`Occaecat commodo ad pariatur cillum excepteur officia nulla nostrud sint cillum reprehenderit eu consectetur tempor. Cillum occaecat eu excepteur laborum dolor laborum cillum in aliqua proident ut. Dolor quis sint enim magna Lorem minim cupidatat. Mollit Lorem anim ipsum esse laborum qui sit ex officia tempor labore mollit eu. Dolore in officia aute incididunt in aliquip aliqua reprehenderit aliqua fugiat pariatur duis minim.`}
								</p>
							</ArtistsDescTwoUp>
							<ArtistsTwoUp>
								<ArtistContainer
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									variants={artistsVariants}
								>
									<ArtistImageContainer>
										<Image
											width='128'
											height='128'
											src={nfterPic}
											alt='The_NFTer'
										/>
									</ArtistImageContainer>
									<ArtistRoleContainer>
										<h4>{`Name`}</h4>
										<h4>{`Handle`}</h4>
										<h4>{`Preferred Title`}</h4>
									</ArtistRoleContainer>
									<ArtistBioContainer>
										<p>
											{`Est tempor labore veniam pariatur voluptate ad ad laborum quis cillum elit est consequat esse. Officia aute dolore voluptate nisi irure duis irure nisi id non. Incididunt adipisicing laboris sint aliquip eiusmod. Nisi nostrud ut enim incididunt voluptate excepteur culpa nostrud nostrud dolore exercitation deserunt enim tempor. Ipsum ex tempor deserunt aliqua qui tempor. Pariatur anim officia ad pariatur cillum eu minim aute.`}
										</p>
										<p>
											{`Est consectetur dolore minim nostrud est cillum. Eu consequat magna voluptate nostrud nisi duis sit ad aute aliqua dolore labore veniam fugiat. Eiusmod elit irure commodo adipisicing enim non est sint. Cupidatat cupidatat occaecat consectetur irure laboris in velit labore. Nisi eu voluptate exercitation enim occaecat tempor excepteur eiusmod qui aliquip pariatur. Exercitation non esse magna veniam proident.`}
										</p>
									</ArtistBioContainer>
								</ArtistContainer>
							</ArtistsTwoUp>
						</ArtistsTwoUpContainer>
					</SectionContainer>
				</StyledSection>
				<StyledSection>
					<SectionContainer>
						<ArtistsTwoUpContainer divided>
							<ArtistsTwoUp>
								<ArtistContainer
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									variants={artistsVariants}
								>
									<ArtistImageContainer>
										<Image
											width='128'
											height='128'
											src={loganPic}
											alt='Logan Carrol'
										/>
									</ArtistImageContainer>
									<ArtistRoleContainer>
										<h4>{`Name`}</h4>
										<h4>{`Handle`}</h4>
										<h4>{`Preferred Title`}</h4>
									</ArtistRoleContainer>
									<ArtistBioContainer>
										<p>
											{`Est tempor labore veniam pariatur voluptate ad ad laborum quis cillum elit est consequat esse. Officia aute dolore voluptate nisi irure duis irure nisi id non. Incididunt adipisicing laboris sint aliquip eiusmod. Nisi nostrud ut enim incididunt voluptate excepteur culpa nostrud nostrud dolore exercitation deserunt enim tempor. Ipsum ex tempor deserunt aliqua qui tempor. Pariatur anim officia ad pariatur cillum eu minim aute.`}
										</p>
										<p>
											{`Est consectetur dolore minim nostrud est cillum. Eu consequat magna voluptate nostrud nisi duis sit ad aute aliqua dolore labore veniam fugiat. Eiusmod elit irure commodo adipisicing enim non est sint. Cupidatat cupidatat occaecat consectetur irure laboris in velit labore. Nisi eu voluptate exercitation enim occaecat tempor excepteur eiusmod qui aliquip pariatur. Exercitation non esse magna veniam proident.`}
										</p>
									</ArtistBioContainer>
								</ArtistContainer>
								<ArtistContainer
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									variants={artistsVariants}
								>
									<ArtistImageContainer>
										<Image
											width='128'
											height='128'
											src={jamesPic}
											alt="James O'Reilly"
										/>
									</ArtistImageContainer>
									<ArtistRoleContainer>
										<h4>{`Name`}</h4>
										<h4>{`Handle`}</h4>
										<h4>{`Preferred Title`}</h4>
									</ArtistRoleContainer>
									<ArtistBioContainer>
										<p>
											{`Est tempor labore veniam pariatur voluptate ad ad laborum quis cillum elit est consequat esse. Officia aute dolore voluptate nisi irure duis irure nisi id non. Incididunt adipisicing laboris sint aliquip eiusmod. Nisi nostrud ut enim incididunt voluptate excepteur culpa nostrud nostrud dolore exercitation deserunt enim tempor. Ipsum ex tempor deserunt aliqua qui tempor. Pariatur anim officia ad pariatur cillum eu minim aute.`}
										</p>
										<p>
											{`Est consectetur dolore minim nostrud est cillum. Eu consequat magna voluptate nostrud nisi duis sit ad aute aliqua dolore labore veniam fugiat. Eiusmod elit irure commodo adipisicing enim non est sint. Cupidatat cupidatat occaecat consectetur irure laboris in velit labore. Nisi eu voluptate exercitation enim occaecat tempor excepteur eiusmod qui aliquip pariatur. Exercitation non esse magna veniam proident.`}
										</p>
									</ArtistBioContainer>
								</ArtistContainer>
							</ArtistsTwoUp>
							<ArtistsDescTwoUp>
								<h2>Conjurers of Shape and Pigment</h2>
								<p>
									{`Sit ea est est sit velit do id ut esse incididunt ex ea. Sint et minim laboris nisi. Aliquip aliquip ad tempor eiusmod nisi cillum occaecat ad voluptate commodo. Quis officia anim ea id.`}
								</p>
								<p>
									{`Occaecat commodo ad pariatur cillum excepteur officia nulla nostrud sint cillum reprehenderit eu consectetur tempor. Cillum occaecat eu excepteur laborum dolor laborum cillum in aliqua proident ut. Dolor quis sint enim magna Lorem minim cupidatat. Mollit Lorem anim ipsum esse laborum qui sit ex officia tempor labore mollit eu. Dolore in officia aute incididunt in aliquip aliqua reprehenderit aliqua fugiat pariatur duis minim.`}
								</p>
							</ArtistsDescTwoUp>
						</ArtistsTwoUpContainer>
					</SectionContainer>
				</StyledSection>
				<StyledSection>
					<SectionContainer>
						<ArtistsTwoUpContainer divided>
							<ArtistsDescTwoUp>
								<h2>Mercenaries</h2>
								<p>
									{`Sit ea est est sit velit do id ut esse incididunt ex ea. Sint et minim laboris nisi. Aliquip aliquip ad tempor eiusmod nisi cillum occaecat ad voluptate commodo. Quis officia anim ea id.`}
								</p>
								<p>
									{`Occaecat commodo ad pariatur cillum excepteur officia nulla nostrud sint cillum reprehenderit eu consectetur tempor. Cillum occaecat eu excepteur laborum dolor laborum cillum in aliqua proident ut. Dolor quis sint enim magna Lorem minim cupidatat. Mollit Lorem anim ipsum esse laborum qui sit ex officia tempor labore mollit eu. Dolore in officia aute incididunt in aliquip aliqua reprehenderit aliqua fugiat pariatur duis minim.`}
								</p>
							</ArtistsDescTwoUp>
							<ArtistsTwoUp>
								<ArtistContainer
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									variants={artistsVariants}
								>
									<ArtistImageContainer>
										<Image
											width='128'
											height='128'
											src='https://via.placeholder.com/128x128.png?text=Issac'
											alt='Issac'
										/>
									</ArtistImageContainer>
									<ArtistRoleContainer>
										<h4>{`Name`}</h4>
										<h4>{`Handle`}</h4>
										<h4>{`Preferred Title`}</h4>
									</ArtistRoleContainer>
									<ArtistBioContainer>
										<p>
											{`Est tempor labore veniam pariatur voluptate ad ad laborum quis cillum elit est consequat esse. Officia aute dolore voluptate nisi irure duis irure nisi id non. Incididunt adipisicing laboris sint aliquip eiusmod. Nisi nostrud ut enim incididunt voluptate excepteur culpa nostrud nostrud dolore exercitation deserunt enim tempor. Ipsum ex tempor deserunt aliqua qui tempor. Pariatur anim officia ad pariatur cillum eu minim aute.`}
										</p>
										<p>
											{`Est consectetur dolore minim nostrud est cillum. Eu consequat magna voluptate nostrud nisi duis sit ad aute aliqua dolore labore veniam fugiat. Eiusmod elit irure commodo adipisicing enim non est sint. Cupidatat cupidatat occaecat consectetur irure laboris in velit labore. Nisi eu voluptate exercitation enim occaecat tempor excepteur eiusmod qui aliquip pariatur. Exercitation non esse magna veniam proident.`}
										</p>
									</ArtistBioContainer>
								</ArtistContainer>
							</ArtistsTwoUp>
						</ArtistsTwoUpContainer>
					</SectionContainer>
				</StyledSection>
			</MotionMain>
			<MotionFooter />
		</>
	);
}

export const getServerSideProps = DevRoutes;
