import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--brand);
  color: var(--text-on-brand);
  border: none;
  padding: ${(props) => props.theme.spaces.sm}
    ${(props) => props.theme.spaces.lg};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 300ms ease;
  font-weight: bold;

  &:hover {
    background-color: hsl(
      var(--brand-hue) var(--brand-saturation)
        calc(var(--brand-lightness) * 1.2)
    );
  }
`;

export default StyledButton;
