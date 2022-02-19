import { useState, useRef } from 'react';
import styled from 'styled-components';
import { HamburgerMenu } from '../components/HamburgerMenu';
import { Navbar_Style_1 } from '../components/Navbar';
import { DevRoutes } from "../utils/dev_routes";

const Title = styled.h1`
    text-align: center;
    color: var(--text1);
    margin: 0 0 3.2rem;
`;

const PreviewTitle = styled.h3`
    text-align: center;
    color: var(--text1);
    margin-right: 2rem;
`;

const Container = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    div {
        justify-content: center;
    }
    button {
        display: block;
    }
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default function HamPreview() {
    const [openMenu, toggleMenu] = useState(false);
    const menuRef = useRef(null);
	return (
        <>
            <Navbar_Style_1 />
            <Container>
                <Title>Hamburger preview</Title>
                <Row>
                    <PreviewTitle>Style : 1</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_1/> : <HamburgerMenu.OpenMenuIcon_1 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 2</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_2/> : <HamburgerMenu.OpenMenuIcon_2 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 3</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_3/> : <HamburgerMenu.OpenMenuIcon_3 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 4</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_4/> : <HamburgerMenu.OpenMenuIcon_4 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 5</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_5/> : <HamburgerMenu.OpenMenuIcon_5 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 6</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_6/> : <HamburgerMenu.OpenMenuIcon_6 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 7</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_7/> : <HamburgerMenu.OpenMenuIcon_7 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 8</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_8/> : <HamburgerMenu.OpenMenuIcon_8 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 9</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_9/> : <HamburgerMenu.OpenMenuIcon_9 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 10</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_1/> : <HamburgerMenu.OpenMenuIcon_10 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 11</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_1/> : <HamburgerMenu.OpenMenuIcon_11 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 12</PreviewTitle>
                    
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_12/> : <HamburgerMenu.OpenMenuIcon_12 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 13</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_13/> : <HamburgerMenu.OpenMenuIcon_13 />}
                    </HamburgerMenu.Wrapper>
                </Row>
                <Row>
                    <PreviewTitle>Style : 14</PreviewTitle>
                    <HamburgerMenu.Wrapper onClick={() => toggleMenu(!openMenu)}>
                        {openMenu ? <HamburgerMenu.CloseMenuIcon_1/> : <HamburgerMenu.OpenMenuIcon_14 />}
                    </HamburgerMenu.Wrapper>
                </Row>
            </Container>
        </>
    )
};

export const getServerSideProps = DevRoutes;