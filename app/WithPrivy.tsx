import { PrivyProvider } from "@privy-io/react-auth";
import type { User } from "@privy-io/react-auth";
import React from "react";

const handleLogin = (user: User, isNewUser: boolean) => {
  console.log("Login", user, isNewUser);
};


interface IWithPrivyProps {
  children: React.ReactNode
}

export const WithPrivy = ({ children }: IWithPrivyProps): JSX.Element => {
  if (typeof document !== "undefined") {
    return <PrivyProvider
      appId={"<change me>"}
      onSuccess={handleLogin}
      config={{
        loginMethods: ["email", "google", "twitter", "wallet"],

        appearance: {
          theme: "dark",
          accentColor: "#676FFF",
          logo: "https://your-logo-url",
          showWalletLoginFirst: false,
        },
      }}
    >
      {children}
    </PrivyProvider>
  }
  
  return <>{children}</>
};