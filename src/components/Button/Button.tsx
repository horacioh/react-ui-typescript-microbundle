import * as React from "react";
import styled from "../../theme/styled-components";
import {
  fontWeight,
  borders,
  borderColor,
  buttonStyle,
  borderRadius
} from "styled-system";
import { themed } from "../../theme/utils";
import { Flex } from "../Flex/Flex";
import { Icon } from "../Icons/Icon";
import { COLOR_PRIMARY } from "../../theme/theme";


const BaseButton = styled<ButtonProps>(Flex)`
  appearance: none;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  transition: background-color 0.25s;
  white-space: nowrap;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  transition: opacity 0.2s ease;

  ${fontWeight}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${buttonStyle}
  ${themed("Button")}

  > * {
    margin: 0 4px;
    color: inherit;
  }
`;

export interface ButtonProps {
  icon?: string;
  iconColor?: string;
  disabled?: boolean;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  icon = null,
  iconColor = COLOR_PRIMARY,
  children,
  disabled = false,
  onClick,
  variant = "primary",
  ...rest
}) => (
  <BaseButton
    as="button"
    disabled={disabled}
    onClick={disabled ? null : onClick}
    fontSize={14}
    m={0}
    p={2}
    variant={variant}
    border={0}
    borderRadius={4}
    {...rest}
  >
    {icon ? <Icon name={icon} size={18} color={iconColor} /> : null}
    {children}
  </BaseButton>
);
