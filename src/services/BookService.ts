import axios, { AxiosRequestConfig } from "axios";
import { KAKAO_DEVELOPERS_API_KEY as API_KEY } from "../api_key";
import { BookReqType, BookType } from "../types";

// KAKAO DEVELOPERS API KEY (공개하지 말 것)
const api_key = API_KEY;
// api 요청 사이트

export default class BookService {
  public static async getBooks(
    token: string,
    title: string
  ): Promise<BookType> {
    const params = {
      query: title,
      target: "title",
    };

    // axios.get 에 header에 들어갈 인증토큰을 작성
    const kakaoBook = await axios.create({
      baseURL: "https://dapi.kakao.com",
      headers: {
        Authorization: `KakaoAK ${api_key}`,
      },
    });

    const response = await kakaoBook.get("/v3/search/book", { params });
    return response.data;
  }

  public static async addBook(
    token: string,
    book: BookReqType
  ): Promise<BookType> {
    const response = await axios.post(BOOK);
  }
}
