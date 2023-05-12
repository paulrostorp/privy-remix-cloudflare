import { usePrivy } from "@privy-io/react-auth";
import React from "react";

interface ILoginButtonProps { }

export const LoginButton = ({ }: ILoginButtonProps): JSX.Element => {
  const privy = usePrivy()

  return <button onClick={privy.login}>Log in</button>;
};