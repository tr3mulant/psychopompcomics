import styled from "styled-components";

const EmailCaptureContainer = styled.article`
  max-width: 334px;
  margin: 24px auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
  box-shadow: var(--box-shadow-xxs);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  & input {
    max-width: calc(100% - 137px);
    border-top: 1px solid var(--brand);
    border-left: 1px solid var(--brand);
    border-bottom: 1px solid var(--brand);
    padding-left: 4px;
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
