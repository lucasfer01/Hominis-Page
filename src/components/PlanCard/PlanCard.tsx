import { Title } from "../Title/Title";
import moduleStyle from "./PlanCard.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Button } from "../Button/Button";
import { useCard } from "./hooks/useCard";

interface Props {
  title: string;
  description?: string;
  benefits: Array<string>;
  popular?: boolean;
}

export const PlanCard = ({
  title,
  description,
  benefits,
  popular = false,
}: Props) => {
  const { isContracted, toogleIsContracted } = useCard();

  return (
    <div
      className={`${moduleStyle.plancard} ${
        isContracted
          ? moduleStyle["plancard--descontracted"]
          : moduleStyle["plancard--contracted"]
      }`}
    >
      {popular ? <span className={moduleStyle.popular}>POPULAR</span> : false}

      <Title
        fontColor="var(--white)"
        style={{ fontSize: "2rem", marginTop: ".5rem" }}
      >
        {title}
      </Title>

      <hr />

      <p className={`${moduleStyle.plancard__description}`}>{description}</p>

      <div className={moduleStyle.plancard__benefits}>
        {!!benefits.length &&
          benefits.map((benefit: string) => (
            <div className={moduleStyle.plancard__benefit}>
              <AiOutlineCheckCircle fill="var(--white)" />

              <span>{benefit}</span>
            </div>
          ))}
      </div>

      <span onClick={toogleIsContracted} className={moduleStyle.expand}>
        {isContracted ? "Ver menos" : "Ver más"}
      </span>

      <Button
        rounded
        bgColor="#fff"
        fontColor="var(--violet)"
        style={{ width: "100%", borderRadius: "10px" }}
      >
        Comenzar
      </Button>
    </div>
  );
};
