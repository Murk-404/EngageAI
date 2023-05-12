import s from "./index.module.css";
import { type NextPage } from "next";
import { SignIn, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";
import Sidebar from "~/components/navComponents/sidebar";
import Topbar from "~/components/navComponents/topbar";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const { isLoaded, isSignedIn } = useUser();

  if (!isSignedIn) return (
    <main className={s.loginScreen}>
      <SignIn />
    </main>
  )

  return (
    <main className={s.main}>
      <Sidebar/>
      <Topbar/>
      <div className={s.content}></div>
    </main>
  );
};

export default Home;
