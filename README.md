# NODE North Port — Studio SY

부산 북항의 프리미엄 스테이 **NODE North Port** 웹사이트입니다.
프레이머(Framer)로 만든 원본 사이트 `https://turquoise-calls-616054.framer.app/` 의
디자인·타이포그래피·섹션 구성·문구·이미지를 그대로 살려 정적 웹(HTML/CSS/JS)으로
다시 구현한 결과물입니다.

## 구성

| 경로 | 페이지 |
| --- | --- |
| `index.html` | 홈 (히어로 영상, 인트로, 서비스, 액티비티, 후기, 객실, 예약 CTA) |
| `hotel.html` | Our Hotel — 호텔 소개, 비전, 후기, 주변 명소, FAQ |
| `rooms.html` | Rooms — 전체 객실 목록 |
| `rooms/tide-penthouse.html` | Tide Penthouse 상세 |
| `rooms/horizon-suite.html` | Horizon Suite 상세 |
| `rooms/north-port-deluxe.html` | North Port Deluxe 상세 |
| `rooms/harbor-standard.html` | Harbor Standard 상세 |
| `restaurant.html` | Restaurant — 운영 시간, 오늘의 메뉴 |
| `events.html` | Events — 정기 이벤트, 프라이빗 이벤트 |
| `experience.html` | Facilities & Services — 부대시설 9종 |
| `contact.html` | Contact — 연락처, 문의 폼 |
| `404.html` | 존재하지 않는 주소 안내 |

```
assets/
  css/style.css      스타일 (디자인 토큰, 반응형, 애니메이션)
  js/main.js         내비게이션·메뉴 오버레이·스크롤 리빌·FAQ 아코디언
  fonts/             DM Serif Display, Zodiak, Hedvig Letters Sans (woff2)
  img/               사이트 이미지 43종
  video/hero.mp4     홈 히어로 배경 영상
```

## 로컬에서 보기

```bash
# 정적 파일이므로 별도 빌드가 필요 없습니다.
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 배포

GitHub Pages, `gh-pages` 브랜치 루트를 게시합니다.

- 주소: https://mint-soyoung.github.io/node/
- 현재 설정: **Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages`, Folder: `/ (root)`**
- 내용은 `main`과 동일합니다. 수정 사항을 반영하려면 `main`에 커밋한 뒤
  `git push origin main:gh-pages` 로 배포 브랜치를 갱신하면 됩니다.

## 참고

- 폰트와 이미지는 원본 사이트에서 사용 중인 리소스를 내려받아 `assets/` 안에 두었습니다.
  외부 CDN에 의존하지 않으므로 오프라인에서도 동일하게 보입니다.
- 원본 프레이머 사이트에서 객실 카드가 연결하던 `/rooms/{객실}` 주소는 404였습니다.
  링크가 깨지지 않도록 같은 디자인 톤으로 객실 상세 페이지를 새로 작성했습니다.
- 예약 버튼은 원본과 동일하게 Booking.com으로 연결됩니다.
