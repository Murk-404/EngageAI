import s from "./nav.module.css";
import { UserButton } from "@clerk/nextjs";
import NotificationIcon from "../icons/notification";

// const Topbar: React.FC<SidebarProps> = ({isLoaded, isSignedIn}) => {
const Topbar = () => {
  return (
    <div className={s.topbar}>
      <NotificationIcon />
      <UserButton />
    </div>
  );
};

export default Topbar;
