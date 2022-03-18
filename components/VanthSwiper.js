import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { Navigation, A11y, FreeMode, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import bunnyImg from '../images/vanth/Bunny 2.jpeg';
import catImg from '../images/vanth/IMG_5799.jpeg';
import mothImg from '../images/vanth/IMG_5804.jpeg';
import deerImg from '../images/vanth/IMG_5814.jpeg';
import foxImg from '../images/vanth/IMG_5821.jpeg';
import wolfImg from '../images/vanth/IMG_5847.jpeg';
import ravenImg from '../images/vanth/IMG_5890.jpeg';
import owlImg from '../images/vanth/IMG_5881.jpeg';
import { OrbArtStudioLogo } from '../components/OrbArtStudioLogo';

const VanthSwiperVariants = {
	hidden: {
		y: -500,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 2,
			duration: 1.5,
		},
	},
};

const VanthSwiperContainer = styled(motion.article)`
	display: flex;
	flex-wrap: wrap;
	align-items: stretch;

	.swiper {
		width: 100%;
		min-height: 35rem;
		@media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
			max-width: calc(100% - 32rem);
			min-height: initial;
		}
		width: 100%;

		.swiper-slide {
			display: flex;
			justify-content: center;
		}
	}
`;

const VanthDescription = styled.div`
	max-width: 100%;
	width: 100%;
	@media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
		max-width: 32rem;
	}
	padding: 0 ${({ theme }) => theme.spaces.md} ${({ theme }) => theme.spaces.md}
		0;
`;

const ArtistSlide = styled.div`
	background-color: var(--surface0);
	padding: ${({ theme }) => theme.spaces.lg} ${({ theme }) => theme.spaces.md};
	display: flex;
	flex-direction: column;
	width: 100%;

	& > p {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 21rem;
	}
`;

const OrbLogoContainer = styled.div`
	flex-grow: 1;
	max-width: 20rem;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

export function StartSwiperAutoPlay() {
	const swiper = document.querySelector('.vanth-swiper').swiper;
	console.log('starting swiper');
	swiper.autoplay.start();
}

export default function VanthSwiper({ autoplay }) {
	const theme = useTheme();
	const breakpointLg = theme.breakpoints.lg.replace('px', '');
	const breakpointMd = theme.breakpoints.md.replace('px', '');
	const breakpointSm = theme.breakpoints.sm.replace('px', '');
	const breakpointXs = theme.breakpoints.xs.replace('px', '');

	return (
		<VanthSwiperContainer variants={VanthSwiperVariants}>
			<VanthDescription>
				<h2>The Vanth</h2>
				<p>{`They've taken many forms through the ages, yet they always bear a key to an ancient gate.  It’s said they are benevolent, but who can truly say.  At the edge of a battle they wait, from the corner of a sick room they watch, and as the life-weary shed their bodies, it is they, the immortal Vanth, who lead their souls down an ancient path to a gate as old as the world itself, for they are the soul guides to the underworld.`}</p>
			</VanthDescription>
			<Swiper
				className='vanth-swiper'
				modules={[Navigation, A11y, Autoplay]}
				spaceBetween={0}
				loop={true}
				slidesPerView={1}
				onSwiper={(swiper) => swiper.autoplay.stop()}
				grabCursor={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				speed={5000}
				breakpoints={{
					0: {
						slidesPerView: 2,
					},
					[breakpointXs]: {
						slidesPerView: 1,
					},
					[breakpointSm]: {
						slidesPerView: 2,
					},
					[breakpointMd]: {
						slidesPerView: 4,
					},
					[breakpointLg]: {
						slidesPerView: 5,
					},
				}}
			>
				<SwiperSlide>
					<Image
						src={bunnyImg}
						alt='Bunny Vanth'
						layout='fill'
						objectFit='cover'
						objectPosition='center'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={catImg}
						alt='Cat Vanth'
						layout='fill'
						objectFit='cover'
						objectPosition='center'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={wolfImg}
						alt='Wolf Vanth'
						layout='fill'
						objectFit='cover'
						objectPosition='center'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={mothImg}
						alt='Moth Vanth'
						layout='fill'
						objectFit='cover'
						objectPosition='center'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={owlImg}
						alt='Owl Vanth'
						layout='fill'
						objectFit='cover'
						objectPosition='center'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={deerImg}
						alt='Deer Vanth'
						layout='fill'
						objectFit='cover'
						objectPosition='center'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={foxImg}
						alt='Fox Vanth'
						layout='fill'
						objectFit='cover'
						objectPosition='center'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={ravenImg}
						alt='Raven Vanth'
						layout='fill'
						objectFit='cover'
						objectPosition='center'
					/>
				</SwiperSlide>
				{/* <SwiperSlide>
                    <Image
                      src={vanthImg}
                      alt='Vanth Symbol'
                      width='1080'
                      height='1080'
                    />
                  </SwiperSlide> */}
				<SwiperSlide>
					<ArtistSlide>
						<h4 className='text-center'>The Artist</h4>
						<p>
							The Vanth come from the creative mind and talented hand of{' '}
							<a
								href='https://twitter.com/jamesoreillyart'
								target='_blank'
								rel='noopener noreferrer'
							>{`James O'Reilly`}</a>
							. James is the founder of Orb Art Studio.
						</p>
						<OrbLogoContainer>
							<a
								href='https://www.orbartstudio.com/'
								target='_blank'
								rel='noreferrer'
							>
								<OrbArtStudioLogo className='text-center' />
							</a>
						</OrbLogoContainer>
					</ArtistSlide>
				</SwiperSlide>
			</Swiper>
		</VanthSwiperContainer>
	);
}
