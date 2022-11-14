import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { SocialMediaIcon } from "../SocialMediaIcon/SocialMediaIcon";
import { IconAndInfo } from "../IconAndInfo/IconAndInfo";

import moduleStyle from "./ContactInfo.module.css";

export const ContactInfo = () => {
  return (
    <div className={moduleStyle.contactInfo}>
      <div className={moduleStyle.contactInfo__info}>
        <IconAndInfo Icon={AiOutlinePhone} info={"+54 9 1139081168"} link="https://wa.me/+5491139081168" />

        <IconAndInfo
          Icon={AiOutlineMail}
          info={"hoministumejorprepaga@gmail.com"}
        />

        <IconAndInfo Icon={BsPersonCircle} info={"Vanesa Fernández"} />
      </div>

      <div className={moduleStyle.contactInfo__icons}>
        <SocialMediaIcon
          icon={
            "https://drive.google.com/uc?export=view&id=1gb6NF2-WRPIbdeLY1nTeW6O3stIQwOcj"
          }
          alt="Instagram Logo"
          link="https://www.instagram.com/hoministumejorprepaga/"
        />

        <SocialMediaIcon
          icon={
            "https://drive.google.com/uc?export=view&id=1Zqwpu6NBmQeD1OIROOd2x9SMW6_p_8eA"
          }
          alt="Linkedin Logo"
          link="https://www.linkedin.com/company/hominis-plan-de-salud-del-sanatorio-g%C3%BCemes/"
        />

        <SocialMediaIcon
          icon={
            "https://drive.google.com/uc?export=view&id=18DGFmgGMs9_TnZ85t5iqjuSY_HpQdkAx"
          }
          alt="Facebook Logo"
          link="https://www.facebook.com/profile.php?id=100087299516331"
        />
      </div>
    </div>
  );
};
