import * as React from "react";
import * as FeatherIcon from "react-feather";
import * as CoeliIcons from "./CoeliIcons";
import { COLOR_PRIMARY } from "../../theme/theme";


declare function require(string: string): string;

interface Props {
  name: string;
  size?: number;
  color?: string;
  customIcon?: boolean;
}

export const Icon: React.SFC<Props> = ({ name, size, color, customIcon = false, ...rest }) => {
  let Component;
  if (customIcon) {
    // return <img src={getImageSource(name)} width={48} height={48} />;
    Component = (CoeliIcons as any)[name];
  } else {
    Component = (FeatherIcon as any)[name];
  }

  return <Component size={size} color={color} {...rest} />;
};

Icon.defaultProps = {
  name: "Square",
  size: 24,
  color: COLOR_PRIMARY,
  customIcon: false
};
