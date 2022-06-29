import React from "react";
import { Navigate } from "react-router-dom";
import EditContainer from "../containers/EditContainer";
import useToken from "../hooks/useToken";

export default function Edit() {
  const token = useToken();
  if (token === null) {
    return <Navigate to="/signin" />;
  }
  return <EditContainer />;
}
