import styled from "styled-components";

interface IButtonProps {
  backgroundColor: string;
  color: string;
  height: string;
  width: string;
  fontSize: string;
}

export const Button = styled.button<IButtonProps>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};

  border-radius: 4px;
  border: none;
  color: var(--white);

  cursor: pointer;
`;
