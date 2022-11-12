import moduleStyle from "./PlansCardContainer.module.css";
import { usePlans } from "../../hooks/usePlans";
import { PlanCard } from "../PlanCard/PlanCard";

export const PlansCardContainer = () => {
  const { plans } = usePlans();

  return (
    <div className={moduleStyle.plansCardContainer}>
      {!!plans.length &&
        plans.map(({ name, benefits, description, popular }: any) => (
          <PlanCard
            key={name}
            title={name}
            benefits={benefits}
            description={description}
            popular={popular}
          />
        ))}
    </div>
  );
};
