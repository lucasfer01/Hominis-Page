import moduleStyle from "./Button.module.css";

interface Props {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  size?: "s" | "S" | "m" | "M" | "l" | "L";
  children: string;
  rounded?: boolean;
  uppercase?: boolean;
  bgColor?: string;
  fontColor?: string;
}

export const Button = ({
  onClick,
  className = "",
  style,
  size = "m",
  children,
  rounded = false,
  uppercase = false,
  bgColor = "#001935",
  fontColor = "#fff",
}: Props) => {
  return (
    <button
      className={`
        ${moduleStyle[`button-${size.toLowerCase()}`]}
        ${rounded ? moduleStyle["button--rounded"] : ""}
        ${uppercase ? moduleStyle["button--uppercase"] : ""}
        ${className}
      `}
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
