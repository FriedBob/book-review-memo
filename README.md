# <div style="font-size:3rem; text-align:center">๐ Book Search & Review ๐</div>

[Naver Books](https://series.naver.com/ebook/home.series) ์์ ์ฑ์ ๊ฒ์ํ์ฌ ๊ด๋ จ ์ ๋ณด๋ฅผ ๋์์ฃผ๋ฉฐ ์ฌ์ฉ์๊ฐ ๋ฉ๋ชจ๋ฅผ ๋จ๊ธธ ์ ์์ผ๋ฉฐ ์ฌ์ฉ์ ์์ ์ฑ ์ถ๊ฐ,์ญ์ ,์์ ์ด ๊ฐ๋ฅํ ํ ์ด ํ๋ก์ ํธ ์ฌ์ดํธ์๋๋ค.

## ๐จ Issues

---

- ํ์ฌ React-Router-Dom v6 ๊ด๋ จ ์ด์๋ก <span style="color:orange">์คํฐ๋ธ ์ก์ค</span>๋ง ์๋ ๊ฒ์ํ๋ ์ํ์๋๋ค. (ํฝ์ค ์์ )

- ๋ถ๋ฌ์ค๋ Comment์ ํ์คํธ ๊ธธ์ด๊ฐ ์ ํ๋์ด ์๋ ๋ฌธ์ . (ํฝ์ค ์์ )

&nbsp;

# <div style="text-align:center">๐ Stacks</div>

<div style="text-align:center">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/redux_saga-999999?style=for-the-badge&logo=reduxsaga&logoColor=white">
<img src="https://img.shields.io/badge/ant_desgin-0170FE?style=for-the-badge&logo=antdesign&logoColor=white">
</div>

&nbsp;

# <div style="text-align:center">๐ซ Features</div>

&nbsp;

## ๋ก๊ทธ์ธ

---

- ๋ก๊ทธ์ธ ID/Password๋ ๋ฏธ๋ฆฌ ๋ฑ๋ก๋์ด์๋ `localDB.json` ์์ ํ์ธ ๊ฐ๋ฅ

```
npm start
npx json-server ./localDB.json --port 5500
```

- ํ๋ก์ ํธ๋ฅผ ์คํํ๊ณ  , localDB์ ์๋ฒ๋ฅผ 5500 port๋ก ์คํ์ํจ ์ดํ ์ ์์ ์ผ๋ก ๋ก๊ทธ์ธ ์งํ ๊ฐ๋ฅ
<div style="text-align:center">
  <img src="public/login.gif" width="600px"/>
</div>

&nbsp;

## Comment ์กฐํ

---

<div style="text-align:center">
  <img src="public/comment_look.gif" width="600px"/>
</div>

## Book ์ถ๊ฐ

---

<div style="text-align:center">
  <img src="public/book_add.gif" width="600px"/>
</div>

## Book ์ญ์ 

---

<div style="text-align:center">
  <img src="public/book_delete.gif" width="600px"/>
</div>

&nbsp;

# <div style="text-align:center">โฝ Installation</div>

Note: `package.json` ์ ๊ด๋ จ dependency๊ฐ ๋ฑ๋ก๋์ด ์์ต๋๋ค.

&nbsp;

ํฐ๋ฏธ๋ ์์์ ๋ค์ ๋ช๋ น์ด๋ฅผ ์๋ ฅํ์ฌ ์ฐ๊ด ํจํค์ง๋ฅผ ์ค์นํฉ๋๋ค.

```
npm install
```

&nbsp;

์ดํ ํ๋ก์ ํธ๋ฅผ ์คํํ๊ธฐ ์ํด์ ๋ค์ ์ฝ๋๋ฅผ ํฐ๋ฏธ๋ ์์์ ์๋ ฅํฉ๋๋ค.

```
npm start
npx json-server ./localDB.json --port 5500
```

&nbsp;&nbsp;

# <div style="text-align:center">๐๏ธ Script</div>

- ํฐ๋ฏธ๋ ์์์ ์๋์ ์คํฌ๋ฆฝํธ๋ก ๋์ํฉ๋๋ค.

&nbsp;&nbsp;

## `npm start`

---

```
npm start
```

๋ธ๋ผ์ฐ์ ๋ฅผ ์ด์ด ํ๋ก์ ํธ๋ฅผ ์คํ์ํต๋๋ค. <br/><br/>
๋๋ ๋ช๋ น์ด ์๋ ฅ ํ ๋ธ๋ผ์ฐ์ ๋ฅผ ์ง์  ์ด์ด http://localhost:3000 ์ฃผ์์์ ๊ฒฐ๊ณผ๋ฅผ ๋ณผ ์ ์์ต๋๋ค.

&nbsp;&nbsp;

## `npm build`

---

```
npm build
```

ํ๋ก์ ํธ๋ฅผ ๋น๋ํฉ๋๋ค. <br/><br/>
๋น๋ ํ ์์ฑ๋ `build` ํด๋๋ ๋ฐฐํฌ ์ ํด๋น ํด๋๊ฐ ๋ฐฐํฌ๋ฉ๋๋ค.
