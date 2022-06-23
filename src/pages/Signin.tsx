import React from "react";

import { Navigate } from "react-router-dom";
import SigninContainer from "../containers/SigninContainer";
import useToken from "../hooks/useToken";

export default function Signin() {
  // const token = useSelector<RootState, string | null>(
  //   (state) => state.auth.token
  // );

  const token = useToken();

  if (token !== null) {
    return <Navigate to="/" />;
  }
  return <SigninContainer />;
}
