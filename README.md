# AIBB 웹사이트 리뉴얼 컨셉

> ⚠️ 본 프로젝트는 학습 및 포트폴리오 목적으로 제작한 **비공식 리디자인**이며, AIBB 브랜드와 협업하거나 제휴한 프로젝트가 아닙니다. 사용된 브랜드명·이미지의 권리는 원저작권자에게 있습니다.

**My color, My choice** — 컬러를 고르는 즐거움을 담은 화장품 브랜드 AIBB의 반응형 쇼핑 웹사이트 리뉴얼 컨셉입니다.

- 🔗 사이트 보기: https://inmoonmi.github.io/aibb-renewal-concept/
- 🔗 Netlify 배포본: https://aibbshop.netlify.app/

## 프로젝트 개요

| 항목 | 내용 |
|---|---|
| 기간 | 2026.11 (2주) |
| 인원 | 1인 (기획 · 디자인 · 구현) |
| 도구 | Figma, Photoshop, React, Vite, Claude AI |
| 대상 | 화장품에 관심 있는 20~40대 |

### 리뉴얼 포인트
- PC에서도 모바일 화면이 가운데 고정되어 있던 구조를 **PC·태블릿·모바일 반응형 레이아웃**으로 재설계
- 컬러 선택 부담을 줄이는 **'나만의 컬러 찾기' 테스트**와 컬러별 탐색
- 룩북·리뷰에서 구매로 이어지도록 콘텐츠와 쇼핑 동선 연결
- 대표색 `#E72019`는 CTA·배지 같은 포인트에만 사용

## 주요 페이지

`/` 메인 홈, `/shop` 상품 목록, `/lookbook` 룩북, `/brand` 브랜드 스토리, `/event` 이벤트, `/mypage` 마이페이지, `/cart` 장바구니, `/notice` 공지사항, `/service` FAQ

실제 회원가입·결제·주문·데이터베이스는 연결하지 않았습니다. 상품·룩북·이벤트·공지는 코드 안의 샘플 데이터로 동작하며, 장바구니·관심상품·컬러 테스트 결과는 브라우저의 `localStorage`에만 저장됩니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000/aibb-renewal-concept/`을 열면 됩니다.

```bash
npm run check   # 타입 검사
npm test        # 샘플 데이터 테스트
npm run build   # 배포용 파일 생성 (dist/public)
```

`main` 브랜치에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로 빌드해 GitHub Pages에 배포합니다.

## 폴더 구조

- `client/src/pages`: 화면 단위 React 페이지와 페이지별 CSS
- `client/src/components/shop`: 공통 헤더·푸터와 상품 행
- `client/src/data`: 상품·룩북·장바구니 샘플 데이터 및 테스트
- `client/src/contexts`: localStorage 기반 장바구니·관심상품 상태
- `client/public/home-assets`: 메인 홈 이미지
- `client/public/media`: Shop·룩북·이벤트 이미지
- `client/public/home-fonts`: 홈 전용 폰트

수정 위치는 [EDITING_GUIDE.md](./EDITING_GUIDE.md)에 파일별로 정리했습니다.
