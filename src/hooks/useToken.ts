// 토큰(로그인)권한을 page마다 일일히 확인하는 코드를 절약하기 위해 만든 사용자 정의 hook

import { useSelector } from "react-redux";
import { RootState } from "../types";

export default function useToken() {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );

  return token;
}
