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
import { NavNewsletterSubscribe } from './NewsletterSubscribe';
import { PrimaryLink } from './styles/StyledLink.styled';

const MobileNavNewsletterSubscribe = styled(NavNewsletterSubscribe)`
	display: flex;
	padding: 0 ${(props) => props.theme.spaces.xl}
		${(props) => props.theme.spaces.xl} ${(props) => props.theme.spaces.xl};
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		flex-direction: column;
		padding: 0 0 ${(props) => props.theme.spaces.xl};
	}
`;

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

// const NavLinks = ({ openMenu, components, onClick }) => {
// 	const CC = components.container;
// 	const LC = components.link;
// 	return (
// 		<CC openMenu={openMenu}>
// 			<li>
// 				<LC onClick={onClick} href='/about'>
// 					about
// 				</LC>
// 			</li>
// 			<li>
// 				<LC onClick={onClick} href='/comics'>
// 					comics
// 				</LC>
// 			</li>
// 			<li>
// 				<LC onClick={onClick} href='/collectibles'>
// 					collectibles
// 				</LC>
// 			</li>
// 			<li>
// 				<LC onClick={onClick} href='/characters'>
// 					characters
// 				</LC>
// 			</li>
// 			<li>
// 				<LC onClick={onClick} href='/artists'>
// 					artists
// 				</LC>
// 			</li>
// 			<li>
// 				<LC onClick={onClick} href='/news'>
// 					news
// 				</LC>
// 			</li>
// 			<li>
// 				<LC onClick={onClick} href='/merch'>
// 					merch
// 				</LC>
// 			</li>
// 			<li>
// 				<MobileSocialContainer />
// 			</li>
// 		</CC>
// 	);
// };

// export function Navbar() {
// 	const [openMenu, toggleMenu] = useState(false);
// 	const handleClick = (state) => {
// 		//feels hacky, like maybe the state should be managed higher up?
// 		if (state) {
// 			document.getElementsByTagName('body')[0].classList.add('no-scroll');
// 		} else {
// 			document.getElementsByTagName('body')[0].classList.remove('no-scroll');
// 		}
// 		toggleMenu(state);
// 	};
// 	const components = {
// 		link: PrimaryLink,
// 		container: NavLinkList_2,
// 	};
// 	return (
// 		<StyledNavbar_1>
// 			<NavBrand onClick={() => handleClick(false)} />
// 			<HamburgerMenu.Wrapper onClick={() => handleClick(!openMenu)}>
// 				{openMenu ? (
// 					<HamburgerMenu.CloseMenuIcon_1 />
// 				) : (
// 					<HamburgerMenu.OpenMenuIcon_1 />
// 				)}
// 			</HamburgerMenu.Wrapper>
// 			<NavLinks
// 				openMenu={openMenu}
// 				components={components}
// 				onClick={() => handleClick(false)}
// 			/>
// 			<NavNewsletterSubscribe />
// 		</StyledNavbar_1>
// 	);
// }

// export const Navbar_Style_1 = () => {
// 	const [openMenu, toggleMenu] = useState(false);
// 	const components = {
// 		link: PrimaryLink,
// 		container: NavLinkList_1,
// 	};

// 	return (
// 		<StyledNavbar_1>
// 			<NavBrand />
// 			<HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
// 				{openMenu ? (
// 					<HamburgerMenu.CloseMenuIcon_1 />
// 				) : (
// 					<HamburgerMenu.OpenMenuIcon_1 />
// 				)}
// 			</HamburgerMenu.Wrapper>
// 			<NavLinks
// 				openMenu={openMenu}
// 				components={components}
// 				onClick={() => toggleMenu(false)}
// 			/>
// 			<NavNewsletterSubscribe />
// 		</StyledNavbar_1>
// 	);
// };

// export const Navbar_Style_2 = () => {
// 	const [openMenu, toggleMenu] = useState(false);
// 	const components = {
// 		link: PrimaryLinkLg,
// 		container: NavLinkList_2,
// 	};

// 	return (
// 		<StyledNavbar_2>
// 			<NavBrand />
// 			<HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
// 				{openMenu ? (
// 					<HamburgerMenu.CloseMenuIcon_2 />
// 				) : (
// 					<HamburgerMenu.OpenMenuIcon_2 />
// 				)}
// 			</HamburgerMenu.Wrapper>
// 			<NavLinks
// 				openMenu={openMenu}
// 				components={components}
// 				onClick={() => toggleMenu(false)}
// 			/>
// 			<NavNewsletterSubscribe />
// 		</StyledNavbar_2>
// 	);
// };

// export const Navbar_Style_3 = () => {
// 	const [openMenu, toggleMenu] = useState(false);
// 	const components = {
// 		link: PrimaryLinkSm,
// 		container: NavLinkList_3,
// 	};

// 	return (
// 		<StyledNavbar_3>
// 			<NavBrand />
// 			<HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
// 				{openMenu ? (
// 					<HamburgerMenu.CloseMenuIcon_3 />
// 				) : (
// 					<HamburgerMenu.OpenMenuIcon_3 />
// 				)}
// 			</HamburgerMenu.Wrapper>
// 			<NavLinks
// 				openMenu={openMenu}
// 				components={components}
// 				onClick={() => toggleMenu(false)}
// 			/>
// 			<NavNewsletterSubscribe />
// 		</StyledNavbar_3>
// 	);
// };

// export const Navbar_Style_4 = () => {
// 	const [openMenu, toggleMenu] = useState(false);
// 	const components = {
// 		link: PrimaryLinkMd,
// 		container: NavLinkList_4,
// 	};

// 	return (
// 		<StyledNavbar_4>
// 			<NavBrand />
// 			<HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
// 				{openMenu ? (
// 					<HamburgerMenu.CloseMenuIcon_1 />
// 				) : (
// 					<HamburgerMenu.OpenMenuIcon_4 />
// 				)}
// 			</HamburgerMenu.Wrapper>
// 			<NavLinks
// 				openMenu={openMenu}
// 				components={components}
// 				onClick={() => toggleMenu(false)}
// 			/>
// 			<NavNewsletterSubscribe />
// 		</StyledNavbar_4>
// 	);
// };

// export const Navbar_Style_5 = () => {
// 	const [openMenu, toggleMenu] = useState(false);
// 	const components = {
// 		link: PrimaryLinkMd,
// 		container: NavLinkList_5,
// 	};

// 	return (
// 		<StyledNavbar_5>
// 			<NavBrand />
// 			<HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
// 				{openMenu ? (
// 					<HamburgerMenu.CloseMenuIcon_1 />
// 				) : (
// 					<HamburgerMenu.OpenMenuIcon_5 />
// 				)}
// 			</HamburgerMenu.Wrapper>
// 			<NavLinks
// 				openMenu={openMenu}
// 				components={components}
// 				onClick={() => toggleMenu(false)}
// 			/>
// 			<NavNewsletterSubscribe />
// 		</StyledNavbar_5>
// 	);
// };

// export const Navbar_Style_6 = () => {
// 	const [openMenu, toggleMenu] = useState(false);
// 	const components = {
// 		link: PrimaryLinkMd,
// 		container: NavLinkList_6,
// 	};

// 	return (
// 		<StyledNavbar_6>
// 			<NavBrand />
// 			<HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
// 				{openMenu ? (
// 					<HamburgerMenu.CloseMenuIcon_1 />
// 				) : (
// 					<HamburgerMenu.OpenMenuIcon_5 />
// 				)}
// 			</HamburgerMenu.Wrapper>
// 			<NavLinks
// 				openMenu={openMenu}
// 				components={components}
// 				onClick={() => toggleMenu(false)}
// 			/>
// 			<NavNewsletterSubscribe />
// 		</StyledNavbar_6>
// 	);
// };

// export const Navbar_Style_7 = () => {
// 	const [openMenu, toggleMenu] = useState(false);
// 	const components = {
// 		link: PrimaryLinkMd,
// 		container: NavLinkList_7,
// 	};

// 	return (
// 		<StyledNavbar_7>
// 			<NavBrand />
// 			<HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
// 				{openMenu ? (
// 					<HamburgerMenu.CloseMenuIcon_1 />
// 				) : (
// 					<HamburgerMenu.OpenMenuIcon_5 />
// 				)}
// 			</HamburgerMenu.Wrapper>
// 			<NavLinks
// 				openMenu={openMenu}
// 				components={components}
// 				onClick={() => toggleMenu(false)}
// 			/>
// 			<NavNewsletterSubscribe />
// 		</StyledNavbar_7>
// 	);
// };

const MotionNavLinks = ({ openmenu, mobile, onClick }) => {
	const links = ['about','comics','collectibles','characters','artists','news','merch'];
	console.log('MotionNavLinks openmenu:' ,openmenu);
	console.log('MotionNavLinks mobile:' ,mobile);
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
		}
	}
	: {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				ease: 'easeInOut'
			}
		},
		hidden: {
			opacity: 0,
			transition: { ease: 'easeInOut' },
		},
	};
	console.log("variants: ", variants)
	console.log("animate: ", mobile ? 'hidden':'visbile');
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
	console.log("motionnavbar isMobile: ", isMobile);
	console.log("motionnavbar isMenuOpen: ", isMenuOpen);
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
			<MotionNavLinks openmenu={isMenuOpen} mobile={isMobile} onClick={closeMenu} />
			<NavNewsletterSubscribe />
		</StyledMotionNavbar>
	);
};
