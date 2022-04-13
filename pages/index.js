import dynamic from 'next/dynamic';
import MotionHeader from '../components/styles/MotionHeader.styled';
import MotionMain from '../components/styles/MotionMain.styled';
import MotionFooter from '../components/Footer';
import StyledSection from '../components/styles/StyledSection.styled';
import SectionContainer from '../components/styles/SectionContainer.styled';
import SeedOfCainHero from '../components/styles/SeedOfCainHero.styled';
const DynamicPsychoDescription = dynamic(() =>
	import('../components/styles/PsychoDescription.styled')
);
const DynamicThreeUpNft = dynamic(() =>
	import('../components/styles/ThreeUpNft.styled')
);

export default function Home() {
	return (
		<>
			<MotionHeader>
				<SeedOfCainHero />
			</MotionHeader>
			<MotionMain>
				<StyledSection>
					<SectionContainer>
						<DynamicPsychoDescription />
						<DynamicThreeUpNft />
					</SectionContainer>
				</StyledSection>
			</MotionMain>
			<MotionFooter />
		</>
	);
}
