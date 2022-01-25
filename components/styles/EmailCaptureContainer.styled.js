import styled from "styled-components";

const EmailCaptureContainer = styled.article`
  max-width: 100%;
  width: 33.4rem;
  margin: 2.4rem auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
  box-shadow: var(--box-shadow-xxs);
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;

  & input {
    max-width: calc(100% - 13.7rem);
    border-top: 0.1rem solid var(--brand);
    border-left: 0.1rem solid var(--brand);
    border-bottom: 0.1rem solid var(--brand);
    padding-left: 0.4rem;
    background-color: var(--surface2);
    color: var(--text2);
  }

  & > * {
    margin-top: 0;
  }

  & > div > div:first-child {
    display: none;
  }
`;

export default EmailCaptureContainer;
