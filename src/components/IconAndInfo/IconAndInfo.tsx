import { IconType } from "react-icons";
import moduleStyle from "./IconAndInfo.module.css";

interface Props {
  Icon: IconType;
  info: string;
  link?: string;
}

export const IconAndInfo = ({ Icon, info, link }: Props) => {
  return (
    <div
      onClick={() => link && window.open(link, "blank")}
      className={moduleStyle.iconAndInfo}
      style={link ? { cursor: "pointer" } : {}}
    >
      <Icon style={{ fontSize: "30px" }} />

      <span>{info}</span>
    </div>
  );
};
