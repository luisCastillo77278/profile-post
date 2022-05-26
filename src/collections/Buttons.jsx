import styled, { css } from "styled-components";

const pointer = css`
  cursor: pointer;
`;

export const PrimaryButtonStyle = css`
  display: block;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  background-color: #f2274c;
  color: #fff;
  ${pointer}
`;

export const LinkStyle = css`
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
  text-decoration-thickness: 3px;
  background: transparent;
  color: inherit;
  border: 0;
  font-size: 1.2em;
  display: inline-block;
  ${pointer}
`;

export const LinkPrimaryButton = styled.a`
  ${PrimaryButtonStyle}
`;

export const PrmaryButton = styled.button`
  ${PrimaryButtonStyle}
`;

export const LinkSecondaryButton = styled.a`
  ${LinkStyle}
`;

export const SecondaryButton = styled.button`
  ${LinkStyle}
`;
