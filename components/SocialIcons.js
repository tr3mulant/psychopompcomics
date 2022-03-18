import Link from 'next/link';
import Image from 'next/image';
import styled, { useTheme } from 'styled-components';
import discord_dark from '../images/discord_icon_light.svg';
import discord_light from '../images/discord_icon_dark.svg';
import twitter_dark from '../images/twitter_icon_light.svg';
import twitter_light from '../images/twitter_icon_dark.svg';

const DiscordServerLink = 'https://discord.gg/3Kr5nszN';
const TwitterLink = 'https://twitter.com/PsychopompComix';

const SocialIconContainer = styled.div`
	width: ${(props) => props.theme.spaces.xl};
`;

export const DiscordIcon = ({ onClick }) => {
	const theme = useTheme();
	const discord_image = theme.mode == 'light' ? discord_light : discord_dark;
	return (
		<>
			<SocialIconContainer>
				<Link href={DiscordServerLink}>
					<a target='_blank' rel='noreferrer' onClick={onClick}>
						<Image src={discord_image} alt='Discord Icon' />
					</a>
				</Link>
			</SocialIconContainer>
		</>
	);
};

export const TwitterIcon = ({ onClick }) => {
	const theme = useTheme();
	const twitter_image = theme.mode == 'light' ? twitter_light : twitter_dark;
	return (
		<>
			<SocialIconContainer>
				<Link href={TwitterLink}>
					<a target='_blank' rel='noreferrer' onClick={onClick}>
						<Image src={twitter_image} alt='Twitter Icon' />
					</a>
				</Link>
			</SocialIconContainer>
		</>
	);
};
