# 개인 이력서 웹사이트

HTML / CSS / JavaScript 기반 모던 미니멀 이력서 사이트

## 파일 구조

```
rest01/
├── index.html      # 메인 페이지
├── style.css       # 스타일
├── script.js       # 인터랙션
└── assets/         # 사진, 이미지 파일
    ├── profile.jpg      # 프로필 사진
    ├── project1.jpg     # 프로젝트 썸네일
    └── project2.jpg
```

## 수정 방법

`index.html` 파일에서 아래 내용을 본인 정보로 교체하세요.

| 항목 | 위치 |
|------|------|
| 이름 | `<h1 class="hero-name">` |
| 직함 | `<p class="hero-title">` |
| 소개 | `<p class="hero-bio">` |
| 이메일/GitHub/LinkedIn | `.hero-links` 안 `<a>` 태그 |
| 경력 | `#experience` 섹션 |
| 학력 | `#education` 섹션 |
| 프로젝트 | `#projects` 섹션 |

## 사진 추가

- 프로필 사진 → `assets/profile.jpg` 로 저장
- 프로젝트 이미지 → `assets/project1.jpg`, `assets/project2.jpg` 로 저장

## GitHub Pages 배포

Settings → Pages → Branch: main / root → Save
