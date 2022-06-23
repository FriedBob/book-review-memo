import React from "react";
import { Navigate } from "react-router-dom";
import ListContainer from "../containers/ListContainer";
import useToken from "../hooks/useToken";

export default function Home() {
  // const token = useSelector<RootState, string | null>(
  //   (state) => state.auth.token
  // ); useToken() 으로 이전

  const token = useToken();

  if (token === null) {
    return <Navigate to="/signin" />;
  }

  return <ListContainer />;
}
