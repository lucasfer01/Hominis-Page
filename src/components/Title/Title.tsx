import moduleStyle from './Title.module.css';

interface Props {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  fontColor?: string;
  uppercase?: boolean;
}

export const Title = ({
  children,
  className,
  style,
  fontColor = "#121212",
  uppercase = false,
}: Props) => {
  return (
    <h2
        className={`
            ${uppercase ? moduleStyle[`title--uppercase`] : ''}
            ${className}
        `}
        style={{
            color: fontColor,
            ...style,
        }}
    >{children}</h2>
  );
};
