import Image from "next/image";
import styled from "styled-components";
import deer_light from "../images/final_wtype_inv_cropped@4x.png";
import deer_dark from "../images/final_wtype_transparent_cropped@4x.png";

const ImageContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spaces.xxl};
  width: 42rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    max-width: 85%;
  }
`;

const ImageContainerLight = styled(ImageContainer)`
  @media (prefers-color-scheme: dark) {
    display: none;
  }
`;

const ImageContainerDark = styled(ImageContainer)`
  display: none;
  @media (prefers-color-scheme: dark) {
    display: block;
  }
`;

export default function ComingSoonImage() {
  return (
    <>
      <ImageContainerLight>
        <Image src={deer_light} alt="Psychopomp Comics" />
      </ImageContainerLight>
      <ImageContainerDark>
        <Image src={deer_dark} alt="Psychopomp Comics" />
      </ImageContainerDark>
    </>
  );
}
