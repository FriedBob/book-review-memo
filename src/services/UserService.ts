import axios from "axios";
import { LoginReqType } from "../types";

const USER_API_URL = "http://localhost:5500/users";
// 로그인 api 서버가 동작을 하지 않아 임시로 local 서버 구현

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<string> {
    const response = await axios.get(USER_API_URL);
    const users = await response.data;

    for (let user of users) {
      if (reqData.email === user.email && reqData.password === user.password) {
        return user.token;
      }
    }
    return "undefined";
  }

  public static async logout(token: string): Promise<void> {
    await axios.delete(USER_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
