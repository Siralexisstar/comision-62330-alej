import "./Logo.css";
import VFinal from "../../assets/logo/VFinal.png";

export const LogoImg = () => {
  return (
    <div>
      <img src={VFinal} alt="Logo" className="logo-img" />
    </div>
  );
};

export default LogoImg;
