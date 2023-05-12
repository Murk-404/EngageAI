import s from "./nav.module.css";
import EngageLogo from "../icons/logo";

const Sidebar = () => {

  return (<>
    <div className={s.sidebarLogo}>
      <EngageLogo />
    </div>
    <div className={s.sidebar}>
    </div>
  </>);
};

export default Sidebar;
