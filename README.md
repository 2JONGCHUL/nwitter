# 602277124 이종철
## [2022.06.08]
### 사진 저장 기능 만들기
improt "firebase/storage";

### 스토리지에 사진 저장해보기
스토리지에서 제공 함수 putString 함수 URL 을 인자로 전달

### 스토리지에서 사진 불러오기
response.ref.getDownloadURL 함수
 
### 내가 쓴 트윗만 보기
파일 정리하기

## [2022.05.25]
### 사진 미리 보기 기능 만들기
<input type = "file" accept="image/*" />

footer 엘리먼트 삭제

### 웹 브라우저에 사진 출력해보기
const reader = new fileREader();

### 사진 미리보기 구현해보기

### 파일 선택 취소 버튼 만들기

## [2022.05.18]
### 실시간 데이터 베이스로 트윗 목록 보여주기
실시간 데이터 베이스로 트윗 목록 출력가능
onSnapshot 함수 사용하기

### 트윗 삭제 기능 만들기
Nweet.js 생성

### 트윗 수정, 삭제 만들기

## [2022.05.11]
### 리액트에서 파이어 베이스 데이터베이스 사용해보기
import "firebase/format/firestore";
export const dbService = firebase.firestore();

### 트윗 목록 저장, 출력하기
./src/routes/Home.js 진입

const nweetObject = {...}

## [2022.05.04]
### signWithPopup 소셜 로그인 완성

### 네이게이션 추가하고 로그아웃 처리하기
./src/compnents/Navigation.js

Router.js -> import Navigation from "./Navigation";

### 트윗 등록 기능 만들기
파이어베이스 데이터베이스 생성하기

<firebase Database> -> <데이터베이스 만들기> -> <테스트모드에서 시작> -> <asia-northeast1> 생성

## [2022.04.28]
### 파이어베이스로 로그인과 회원가입 처리하기
사용자 정보 출력 확인해주기
firebase - Authentcation - Users 콘솔정보로 회원가입된 사용자 확인
[Storage > IndexedDB > firebaseLocalStorageDB... > firebaseLocalStorage] 확인

### 로그인, 로그아웃 하기
useEffect 함수 사용하여 파이어베이스 로그인 정보를 받아, 파이어베이스가 초기화 

로그아웃 (수동) : IndexedDB - Clear 하기

에러와 에러메세지 파이어베이스로 처리하기
const[error, setErro] = useState("");

로그인,  회원가입 토글 버튼 적용

## [2022.04.14]
### 빈 화면 노출로 확인 불가 하여 원인 찾기
.env 파일 nwitter 바로 밑에 넣어주기. 하여 문제 해결

### 1. 파이어 베이스 버전 8.8.0 낮추기
npm install firebase@8.8.0

### 2. 파이어 베이스 인증 설정
[이메일/비밀번호, Google, Github 소셜 로그인]
1. Authentication, 시작하기 클릭
2. Users 탭 클릭
3. 로그인 방법 설정  클릭
4. 이메일/비밀번호, 구글, Github 사용 설정

### 3. 로그인 폼 기본구조, 상태 업데이트 (Auth.js 수정)


## [2022.04.06]
### react-router-dom 설치, 라우터 설정하기
 >npm i react-router-dom@5.2.0
> 
### 파이어 베이스 로그인 준비
jsconfig.js 파일 생성 및 작성

firebase.js 파일 이름 변경
firebase.js > fbase.js

## fbase 변경후 에러 해결방법 ../src/fbase.js
>import firebase from 'firebase/compat/app';
>import 'firebase/compat/auth';


## [2022.03.30]

### 1. firebase 설정
nwitter 폴더에서 >npm install firebase
src 폴더에 firebase.js 생성 후 파이어 베이스 웹 복사한 코드 입력

fire base 9버전 이상 하기 내용 입력
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

### 2. firebase 비밀키 
.env 파일 생성 

### 3. 라우터
routes, components 각각 폴더 생성
routes - Auth.js, EditProfile.js, Home.js, Profie.js 생성 후 값 입력
componets - App.js 이하여 import문 수정

npm install react-router-dom 설치


## [2022.03.23]

Git fata: bad boolean config value 'ture' for 'cire,ayticuf' 에러 노출
Git, nodejs 재설치 후 진행 -> node js 에러 노출로 진행 불가

### 개인 노트북으로 Github 레포지토리 초기화, PUSH동작 확인
  1. git init
  2. git config user.name "2JONGCHUL"
  3. git config user.email "qjwrhc15@naver.com"
  4. git remote add origin "https://github.com/2JONGCHUL/nwitter.git"
  5. git add .
  6. git commit -m "init git"
  7. git push -u origin master
 상기 순서로 명령어 입력후 Github PUSH 동작 정상 확인

### 정상동작
## 602277124 이종철

+ 파이어베이스 서비스의 종류 및 특징

```
*원격 구성(Remote Config)
앱을 업그레이드하지 않고도 여러분이 만든 앱의 동작이나 보이는 모습을 동적으로 변경할 수 있습니다

*인앱 메시징(In-App Messaging)
사용자들에게 맞춤화 된 타깃 메시지를 보여줘서 그들로 하여금 여러분이 만든 앱의 핵심 기능들을 사용해 볼 수 있도록 도와줍니다

클라우드 메시징(Cloud Messaging)
여러분의 앱을 사용하는 사람들이나 앱에서 무언가 흥미로운 일이 생겼을 때 푸시(push) 메시지를 전달할 수 있습니다. 
```
