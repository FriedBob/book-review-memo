# <div style="font-size:3rem; text-align:center">📖 Book Search & Review 📖</div>

[Naver Books](https://series.naver.com/ebook/home.series) 에서 책을 검색하여 관련 정보를 띄워주며 사용자가 메모를 남길 수 있으며 사용자 임의 책 추가,삭제,수정이 가능한 토이 프로젝트 사이트입니다.

## 🚨 Issues

---

- 현재 React-Router-Dom v6 관련 이슈로 <span style="color:orange">스티브 잡스</span>만 자동 검색하는 상태입니다. (픽스 예정)

- 불러오는 Comment의 텍스트 길이가 제한되어 있는 문제. (픽스 예정)

&nbsp;

# <div style="text-align:center">📚 Stacks</div>

<div style="text-align:center">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/redux_saga-999999?style=for-the-badge&logo=reduxsaga&logoColor=white">
<img src="https://img.shields.io/badge/ant_desgin-0170FE?style=for-the-badge&logo=antdesign&logoColor=white">
</div>

&nbsp;

# <div style="text-align:center">🏫 Features</div>

&nbsp;

## 로그인

---

- 로그인 ID/Password는 미리 등록되어있는 `localDB.json` 에서 확인 가능

```
npm start
npx json-server ./localDB.json --port 5500
```

- 프로젝트를 실행하고 , localDB의 서버를 5500 port로 실행시킨 이후 정상적으로 로그인 진행 가능
<div style="text-align:center">
  <img src="public/login.gif" width="600px"/>
</div>

&nbsp;

## Comment 조회

---

<div style="text-align:center">
  <img src="public/comment_look.gif" width="600px"/>
</div>

## Book 추가

---

<div style="text-align:center">
  <img src="public/book_add.gif" width="600px"/>
</div>

## Book 삭제

---

<div style="text-align:center">
  <img src="public/book_delete.gif" width="600px"/>
</div>

&nbsp;

# <div style="text-align:center">⚽ Installation</div>

Note: `package.json` 에 관련 dependency가 등록되어 있습니다.

&nbsp;

터미널 상에서 다음 명령어를 입력하여 연관 패키지를 설치합니다.

```
npm install
```

&nbsp;

이후 프로젝트를 실행하기 위해서 다음 코드를 터미널 상에서 입력합니다.

```
npm start
npx json-server ./localDB.json --port 5500
```

&nbsp;&nbsp;

# <div style="text-align:center">🖊️ Script</div>

- 터미널 상에서 아래의 스크립트로 동작합니다.

&nbsp;&nbsp;

## `npm start`

---

```
npm start
```

브라우저를 열어 프로젝트를 실행시킵니다. <br/><br/>
또는 명령어 입력 후 브라우저를 직접 열어 http://localhost:3000 주소에서 결과를 볼 수 있습니다.

&nbsp;&nbsp;

## `npm build`

---

```
npm build
```

프로젝트를 빌드합니다. <br/><br/>
빌드 후 생성된 `build` 폴더는 배포 시 해당 폴더가 배포됩니다.
