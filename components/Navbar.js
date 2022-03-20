import { useEffect } from 'react';
import styled from 'styled-components';
import { useMedia } from '../hooks/useMedia';
import { useScrollLock } from '../hooks/useScrollLock';
import { useMenuContext } from '../state/useMenuContext';
import { NavBrand } from './NavBrand';
import { HamburgerMenu } from './HamburgerMenu';
import { DiscordIcon, TwitterIcon } from './SocialIcons';
import { StyledMotionNavbar } from '../components/styles/Navbar.styled';
import { StyledMotionNavLinkList } from '../components/styles/NavbarLinkList.styled';
import { MobileNavNewsletterSubscribe } from './NewsletterSubscribe';
import { PrimaryLink } from './styles/StyledLink.styled';

const SocialContainer = styled.div`
	margin: ${(props) => props.theme.spaces.md} auto;
	p {
		margin-bottom: ${(props) => props.theme.spaces.md};
	}
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const MobileSocialContainer = () => {
	const handleClick = (e) => {};
	return (
		<SocialContainer>
			<p>Sign Up for our Newsletter</p>
			<MobileNavNewsletterSubscribe />
			<IconContainer>
				<DiscordIcon onClick={handleClick} />
				<TwitterIcon onClick={handleClick} />
			</IconContainer>
		</SocialContainer>
	);
};

const MotionNavLinks = ({ openmenu, mobile, onClick }) => {
	const links = [
		'about',
		'comics',
		'collectibles',
		'characters',
		'artists',
		'news',
		'merch',
	];
	console.log('MotionNavLinks openmenu:', openmenu);
	console.log('MotionNavLinks mobile:', mobile);
	const variants = mobile
		? {
				hidden: {
					opacity: 0,
					x: '100%',
					transition: {
						when: 'beforeChildren',
					},
				},
				visible: {
					opacity: 1,
					x: 0,
					overflow: 'scroll',
					transition: {
						ease: 'easeInOut',
					},
				},
		  }
		: {
				visible: {
					opacity: 1,
					x: 0,
					transition: {
						ease: 'easeInOut',
					},
				},
				hidden: {
					opacity: 0,
					transition: { ease: 'easeInOut' },
				},
		  };
	console.log('variants: ', variants);
	console.log('animate: ', mobile ? 'hidden' : 'visbile');
	return (
		<StyledMotionNavLinkList
			animate={openmenu || !mobile ? 'visible' : 'hidden'}
			initial='hidden'
			exit='hidden'
			variants={variants}
		>
			{links.map((link) => (
				<li key={link}>
					<PrimaryLink onClick={onClick} href={`/${link}`}>
						{link}
					</PrimaryLink>
				</li>
			))}
			<li>
				<MobileSocialContainer />
			</li>
		</StyledMotionNavLinkList>
	);
};

export const MotionNavbar = () => {
	const { isMenuOpen, toggleMenu, closeMenu } = useMenuContext();
	const { isMobile } = useMedia();
	useScrollLock(isMenuOpen);
	useEffect(() => {
		if (!isMobile) {
			closeMenu();
		}
	}, [isMobile, closeMenu]);
	console.log('motionnavbar isMobile: ', isMobile);
	console.log('motionnavbar isMenuOpen: ', isMenuOpen);
	return (
		<StyledMotionNavbar>
			<NavBrand onClick={closeMenu} />
			<HamburgerMenu.Wrapper onClick={toggleMenu}>
				{isMenuOpen ? (
					<HamburgerMenu.CloseMenuIcon_1 />
				) : (
					<HamburgerMenu.OpenMenuIcon_1 />
				)}
			</HamburgerMenu.Wrapper>
			<MotionNavLinks
				openmenu={isMenuOpen}
				mobile={isMobile}
				onClick={closeMenu}
			/>
		</StyledMotionNavbar>
	);
};
