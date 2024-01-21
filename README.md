# TheMusical

## 배포 주소 https://coding-frog117.github.io/TheMusical/

### 개발 기간 :2023.03.28 ~ 2024.01.21

![Logo](https://github.com/coding-frog117/TheMusical/assets/110962765/3322173b-49f0-4037-b2d3-b8f4dea398c9)

## 프로젝트 소개

**TheMusical은 뮤지컬 관련 굿즈를 사고 팔 수 있는 오픈마켓입니다.
추가로 뮤지컬 주간 랭킹과 상세 정보를 제공하여 뮤지컬을 좋아하는 사람들에게 도움이 되고 좋아할 공간으로 만들었습니다.**

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

## 화면 구성 - 추후 추가 예정

| 메인 페이지(검색 기능) | 회원가입 | 로그인 |
| ---------------------- | -------- | ------ |
|                        |          |

| Top 50 랭킹 페이지 | 뮤지컬 정보 상세보기 | 구매회원 로그인 후 상품 장바구니 담기, 이동 |
| ------------------ | -------------------- | ------------------------------------------- |
|                    |                      |                                             |

| 바로 구매 | 장바구니에서 구매 | 주문하고 마이 페이지 이동 |
| --------- | ----------------- | ------------------------- |
|           |                   |                           |

| 판매회원 로그인 후 대시보드 이동 | 상품 업로드 | 상품 삭제 |
| -------------------------------- | ----------- | --------- |
|                                  |             |           |

| 상품 수정 |
| --------- |
|           |

## 주요 기능

- 주간 랭킹 : 주간 뮤지컬 랭킹을 캐러셀 형식으로 확인할 수 있습니다. Top 50 더보기 버튼을 누르면 50위까지 확인이 가능합니다.
- 뮤지컬 상세보기 : 뮤지컬 상세 정보 확인이 가능하며 해당 공연 관련 상품이 노출됩니다.
- 회원가입/로그인 : 구매회원과 판매회원으로 나누어 회원가입이 가능하며, 각 유형에 따라 헤더가 달라집니다.
- 검색 기능 : 헤더에 있는 검색 바를 통해 상품 검색이 가능합니다.
- 장바구니 담기 : 구매 회원만 장바구니 담기가 가능합니다.
- 주문하기 : 상품 상세 페이지에서 바로주문, 장바구니에서 한번에 주문, 장바구니에서 단독 주문 세가지가 가능합니다.
- 마이페이지 : 주문이 완료되면 마이페이지로 이동합니다. 헤더의 아이콘을 통해서도 이동 가능합니다.
- 대시보드 : 판매회원은 대시보드 확인이 가능합니다. 자신이 판매중인 상품을 볼 수 있습니다.
- 상품 관리 : 판매회원은 상품 업로드, 수정, 삭제가 가능합니다.
