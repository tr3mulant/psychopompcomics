import {
	SeedOfCainSplashHeader,
	SeedOfCainImageContainer,
	SeedOfCainTextContainer,
} from '../components/SeedOfCainSpashHeader';
import { LinkPrimaryLg } from '../components/styles/StyledButton.styled';
import seattle from '../images/seattle.jpg';
import Image from 'next/image';

export default function SeedOfCainSplash() {
	return (
		<SeedOfCainSplashHeader>
			<SeedOfCainImageContainer>
				<Image
					src={seattle}
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					alt=''
				/>
			</SeedOfCainImageContainer>
			<SeedOfCainTextContainer>
				<h1>Seed Of Cain</h1>
				<LinkPrimaryLg href='#'>Read for free</LinkPrimaryLg>
			</SeedOfCainTextContainer>
		</SeedOfCainSplashHeader>
	);
}
