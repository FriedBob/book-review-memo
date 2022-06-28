import React from "react";
import { Navigate } from "react-router-dom";
import DetailContainer from "../containers/DetailContainer";
import useToken from "../hooks/useToken";

export default function Detail() {
  const token = useToken();
  if (token === null) {
    return <Navigate to="/signin" />;
  }
  return <DetailContainer />;
}
