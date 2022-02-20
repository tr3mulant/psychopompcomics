import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import discord_light from '../images/discord_icon_light.svg';
import discord_dark from '../images/discord_icon_dark.svg';
import discord_color from '../images/discord_icon_blurple.svg';
import discord_brand_color from '../images/discord_icon_ppc_branded.svg';
import twiiter_brand_color from '../images/iconmonstr-twitter-1-brand-color.svg';
import twitter_light from '../images/iconmonstr-twitter-1-white.svg';
import twitter_dark from '../images/iconmonstr-twitter-1.svg';

const DiscordServerLink = "https://discord.com";
const TwitterLink = "https://twitter.com";

const SocialIconContainer = styled.div`
    width: ${(props) => props.theme.spaces.xl};
`;

const SocialIconContainerLight = styled(SocialIconContainer)`
    @media (prefers-color-scheme: dark) {
        display: none;
    }
`;

const SocialIconContainerDark = styled(SocialIconContainer)`
    display: none;
    @media (prefers-color-scheme: dark) {
        display: block;
    }
`;

export const DiscordIcon = ({onClick}) => {
    return (
        <>
            <SocialIconContainerLight>
                <Link href={DiscordServerLink}>
                    <a onClick={onClick}>
                        <Image src={discord_dark} alt="Discord Icon" />
                    </a>
                </Link>
            </SocialIconContainerLight>
            <SocialIconContainerDark>
                <Link href={DiscordServerLink}>
                    <a>
                        <Image src={discord_light} alt="Discord Icon" />
                    </a>
                </Link>
            </SocialIconContainerDark>
        </>
    );
}

export const TwitterIcon = ({onClick}) => {
    return (
        <>
            <SocialIconContainerLight>
                <Link href={TwitterLink}>
                    <a onClick={onClick}>
                        <Image src={twitter_dark} alt="Twitter Icon" />
                    </a>
                </Link>
            </SocialIconContainerLight>
            <SocialIconContainerDark>
                <Link href={TwitterLink}>
                    <a>
                        <Image src={twitter_light} alt="Twitter Icon" />
                    </a>
                </Link>
            </SocialIconContainerDark>
        </>
    );
}