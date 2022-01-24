import "@testing-library/jest-dom";
jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />)