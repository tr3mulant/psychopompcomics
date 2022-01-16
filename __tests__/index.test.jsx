import { ThemeProvider } from "styled-components";
import { theme } from "../components/themes/DefaultTheme";
import { GlobalStyle } from "../components/styles/GlobalStyles.styled";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Coming Soon Page", () => {
  it("renders the page", () => {
    render(
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </>
    );

    const heading = screen.getByRole("heading", {
      name: /Coming Soon/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
