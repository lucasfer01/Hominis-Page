import { Title } from "../Title/Title";
import moduleStyle from "./Container.module.css";

const backupSrc =
  "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";

interface Props {
  img: string;
  order: "RTL" | "LTR" | "rtl" | "ltr";
  title: string;
  children: string;
  bgColor?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Container = ({
  img,
  order = "RTL",
  title,
  children,
  bgColor = '#fff',
  style,
  className, 
}: Props) => {
  return (
    <div
      className={`${moduleStyle.container} ${className}`}
      style={
        order.toLowerCase() === "ltr"
          ? { flexDirection: "row-reverse", backgroundColor: bgColor, ...style }
          : { backgroundColor: bgColor, ...style }
      }
    >
      <img src={img || backupSrc} alt="Example" className={moduleStyle.img} />

      <div className={moduleStyle.text}>
        <Title style={{ fontSize: "1.8rem" }} fontColor="#7a4bff">
          {title || "Titulo por defecto"}
        </Title>

        <p className={moduleStyle.parrafo}> {children} </p>
      </div>
    </div>
  );
};
