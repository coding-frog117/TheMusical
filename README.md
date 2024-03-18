# TheMusical
뮤지컬 관련 굿즈를 사고 팔 수 있는 오픈마켓

## 배포 주소 https://coding-frog117.github.io/TheMusical/

### 개발 기간 :2023.03.28 ~ 2024.01.21

![Logo](https://github.com/coding-frog117/TheMusical/assets/110962765/3322173b-49f0-4037-b2d3-b8f4dea398c9)

## 프로젝트 소개

**TheMusical은 뮤지컬 관련 굿즈를 사고 팔 수 있는 오픈마켓입니다.
추가로 뮤지컬 주간 랭킹과 상세 정보를 제공하여 뮤지컬을 좋아하는 분들에게 도움이 되는 공간으로 만들었습니다.**

## 📚 Stacks

### Environment

![visualstudio](https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white")&nbsp;![github](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)

### config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)&nbsp;![styled-components](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black)&nbsp;![redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)

## 시작 가이드

### Requirements

안정적인 구동을 위해 추천하는 버전입니다.

```
NPM 9.6.7
```

### Installation

```
git clone https://github.com/coding-frog117/TheMusical.git
cd TheMusical
```

### Frontend

```
cd src
npm install
npm start
```

## 화면 구성

| 메인 페이지(검색 기능)                                                                                                                       | 무한 캐러셀                                                                                                                                  | 뮤지컬 상세정보                                                                                                                              | top50 랭킹                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/fb492b5a-2d1d-440a-83d4-00ed8e32c1d7" width = "400" height="200" /> | <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/ac18a4bb-a447-49f5-acc4-b1db610ef260" width = "400" height="200" /> | <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/f5df7ecb-a0bd-4413-b4f5-f4bb3e3735c8" width = "400" height="200" /> | <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/5430ae71-770d-4b0a-b4c3-2b28883fb873" width = "400" height="200" /> |

| 회원가입                                                                                                                                     | 구매회원 로그인                                                                                                                              | 장바구니 담기                                                                                                                                | 장바구니 삭제                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/56dfffdc-8732-4a2a-adcc-5d5b51c28382" width = "400" height="200" /> | <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/afdff78e-f47a-4e1e-9329-243d75a59be9" width = "400" height="200" /> | <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/e19927dd-394d-44f4-bddb-a53eb6d1fd67" width = "400" height="200" /> | <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/119446e1-9110-41f0-a70b-1ef5e292f141" width = "400" height="200" /> |

| 장바구니 주문                                                                                                                                | 바로주문,마이페이지                                                                                                                          | 판매회원 로그인, 대시보드                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/299365cb-19b9-4b80-b322-e154694a0f67" width = "400" height="200" /> | <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/ccb28714-8fe4-4d5e-b7f6-c3d25798a44e" width = "400" height="200" /> | <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/7abd3499-7a88-49c1-b349-f2874875f6ba" width = "400" height="200" /> |

| 상품 업로드                                                                                                                                  | 상품 수정                                                                                                                                    | 상품 삭제                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/0a518add-7216-49e8-8ee9-fd747a7d09d4" width = "400" height="200" /> | <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/e043feb0-5c4f-4508-99ef-53798e543035" width = "400" height="200" /> | <img src= "https://github.com/coding-frog117/TheMusical/assets/110962765/6344f0e7-9863-43c8-8703-8770f24fcf5d" width = "400" height="200" /> |

## 트러블 슈팅

### 1

https://coding-frog.tistory.com/34

- **[문제 상황]**
  로그인 이후 새로고침 하면 redux에 저장된 토큰이 초기화되어 유저 로그인 상태 유지가 안된다.
- **[해결 방법]**
  Redux의 유저 정보 slice를 `redux-persist`로 저장하여 영구적으로 저장되는 토큰으로 만들어준다.

### 2

https://coding-frog.tistory.com/25

- **[문제 상황]**
  로그인 및 회원가입의 form 데이터를 관리하기 번거롭다.
- **[해결 방법]**
  `React Hook Form` 라이브러리를 활용하여 form데이터의 유효성 검사 및 관리를 효율적으로 수행하였다.

### 3

https://coding-frog.tistory.com/26

- **[문제 상황]**
  `React Hook Form` 라이브러리의 register, errors 객체를 컴포넌트에 넘겨줄 때 props-drilling이 발생한다.
- **[해결 방법]**
  `React Hook Form` 라이브러리의 `useFormContext` 라는 컨텍스트 훅을 통해 해당 객체를 하위 컴포넌트에 넘겨주지 않고 관리할 수 있다.

### 4

- **[문제 상황]**
  api요청 시 유사한 코드의 반복이 발생한다.
- **[해결 방법]**
  useFetch라는 이름의 `custom hook`을 제작하여 코드 중복을 최소화하였다.

### 5

- **[문제 상황]**
  메인 페이지에서 최근 등록된 상품을 불러올 때, 해당 서버를 이용한 타 서비스의 상품들이 포함되어 호출된다.
- **[해결 방법]**

1. 상품 등록 및 수정 시 product-info(상품 상세 정보) 필드에 해당 서비스 이름인 `(TheMusical) 식별 문자열을 추가`하여 등록하였다.
2. 최근 등록된 상품 불러올 시에는 모든 상품을 가져온 후 product-info 필드에 (TheMusical) 문자열이 포함된 상품만을 필터링하였다.

_productDetail 페이지에서는 상품 상세 정보를 띄울 때 (TheMusical) 문자열을 숨기기 위해 split 함수를 사용하였다._

## 프로젝트를 마치며

- 프론트엔드 개발자로서 내가 원하는 기능을 추가하여 구현해내서 기쁘고, 디자인 패턴 도입을 통해 폴더구조를 체계화하는 방법에 대해 알게 되었다.
- 다음 프로젝트에서는 코드의 품질 개선에 좀 더 신경쓰고 싶다. 객체를 객체답게, 함수를 함수답게 사용할 수 있도록 해야겠고 테스트 코드 작성도 시도해보고 싶다.
