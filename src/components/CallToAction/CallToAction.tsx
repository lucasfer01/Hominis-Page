import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import moduleStyle from './CallToAction.module.css';

interface Props {
    title: string;
    onClick: () => void;
    btnTitle: string;
}

export const CallToAction = ({title, onClick, btnTitle}: Props) => {
  return (
    <div className={moduleStyle.callToAction}>
        <Title fontColor="var(--white)" className={moduleStyle.callToAction__title}>{title}</Title>

        <Button bgColor="var(--violet)" className={moduleStyle.callToAction__button} onClick={onClick}>{btnTitle}</Button>
    </div>
  )
}
