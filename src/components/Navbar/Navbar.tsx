import moduleStyle from "./Navbar.module.css";

interface Props {
  children: JSX.Element[];
}

export const Navbar = ({ children }: Props) => {
  return (
    <nav className={`${moduleStyle.nav}`}>
      <img
        src="https://drive.google.com/uc?export=view&id=1qyEgI1gbothNkI9NklYUYHQzoe0hb2RQ"
        alt="logo hominis"
        className={moduleStyle["nav-logo"]}
      />

      <div className={moduleStyle["nav-links"]}>
        {children}
      </div>
    </nav>
  );
};
