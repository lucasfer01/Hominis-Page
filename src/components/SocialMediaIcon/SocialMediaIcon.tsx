import moduleStyle from "./SocialMediaIcon.module.css";

interface Props {
  icon: string;
  alt?: string;
  link?: string;
}

export const SocialMediaIcon = ({ icon, alt, link }: Props) => {
  return (
    <img
      className={moduleStyle.socialMediaIcon}
      src={icon}
      alt={alt || "social media icon"}
      onClick={() => window.open(link, 'blank')}
    />
  );
};
