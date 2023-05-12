import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider appearance={{baseTheme: dark}} {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
